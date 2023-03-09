import { Footer } from '@/components/Home/Footer';
import { Navigation } from '@/components/Home/Navigation';
import Main from '@/components/Home/Main';
import Features from '@/components/Home/Features';

export default function Home() {
	return (
		<div>
			<div className='max-w-5xl mx-auto'>
				<Navigation />
			</div>
			<div className='bg-white min-h-[calc(100vh_-_150px)] w-full py-6'>
				<div className='py-6'>
					<Main />
				</div>
				<div className='bg-slate-50 py-4'>
					<Features />
				</div>
			</div>
			<Footer />
		</div>
	);
}
