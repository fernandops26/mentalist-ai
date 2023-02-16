import cn from '@/utils/classnames';
interface ButtonProps {
  className?: string;
  useSubmit?: Boolean;
  href?: string;
  [x: string]: any;
}

export function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <div
      className={cn(
        'relative inline-flex items-center px-6 py-1 rounded-lg cursor-pointer disabled:bg-slate-600',
        'text-white bg-slate-800 hover:bg-slate-900 border border-slate-800 hover:border-slate-900',
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
