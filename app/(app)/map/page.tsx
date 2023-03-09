import Map from '@/components/Map/Index';
import Link from 'next/link';

export default async function MapPage() {
	return (
		<div className='flex'>
			<div className='hidden md:block flex-1  min-h-[calc(100vh_-_50px)]'>
				<div className='w-full bg-white h-full'>
					<div className='border h-full'>
						<Map />
					</div>
				</div>
			</div>
			<div className=' md:hidden flex justify-center items-center w-full bg-slate-50 h-screen'>
				<div className='w-80 text-center mx-auto'>
					<p className='font-bold text-xl text-slate-800'>Hi mentalister! 👋</p>
					<p className=' text-slate-700 mt-4'>
						We are working to expand the use of mentalist-ai on mobile view, for now you can use it in browser
					</p>
					<p></p>
					<p className='text-sm text-slate-400 mt-3'>
						Follow on{' '}
						<Link
							href='https://twitter.com/fernandops26'
							target='_blank'
							rel='noreferrer'
							className='underline underline-offset-4'
						>
							Twitter
						</Link>{' '}
						for updates
					</p>
				</div>
			</div>
		</div>
	);
}
