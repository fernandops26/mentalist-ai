import useMapStore from '@/stores/mapStore';
import { memo, useEffect, useState } from 'react';
import { Handle, Position } from 'reactflow';
import { useDebounce } from 'react-use';
import ToggleInput from '@/components/ui/ToggleInput';
import BlockContainer from '@/components/ui/BlockContainer';
// import NodeHeader from '@/components/ui/NodeHeader';
import { useConfiguration } from '@/utils/providers/ConfigurationProvider';
import AIContentModal from './AIContentModal';
import { AI_MODE } from '@/utils/constants/modes';

const RootNode = ({ id, data }: any) => {
	const { mode } = useConfiguration();
	const [isOpenAIModal, setIsOpenAIModal] = useState(false);
	const [value, setValue] = useState(data.text);

	const updateText = useMapStore((s) => s.updateText);

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

	const onClick = () => {
		switch (mode) {
			case AI_MODE:
				setIsOpenAIModal(true);
				break;
		}
	};

	const renderContent = () => {
		if (mode === AI_MODE) {
			return <p>{value}</p>;
		}

		return <ToggleInput value={value} setValue={setValue} />;
	};

	return (
		<div onClick={onClick}>
			<AIContentModal id={id} isOpen={isOpenAIModal} onChangeOpen={setIsOpenAIModal}>
				<BlockContainer>
					{/* <NodeHeader text='Topic' type={data.type} /> */}
					<div className='py-1 px-2 flex items-center text-lg'>{renderContent()}</div>
					<Handle type='source' position={Position.Bottom} id='a' />
				</BlockContainer>
			</AIContentModal>
		</div>
	);
};

export default memo(RootNode);
