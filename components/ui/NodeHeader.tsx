import { MAIN_TOPIC, SUBTOPIC, DETAIL } from '@/utils/constants/headerTypes';
import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/DropdownMenu';

import IconComponent from './Icon';
import { ReactNode, useState } from 'react';

const Icons = {
	[MAIN_TOPIC]: 'circle',
	[SUBTOPIC]: 'triangle',
	[DETAIL]: 'circleDot',
};

const typesOptions = [
	{ icon: 'circle', value: MAIN_TOPIC, text: 'Topic' },
	{ icon: 'triangle', value: SUBTOPIC, text: 'Subtopic' },
	{ icon: 'circleDot', value: DETAIL, text: 'Detail' },
];

interface NodeHeaderProps {
	text: string;
	onChangeType?: (value: string) => void;
	type: keyof typeof Icons;
}

export default function NodeHeader({ type, onChangeType }: NodeHeaderProps) {
	const iconName: string = Icons[type];

	return (
		<div className='p-2 flex items-center bg-white'>
			<div className='p-1 bg-slate-700 text-slate-500 '>
				<DropdownMenuHeader type={type} onChangeType={onChangeType}>
					<div>
						<IconComponent name={iconName} className='w-3 h-3' />
					</div>
				</DropdownMenuHeader>
			</div>
			<p className='text-sm ml-1 text-slate-400'>{typesOptions.find((to) => to.value === type)?.text}</p>
		</div>
	);
}

interface DropdownMenuHeaderProps {
	children: ReactNode;
	type: string;
	onChangeType?: (type: string) => void;
}

export function DropdownMenuHeader({ children, type, onChangeType = (value: string) => {} }: DropdownMenuHeaderProps) {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
			<DropdownMenuContent className='w-32'>
				<DropdownMenuRadioGroup value={type} onValueChange={onChangeType}>
					{typesOptions.map((typeOption) => (
						<DropdownMenuRadioItem key={typeOption.value} value={typeOption.value}>
							{typeOption.text}
						</DropdownMenuRadioItem>
					))}
					{/* <DropdownMenuRadioItem value='top'>Top</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value='bottom'>Bottom</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value='right'>Right</DropdownMenuRadioItem> */}
				</DropdownMenuRadioGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
