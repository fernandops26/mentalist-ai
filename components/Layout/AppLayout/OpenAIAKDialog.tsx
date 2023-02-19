'use client';

import { Button } from '@/components/ui/Button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/Dialog';

import { Input } from '@/components/ui/Input';

import { useToken } from '@/utils/providers/TokenProvider';
import React, { useState } from 'react';

interface OpenAIAKDialogProps {
  isOpen: boolean;
  openChange: (isOpen: boolean) => void;
}

export const OpenAIAKDialog = ({ isOpen, openChange }: OpenAIAKDialogProps) => {
  const { token, updateToken } = useToken();
  const [apiKey, setApiKey] = useState(token ?? '');

  const handleSave = () => {
    updateToken(apiKey);
    openChange(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={openChange}>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Manage Open AI Api key</DialogTitle>
          <DialogDescription>
            Set your api key from here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className='grid gap-4 py-2'>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Input
              id='apiKey'
              value={apiKey}
              className='col-span-4'
              onChange={(e) => setApiKey(e.target.value)}
            />
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleSave}>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
