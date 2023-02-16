import { MouseEvent, MouseEventHandler, ReactNode } from 'react';
import IconComponent from './Icon';

interface BlockContainerProps {
  children: ReactNode;
  onRemove?: () => void;
  menu?: ReactNode;
}

export default function BlockContainer({
  children,
  onRemove,
  menu,
}: BlockContainerProps) {
  return (
    <div className='group shadow py-1 px-2 rounded bg-white w-60 relative'>
      {onRemove && (
        <div
          className='hidden group-hover:block absolute -top-2 -left-2 rounded z-10'
          onClick={() => onRemove()}
        >
          <div className='p-1 bg-slate-100'>
            <IconComponent name='close' className='w-3 h-3' />
          </div>
        </div>
      )}

      {menu && <div className='absolute top-0 right-1'>{menu}</div>}
      {children}
    </div>
  );
}
