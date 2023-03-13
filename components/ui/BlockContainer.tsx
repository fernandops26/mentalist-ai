import { ReactNode } from 'react';
import IconComponent from './Icon';

interface BlockContainerProps {
	children: ReactNode;
	onRemove?: () => void;
	menu?: ReactNode;
}

export default function BlockContainer({ children, onRemove, menu }: BlockContainerProps) {
	return (
		<div className='group py-1 px-2 rounded w-60 relative '>
			{onRemove && (
				<div
					className='hidden group-hover:block absolute -top-3 -left-2 rounded z-10 border-2 border-slate-700'
					onClick={() => onRemove()}
				>
					<div className='p-1 bg-red-200 text-gray-700'>
						<IconComponent name='close' className='w-3 h-3' />
					</div>
				</div>
			)}

			{menu && <div className='absolute top-0 right-1'>{menu}</div>}
			{children}
		</div>
	);
}
