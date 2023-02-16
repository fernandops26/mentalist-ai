'use client';
import { useToken } from '@/utils/providers/TokenProvider';
import { Input } from '../ui/Input';

export default function Form() {
  const { token, updateToken } = useToken();

  return (
    <div>
      <div>
        <Input
          placeholder='Your OPEN AI Api key'
          value={token ?? ''}
          onChange={(e) => updateToken(e.target.value)}
        />
      </div>
      {/* <div className='mt-3'>
        <Button>Save</Button>
      </div> */}
    </div>
  );
}
