import useMapStore from '@/stores/mapStore';
import { memo, useState } from 'react';
import { Handle, Position } from 'reactflow';
import { useDebounce } from 'react-use';
import ToggleInput from '@/components/ui/ToggleInput';
import BlockContainer from '@/components/ui/BlockContainer';
import NodeHeader from '@/components/ui/NodeHeader';

const RootNode = ({ id, data }: any) => {
  const [value, setValue] = useState(data.text);

  const updateText = useMapStore((s) => s.updateText);

  const [, cancel] = useDebounce(
    () => {
      updateText(id, value);
    },
    1000,
    [value]
  );

  return (
    <BlockContainer>
      <NodeHeader text='Topic' type={data.type} />
      <div className='py-1 px-2 flex items-center text-sm text-slate-800'>
        <ToggleInput value={value} setValue={setValue} />
      </div>
      <Handle
        type='source'
        className='bg-white border-4 border-slate-800 rounded-full w-4 h-4'
        position={Position.Bottom}
        id='a'
      />
    </BlockContainer>
  );
};

export default memo(RootNode);
