import Link from 'next/link';
import IconComponent from '../ui/Icon';

export function Footer() {
	return (
		<footer className='container bg-white text-slate-600 px-8'>
			<div className='flex flex-col items-center justify-between gap-4 border-t border-t-slate-200 py-10 md:h-24 md:flex-row md:py-0'>
				<div className='flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0'>
					{/* <Icons.logo /> */}
					<IconComponent name='logo' className='w-5 h-5' />
					<p className='text-center text-sm leading-loose md:text-left'>
						Powered by{' '}
						<Link
							href='https://platform.openai.com/'
							target='_blank'
							rel='noreferrer'
							className='font-medium underline underline-offset-4'
						>
							Open AI
						</Link>
						. Hosted on{' '}
						<Link
							href='https://vercel.com'
							target='_blank'
							rel='noreferrer'
							className='font-medium underline underline-offset-4'
						>
							Vercel
						</Link>
					</p>
				</div>
				<p className='text-center text-sm md:text-left flex'>
					<Link
						href='https://twitter.com/fernandops26'
						target='_blank'
						rel='noreferrer'
						className='font-medium underline underline-offset-4'
					>
						<IconComponent name='twitter' className='w-5 h-5' />
					</Link>
					<Link
						href='https://github.com/fernandops26/mentalist-ai'
						target='_blank'
						rel='noreferrer'
						className='font-medium underline underline-offset-4 ml-2'
					>
						<IconComponent name='github' className='w-5 h-5' />
					</Link>
				</p>
			</div>
		</footer>
	);
}
