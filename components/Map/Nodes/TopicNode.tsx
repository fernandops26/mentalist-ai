import useMapStore from '@/stores/mapStore';
import { memo, useState } from 'react';
import { Handle, Position } from 'reactflow';
import { useDebounce } from 'react-use';
import ToggleInput from '@/components/ui/ToggleInput';
import BlockContainer from '@/components/ui/BlockContainer';
import NodeHeader from '@/components/ui/NodeHeader';
import { generateIdeas } from '@/utils/api/suggestions';
import { SUBTOPIC } from '@/utils/constants/headerTypes';
import Loader from '@/components/ui/Loader';
import { useToken } from '@/utils/providers/TokenProvider';
import IconComponent from '@/components/ui/Icon';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/Popover';
import Generator from '../Generator/Generator';

const handleStyle = { left: 10 };

const TopicNode = ({ id, data }: any) => {
  const { token } = useToken();
  const [value, setValue] = useState(data.text);
  const [isLoading, setIsLoading] = useState(false);

  const updateText = useMapStore((s) => s.updateText);
  const updateInnerType = useMapStore((s) => s.updateInnerType);
  const getNodeContext = useMapStore((s) => s.getNodeContext);
  const addChildrenNodes = useMapStore((s) => s.addChildrenNodes);
  const removeElement = useMapStore((s) => s.removeElement);

  const [, cancel] = useDebounce(
    () => {
      updateText(id, value);
    },
    1000,
    [value]
  );

  const updateType = (type: string) => {
    updateInnerType(id, type);
  };

  const generator = async ({
    accurateFor,
    type,
  }: {
    accurateFor: string;
    type: string;
  }) => {
    if (!token) {
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
    });

    const newNodes = ideas.map((idea: string) => ({
      text: idea,
      type: SUBTOPIC,
      parentId: id,
    }));

    addChildrenNodes(id, 'topicNode', newNodes);
    setIsLoading(false);
  };

  const Menu = () => {
    if (isLoading) {
      return <Loader />;
    }

    return (
      <>
        <Popover>
          <PopoverTrigger>
            <div className='mt-1 p-1 hover:bg-slate-50 rounded'>
              <IconComponent name='want' className='h-3 w-3 ' />
            </div>
          </PopoverTrigger>
          <PopoverContent className='w-80'>
            <Generator onGenerate={generator} />
          </PopoverContent>
        </Popover>
      </>
    );
  };

  const onRemove = () => {
    removeElement(id);
  };

  return (
    <BlockContainer menu={Menu()} onRemove={onRemove}>
      <Handle type='target' position={Position.Top} />
      <NodeHeader text='Sub topic' type={data.type} onChangeType={updateType} />
      <div className='py-1 px-2 text-slate-700'>
        <ToggleInput value={value} setValue={setValue} />
      </div>
      <Handle
        type='source'
        className='bg-slate-700! hover:bg-slate-900!'
        position={Position.Bottom}
        id='a'
      />
    </BlockContainer>
  );
};

export default memo(TopicNode);
