'use client';

import { actionLoadFileFromDisk, actionSaveFileToDisk } from '@/actions/export';
import IconComponent from '@/components/ui/Icon';
import {
	Menubar,
	MenubarContent,
	MenubarItem,
	MenubarMenu,
	MenubarSeparator,
	MenubarTrigger,
} from '@/components/ui/MenuBar';
import { useToast } from '@/hooks/use-toast';
import useMapStore from '@/stores/mapStore';
import Link from 'next/link';
import { useState } from 'react';
import { OpenAIAKDialog } from './OpenAIAKDialog';

export function Menu() {
	const { toast } = useToast();
	const [open, setOpen] = useState(false);

	const loadFromStorage = useMapStore((s) => s.loadFromStorage);

	const onExport = async () => {
		await actionSaveFileToDisk();

		toast({
			title: 'Map successfully exported',
			description: 'Your mind map has been exported correctly.',
		});
	};

	const onLoad = async () => {
		const loaded = await actionLoadFileFromDisk();

		if (!loaded) {
			return;
		}

		loadFromStorage();

		toast({
			title: 'Map successfully loaded',
			description: 'Your mind map has been loaded correctly.',
		});
	};

	return (
		<Menubar>
			<MenubarMenu>
				<MenubarTrigger>
					<IconComponent name='menu' className='w-4 h-4' />
				</MenubarTrigger>
				<MenubarContent>
					<MenubarItem onClick={() => setOpen(true)}> Manage OpenAI ApiKey</MenubarItem>

					<MenubarSeparator />
					<MenubarItem onClick={onLoad}>Open</MenubarItem>
					<MenubarItem onClick={onExport}>Export</MenubarItem>
					<MenubarSeparator />
					<MenubarItem>
						<Link href='https://twitter.com/fernandops26' target='_blank' rel='noreferrer' className='w-full'>
							Follow Updates
						</Link>{' '}
					</MenubarItem>
					<MenubarItem>
						<Link
							href='https://github.com/fernandops26/mentalist-ai'
							target='_blank'
							rel='noreferrer'
							className='w-full'
						>
							Github
						</Link>{' '}
					</MenubarItem>
				</MenubarContent>
			</MenubarMenu>
			{open && <OpenAIAKDialog isOpen={open} openChange={setOpen} />}
		</Menubar>
	);
}
