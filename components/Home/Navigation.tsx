import * as React from 'react';
import Link from 'next/link';
import IconComponent from '../ui/Icon';

interface MainNavProps {
	children?: React.ReactNode;
}

export function Navigation({ children }: MainNavProps) {
	return (
		<div className='flex gap-6 md:gap-10 py-2'>
			<Link href='/' className='flex items-center space-x-2'>
				<IconComponent name='logo' className='w-6 h-6' />
				<span className='inline-block font-bold text-2xl'>Mentalist</span>
			</Link>
			<nav className='flex gap-6'></nav>
		</div>
	);
}
