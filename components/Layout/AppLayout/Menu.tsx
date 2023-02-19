'use client';

import IconComponent from '@/components/ui/Icon';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from '@/components/ui/MenuBar';
import Link from 'next/link';
import { useState } from 'react';
import { OpenAIAKDialog } from './OpenAIAKDialog';

export function Menu() {
  const [open, setOpen] = useState(false);

  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>
          <IconComponent name='menu' className='w-4 h-4' />
        </MenubarTrigger>
        <MenubarContent>
          <MenubarItem onClick={() => setOpen(true)}>
            {' '}
            Manage OpenAI ApiKey
          </MenubarItem>

          <MenubarSeparator />
          <MenubarItem disabled>Open</MenubarItem>
          <MenubarItem disabled>Save</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            <Link
              href='https://twitter.com/fernandops26'
              target='_blank'
              rel='noreferrer'
              className='w-full'
            >
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
      <OpenAIAKDialog isOpen={open} openChange={setOpen} />
    </Menubar>
  );
}
