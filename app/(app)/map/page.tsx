import Form from '@/components/Form/Form';
import Map from '@/components/Map/Index';

export default async function MapPage() {
  return (
    <div className='flex w-full h-screen min-h-[calc(100vh_-_100px)]'>
      <div className='w-52 p-4 bg-white h-full'>
        <h1 className='font-bold'>Mentalist</h1>
        <div className='mt-2'>
          <Form />
        </div>
      </div>
      <div className='flex-1'>
        <div className='w-full bg-white h-full'>
          <div className='border h-full'>
            <Map />
          </div>
        </div>
      </div>
    </div>
  );
}
