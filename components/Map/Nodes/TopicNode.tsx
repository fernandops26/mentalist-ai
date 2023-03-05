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
import { useOpenAIConfiguration } from '@/utils/providers/ConfigurationProvider';
import IconComponent from '@/components/ui/Icon';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/Popover';
import Generator from '../Generator/Generator';
import ToggleTextarea from '@/components/ui/ToggleTextarea';
import { useToast } from '@/hooks/use-toast';

const handleStyle = { left: 10 };

const TopicNode = ({ id, data }: any) => {
  const { token, model } = useOpenAIConfiguration();
  const { toast } = useToast();

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
    [value],
  );

  const updateType = (type: string) => {
    updateInnerType(id, type);
  };

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

  const Menu = () => {
    if (isLoading) {
      return <Loader />;
    }

    return (
      <>
        <Popover>
          <PopoverTrigger>
            <div className="mt-1 p-1 hover:bg-slate-50 rounded hover:border-slate-700 border-2 border-white">
              <IconComponent name="want" className="h-3 w-3" />
            </div>
          </PopoverTrigger>
          <PopoverContent className="w-80">
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
      <Handle type="target" position={Position.Top} />
      <NodeHeader text="Sub topic" type={data.type} onChangeType={updateType} />
      <div className="py-1 px-2 text-slate-700">
        <ToggleTextarea value={value} setValue={setValue} />
      </div>
      <Handle type="source" position={Position.Bottom} id="a" />
    </BlockContainer>
  );
};

export default memo(TopicNode);
