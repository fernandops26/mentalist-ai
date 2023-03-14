'use client';

import { Button } from '@/components/ui/Button';
import { Label } from '@/components/ui/Label';
import Loader from '@/components/ui/Loader';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/Select';
import { useState } from 'react';

interface GeneratorProps {
	onGenerate: ({ accurateFor, type }: { accurateFor: string; type: string }) => void;
	isLoading: boolean;
}
export default function Generator({ onGenerate, isLoading }: GeneratorProps) {
	const [selected, setSelected] = useState({
		accurateFor: 'blogs',
		type: 'content ideas',
	});

	return (
		<div className='grid gap-4'>
			<div className='space-y-2'>
				<h4 className='font-medium leading-none'>Generator</h4>
				<p className='text-sm text-slate-500 dark:text-slate-400'>
					Enter parameters to give direction to the generator.
				</p>
			</div>
			<div className='grid gap-2'>
				<div className='grid grid-cols-3 items-center gap-4'>
					<Label htmlFor='goal'>Type</Label>
					<div className='flex w-full col-span-2'>
						<Select defaultValue={selected.type} onValueChange={(value) => setSelected({ ...selected, type: value })}>
							<SelectTrigger className='w-full'>
								<SelectValue placeholder='Select type' />
							</SelectTrigger>
							<SelectContent id='type'>
								<SelectGroup>
									<SelectItem value='subcategories'>Subcategories</SelectItem>
									<SelectItem value='content ideas'>Content ideas</SelectItem>
									<SelectItem value='title ideas'>Title ideas</SelectItem>
								</SelectGroup>
							</SelectContent>
						</Select>
					</div>
				</div>

				<div className='grid grid-cols-3 items-center gap-4'>
					<Label htmlFor='goal'>For</Label>
					<div className='flex w-full col-span-2'>
						<Select
							defaultValue={selected.accurateFor}
							onValueChange={(value) => setSelected({ ...selected, accurateFor: value })}
						>
							<SelectTrigger className='w-full'>
								<SelectValue placeholder='For' />
							</SelectTrigger>
							<SelectContent id='for'>
								<SelectGroup>
									<SelectItem value='blogs'>Blogs</SelectItem>
									<SelectItem value='youtube videos'>Videos</SelectItem>
									<SelectItem value='tweets'>Tweets</SelectItem>
								</SelectGroup>
							</SelectContent>
						</Select>
					</div>
				</div>

				<div className='mt-2'>
					<div className='flex w-full items-center'>
						<Button onClick={() => onGenerate({ ...selected })}>Generate </Button>
						{isLoading && (
							<div className='ml-2'>
								{' '}
								<Loader className='w-5 h-5 stroke-white text-white' />
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
