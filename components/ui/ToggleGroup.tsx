'use client';
import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group';
import cn from '@/utils/classnames';
import React from 'react';

const ToggleGroup = ToggleGroupPrimitive.Root;

const ToggleGroupItem = React.forwardRef<
	React.ElementRef<typeof ToggleGroupPrimitive.Item>,
	React.ComponentPropsWithoutRef<typeof ToggleGroupPrimitive.Item>
>(({ className, children, ...props }, ref) => (
	<ToggleGroupPrimitive.Item
		ref={ref}
		className={cn(
			'group radix-state-on:bg-slate-100 hover:bg-slate-100',
			'bg-white ',
			'px-2.5 py-2 first:rounded-l-md last:rounded-r-md ',
			'radix-state-on:border-transparent',
			'focus:relative focus:outline-none focus-visible:z-20 focus-visible:ring focus-visible:ring-slate-500 focus-visible:ring-opacity-75',
		)}
		{...props}
	>
		{children}
	</ToggleGroupPrimitive.Item>
));

ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName;

export { ToggleGroup, ToggleGroupItem };
