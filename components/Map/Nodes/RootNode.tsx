import useMapStore from '@/stores/mapStore';
import { memo, useCallback, useEffect, useState } from 'react';
import { Handle, Position } from 'reactflow';
import { useDebounce } from 'react-use';
import ToggleInput from '@/components/ui/ToggleInput';
import BlockContainer from '@/components/ui/BlockContainer';
import NodeHeader from '@/components/ui/NodeHeader';
import { useOpenAIConfiguration } from '@/utils/providers/ConfigurationProvider';
import { generateIdeas } from '@/utils/api/suggestions';
import { SUBTOPIC } from '@/utils/constants/headerTypes';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/Popover';
import Loader from '@/components/ui/Loader';
import IconComponent from '@/components/ui/Icon';
import Generator from '../Generator/Generator';
import { useToast } from '@/hooks/use-toast';

const Menu = ({ isLoading, generator }: { isLoading: boolean; generator: (...res: any) => {} }) => {
	if (isLoading) {
		return <Loader />;
	}

	return (
		<>
			<Popover>
				<PopoverTrigger>
					<div className='mt-1 p-1 hover:bg-slate-50 rounded hover:border-slate-700 border-2 border-white'>
						<IconComponent name='want' className='h-3 w-3' />
					</div>
				</PopoverTrigger>
				<PopoverContent className='w-80'>
					<Generator onGenerate={generator} />
				</PopoverContent>
			</Popover>
		</>
	);
};

const RootNode = ({ id, data }: any) => {
	const { token, model } = useOpenAIConfiguration();
	const { toast } = useToast();

	const [value, setValue] = useState(data.text);
	const [isLoading, setIsLoading] = useState(false);

	const updateText = useCallback(
		useMapStore((s) => s.updateText),
		[],
	);
	const getNodeContext = useMapStore((s) => s.getNodeContext);
	const addChildrenNodes = useMapStore((s) => s.addChildrenNodes);

	const [, cancel] = useDebounce(
		() => {
			updateText(id, value);
		},
		1000,
		[value],
	);

	useEffect(() => {
		setValue(data.text);
	}, [data.text]);

	const generator = async ({ accurateFor, type }: { accurateFor: string; type: string }) => {
		if (!token) {
			toast({
				variant: 'destructive',
				title: 'You need to configure your OpenAI API key first',
				description: 'Use the hamburger menu located at the top of the page and configure your OpenAI API key.',
			});

			return;
		}

		setIsLoading(true);
		const { main, context } = getNodeContext(id);

		const ideas = await generateIdeas({
			main,
			context,
			token,
			accurateFor,
			type,
			model,
		});

		const newNodes = ideas.map((idea: string) => ({
			text: idea,
			type: SUBTOPIC,
			parentId: id,
		}));

		addChildrenNodes(id, 'topicNode', newNodes);
		setIsLoading(false);
	};

	return (
		<BlockContainer menu={<Menu isLoading={isLoading} generator={generator} />}>
			<NodeHeader text='Topic' type={data.type} />
			<div className='py-1 px-2 flex items-center text-sm text-slate-800'>
				<ToggleInput value={value} setValue={setValue} />
			</div>
			<Handle type='source' position={Position.Bottom} id='a' />
		</BlockContainer>
	);
};

export default memo(RootNode);
