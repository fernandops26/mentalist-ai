'use client';
import IconComponent from '@/components/ui/Icon';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/Popover';
import { Separator } from '@/components/ui/Separator';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/ToggleGroup';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/Tooltip';
import cn from '@/utils/classnames';
import { WRITER_MODE, SELECTION_MODE } from '@/utils/constants/modes';
// import { useConfig } from '@/utils/providers/ConfigProvider';
import { Panel } from 'reactflow';
import Palette from './Palette';

export default function ModePanel() {
	// const { mode, setMode } = useConfig();

	return (
		<Panel position='top-center'>
			<div className='p-1 rounded bg-white flex space-x-1 items-center'>
				{/* <div>
					<ToggleGroup
						type='single'
						orientation='horizontal'
						value={SELECTION_MODE}
						className='flex flex-wrap'
						onValueChange={() => {}}
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
						<ToggleGroupItem value={WRITER_MODE}>
							<Tooltip>
								<TooltipTrigger asChild>
									<div>
										<IconComponent name='fileEdit' className='w-4 h-4' />
									</div>
								</TooltipTrigger>
								<TooltipContent side='bottom'>
									<p> Writer Mode</p>
								</TooltipContent>
							</Tooltip>
						</ToggleGroupItem>
					</ToggleGroup>
				</div>
				<Separator orientation='vertical' className='h-4' /> */}

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
									<PopoverContent className=' w-48'>
										<div className='grid gap-4'>
											<div className='space-y-2'>
												<h4 className='font-medium leading-none'>Palette</h4>
											</div>

											<div className='grid gap-2'>
												<Palette />
											</div>
										</div>
									</PopoverContent>
								</Popover>
							</div>
						</TooltipTrigger>
						<TooltipContent side='bottom'>
							<p>Palette</p>
						</TooltipContent>
					</Tooltip>
				</div>
			</div>
		</Panel>
	);
}
