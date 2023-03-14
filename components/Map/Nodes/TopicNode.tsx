import useMapStore from '@/stores/mapStore';
import { memo, useEffect, useState } from 'react';
import { Handle, Position } from 'reactflow';
import { useDebounce } from 'react-use';
import BlockContainer from '@/components/ui/BlockContainer';
// import NodeHeader from '@/components/ui/NodeHeader';
import { useConfiguration } from '@/utils/providers/ConfigurationProvider';
import ToggleTextarea from '@/components/ui/ToggleTextarea';
import AIContentModal from './AIContentModal';
import { AI_MODE } from '@/utils/constants/modes';

const TopicNode = ({ id, data }: any) => {
	const { mode } = useConfiguration();

	const [value, setValue] = useState(data.text);
	const [isOpenAIModal, setIsOpenAIModal] = useState(false);

	const updateText = useMapStore((s) => s.updateText);
	// const updateInnerType = useMapStore((s) => s.updateInnerType);
	const removeElement = useMapStore((s) => s.removeElement);

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

	// const updateType = (type: string) => {
	// 	updateInnerType(id, type);
	// };

	const onRemove = () => {
		removeElement(id);
	};

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

		return <ToggleTextarea value={value} setValue={setValue} />;
	};

	return (
		<div onClick={onClick}>
			{/* <NodeHeader text='Sub topic' type={data.type} onChangeType={updateType} /> */}
			<AIContentModal id={id} isOpen={isOpenAIModal} onChangeOpen={setIsOpenAIModal}>
				<BlockContainer onRemove={onRemove}>
					<Handle type='target' position={Position.Top} />

					<div className='py-1 px-2'>{renderContent()}</div>
					<Handle type='source' position={Position.Bottom} id='a' />
				</BlockContainer>
			</AIContentModal>
		</div>
	);
};

export default memo(TopicNode);
