import Form from '@/components/Form/Form';
import Map from '@/components/Map/Index';
import IconComponent from '@/components/ui/Icon';
import Link from 'next/link';

export default async function MapPage() {
  return (
    <div className='flex w-full h-screen min-h-[calc(100vh_-_100px)]'>
      <div className='w-52 p-4 bg-white h-full'>
        <Link href='/' className='flex items-center space-x-2'>
          <IconComponent name='logo' className='w-3 h-3' />
          <span className='inline-block font-bold'>Mentalist</span>
        </Link>
        <div className='mt-2 border-t border-slate-300 pt-4'>
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
