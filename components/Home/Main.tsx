import { AspectRatio } from '@/components/ui/AspectRadio';
import ActionButtons from './ActionButtons';

export default function Main() {
  return (
    <div className='max-w-5xl mx-auto'>
      <section className='flex flex-wrap items-center'>
        <div className='lg:w-1/2 md:w-full w-full py-5 px-2'>
          <h1 className='text-5xl font-bold text-gray-900 mb-4'>
            Your Ultimate Content Ideation Tool
          </h1>
          <p className='text-lg text-gray-600 mt-6'>
            Easily Create Mind Maps and Generate Content and Title Ideas Based
            on Topics
          </p>
          <div className='mt-6'>
            <ActionButtons />
          </div>
          <div className='relative mt-4'>
            <div className='w-3 h-3 top-1 bg-purple-400 animate-pulse rounded-full absolute' />
            <p className='ml-4 mt-3 text-sm'>Use your own OpenAI api key</p>
          </div>
        </div>
        <div className='lg:w-1/2 md:w-full w-full py-5 overflow-hidden'>
          <AspectRatio ratio={16 / 9} className='bg-slate-50 '>
            {/* <Image
              src='https://res.cloudinary.com/dtvp4xr41/image/upload/v1676611962/Mentalist/mentalist3_tzu8l7.png'
              alt='Mentalist map'
              fill
              className='rounded-md object-cover'
            /> */}
            <video
              autoPlay
              loop
              src='https://res.cloudinary.com/dtvp4xr41/video/upload/v1676616924/Mentalist/mentalist_akmcev.mp4'
            />
          </AspectRatio>
        </div>
      </section>
    </div>
  );
}
