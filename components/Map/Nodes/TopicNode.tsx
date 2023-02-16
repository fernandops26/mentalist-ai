import useMapStore from '@/stores/mapStore';
import { memo, useState } from 'react';
import { Handle, Position } from 'reactflow';
import { useDebounce } from 'react-use';
import ToggleInput from '@/components/ui/ToggleInput';
import BlockContainer from '@/components/ui/BlockContainer';
import { MoreHorizontal } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/DropdownMenu';
import NodeHeader from '@/components/ui/NodeHeader';
import { generateIdeas } from '@/utils/api/suggestions';
import { SUBTOPIC } from '@/utils/constants/headerTypes';
import Loader from '@/components/ui/Loader';
import { useToken } from '@/utils/providers/TokenProvider';

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

  const generator = async () => {
    if (!token) {
      return;
    }

    setIsLoading(true);
    const { main, context } = getNodeContext(id);

    const ideas = await generateIdeas(main, context, token);
    const newNodes = ideas.map((idea: string) => ({
      text: idea,
      type: SUBTOPIC,
    }));

    addChildrenNodes(id, 'topicNode', newNodes);
    setIsLoading(false);
  };

  const Menu = () => {
    if (isLoading) {
      return <Loader />;
    }

    return (
      <></>
      // <DropdownMenu>
      //   <DropdownMenuTrigger>
      //     <MoreHorizontal className='ml-auto h-3 w-3 font-light rounded-full' />
      //   </DropdownMenuTrigger>
      //   <DropdownMenuContent>
      //     <DropdownMenuSub>
      //       <DropdownMenuSubTrigger>
      //         {/* <UserPlus className="mr-2 h-4 w-4" /> */}
      //         <span>Generate ideas</span>
      //       </DropdownMenuSubTrigger>
      //       <DropdownMenuPortal>
      //         <DropdownMenuSubContent>
      //           <DropdownMenuItem onClick={generator}>
      //             {/* <Mail className="mr-2 h-4 w-4" /> */}
      //             <span>Containing this</span>
      //           </DropdownMenuItem>
      //           <DropdownMenuItem>
      //             {/* <MessageSquare className="mr-2 h-4 w-4" /> */}
      //             <span>Based this</span>
      //           </DropdownMenuItem>
      //           {/* <DropdownMenuSeparator /> */}
      //         </DropdownMenuSubContent>
      //       </DropdownMenuPortal>
      //     </DropdownMenuSub>
      //   </DropdownMenuContent>
      // </DropdownMenu>
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
