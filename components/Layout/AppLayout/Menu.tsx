'use client';

import IconComponent from '@/components/ui/Icon';
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from '@/components/ui/MenuBar';

export function Menu() {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>
          <IconComponent name='menu' className='w-4 h-4' />
        </MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Manage OpenAI ApiKey</MenubarItem>
          <MenubarSeparator />
          <MenubarItem disabled>Open</MenubarItem>
          <MenubarItem disabled>Save</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
