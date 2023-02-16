import Flow from './Flow';
import FlowWrapper from './FlowWrapper';

export default function Map() {
  return (
    <div className='w-full h-full  bg-white'>
      <FlowWrapper>
        <Flow />
      </FlowWrapper>
    </div>
  );
}
