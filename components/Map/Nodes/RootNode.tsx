import useMapStore from '@/stores/mapStore';
import { memo, useState } from 'react';
import { Handle, Position } from 'reactflow';
import { useDebounce } from 'react-use';
import ToggleInput from '@/components/ui/ToggleInput';
import BlockContainer from '@/components/ui/BlockContainer';
import NodeHeader from '@/components/ui/NodeHeader';

const handleStyle = { left: 10 };

const RootNode = ({ id, data }: any) => {
  const [value, setValue] = useState(data.text);

  const updateText = useMapStore((s) => s.updateText);

  //   const onChange = useCallback((evt: ChangeEvent<HTMLInputElement>) => {
  //     setVal(evt.target.value);
  //   }, []);

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
        {/* <input id='text' name='text' onChange={onChange} /> */}
      </div>
      <Handle type='source' position={Position.Bottom} id='a' />
    </BlockContainer>
  );
};

export default memo(RootNode);
