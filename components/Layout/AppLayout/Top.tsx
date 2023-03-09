import IconComponent from '@/components/ui/Icon';
import Link from 'next/link';
import { Menu } from './Menu';

export default function Top() {
	return (
		<div className='hidden md:block w-52 p-2 bg-white '>
			<div className='flex items-center gap-3'>
				<Link href='/' className='flex items-center space-x-2'>
					<IconComponent name='logo' className='w-4 h-4' />
					<span className='inline-block font-bold'>Mentalist</span>
				</Link>
				<div>
					<Menu />
				</div>
			</div>
		</div>
	);
}
