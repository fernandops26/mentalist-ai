import { Popover, PopoverContent, PopoverAnchor } from '@/components/ui/Popover';
import { SUBTOPIC } from '@/utils/constants/headerTypes';
import Generator from '../Generator/Generator';
import { useToast } from '@/hooks/use-toast';
import { useConfiguration } from '@/utils/providers/ConfigurationProvider';
import { ReactNode, useState } from 'react';
import useMapStore from '@/stores/mapStore';
import { generateIdeas } from '@/utils/api/suggestions';

interface AIContentProps {
	id: string;
	isOpen: boolean;
	onChangeOpen: (open: boolean) => void;
	children: ReactNode;
}

export default function AIContentModal({ id, isOpen, onChangeOpen, children }: AIContentProps) {
	const { token, model } = useConfiguration();
	const { toast } = useToast();
	const [isLoading, setIsLoading] = useState(false);
	const getNodeContext = useMapStore((s) => s.getNodeContext);
	const addChildrenNodes = useMapStore((s) => s.addChildrenNodes);
	const removeElement = useMapStore((s) => s.removeElement);

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
		onChangeOpen(false);
	};

	return (
		<Popover open={isOpen} onOpenChange={onChangeOpen}>
			{children}
			<PopoverAnchor />
			<PopoverContent className='w-80'>
				<Generator onGenerate={generator} isLoading={isLoading} />
			</PopoverContent>
		</Popover>
	);
}
