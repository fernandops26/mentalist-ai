'use client';
import IconComponent from '@/components/ui/Icon';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/Popover';
import { Separator } from '@/components/ui/Separator';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/ToggleGroup';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/Tooltip';
import cn from '@/utils/classnames';
import { AI_MODE, AvailableModes, SELECTION_MODE } from '@/utils/constants/modes';
import { useConfiguration } from '@/utils/providers/ConfigurationProvider';
import { Panel } from 'reactflow';
import Theme from './Theme';

export default function ModePanel() {
	const { mode, updateMode } = useConfiguration();

	const handleUpdate = (value: string) => {
		if (!value) {
			return;
		}

		updateMode(value as AvailableModes);
	};

	return (
		<Panel position='top-center'>
			<div className='p-1 rounded bg-white flex space-x-1 items-center'>
				<div>
					<ToggleGroup
						type='single'
						orientation='horizontal'
						value={mode}
						className='flex flex-wrap'
						onValueChange={handleUpdate}
					>
						<ToggleGroupItem value={SELECTION_MODE}>
							<Tooltip>
								<TooltipTrigger asChild>
									<div>
										<IconComponent name='mousePointer' className='w-4 h-4' />
									</div>
								</TooltipTrigger>
								<TooltipContent side='bottom'>
									<p> Selection Mode</p>
								</TooltipContent>
							</Tooltip>
						</ToggleGroupItem>
						<ToggleGroupItem value={AI_MODE}>
							<Tooltip>
								<TooltipTrigger asChild>
									<div>
										<IconComponent name='want' className='w-4 h-4' />
									</div>
								</TooltipTrigger>
								<TooltipContent side='bottom'>
									<p> AI Mode</p>
								</TooltipContent>
							</Tooltip>
						</ToggleGroupItem>
					</ToggleGroup>
				</div>
				<Separator orientation='vertical' className='h-4' />

				<div>
					<Tooltip>
						<TooltipTrigger asChild>
							<div>
								<Popover>
									<PopoverTrigger>
										<div
											className={cn(
												'hover:bg-slate-100',
												'bg-white ',
												'px-2.5 py-2 rounded-md flex items-center',
												'focus:relative focus:outline-none focus-visible:z-20 focus-visible:ring focus-visible:ring-slate-500 focus-visible:ring-opacity-75',
											)}
										>
											<IconComponent name='palette' className='w-4 h-4' />
										</div>
									</PopoverTrigger>
									<PopoverContent className='w-48'>
										<div className='grid gap-4'>
											<h4 className='font-medium leading-none'>Theme</h4>
											<Theme />
										</div>
									</PopoverContent>
								</Popover>
							</div>
						</TooltipTrigger>
						<TooltipContent side='bottom'>
							<p>Customization</p>
						</TooltipContent>
					</Tooltip>
				</div>
			</div>
		</Panel>
	);
}
