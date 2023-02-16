'use client';

import { Button } from '@/components/ui/Button';
import { Label } from '@/components/ui/Label';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/Select';
import { useState } from 'react';

interface GeneratorProps {
  onGenerate: ({
    accurateFor,
    type,
  }: {
    accurateFor: string;
    type: string;
  }) => void;
}
export default function Generator({ onGenerate }: GeneratorProps) {
  const [selected, setSelected] = useState({
    accurateFor: 'blogs',
    type: 'title ideas',
  });

  return (
    <div className='grid gap-4'>
      <div className='space-y-2'>
        <h4 className='font-medium leading-none'>Generator</h4>
        <p className='text-sm text-slate-500 dark:text-slate-400'>
          Configure of subtopic generator.
        </p>
      </div>
      <div className='grid gap-2'>
        <div className='grid grid-cols-3 items-center gap-4'>
          <Label htmlFor='goal'>Accurate for</Label>
          <div className='flex w-full col-span-2'>
            <Select
              defaultValue={selected.accurateFor}
              onValueChange={(value) =>
                setSelected({ ...selected, accurateFor: value })
              }
            >
              <SelectTrigger className='w-full'>
                <SelectValue placeholder='Select goal' />
              </SelectTrigger>
              <SelectContent id='goal'>
                <SelectGroup>
                  <SelectItem value='blogs'>Blogs</SelectItem>
                  <SelectItem value='youtube videos'>Videos</SelectItem>
                  <SelectItem value='tweets'>Tweets</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className='grid grid-cols-3 items-center gap-4'>
          <Label htmlFor='goal'>Type</Label>
          <div className='flex w-full col-span-2'>
            <Select
              defaultValue={selected.type}
              onValueChange={(value) =>
                setSelected({ ...selected, type: value })
              }
            >
              <SelectTrigger className='w-full'>
                <SelectValue placeholder='Select type' />
              </SelectTrigger>
              <SelectContent id='type'>
                <SelectGroup>
                  <SelectItem value='title ideas'>Title ideas</SelectItem>
                  <SelectItem value='examples'>Examples</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className='mt-1 grid grid-cols-3 items-center gap-4'>
          <div className='flex w-full'>
            <Button onClick={() => onGenerate({ ...selected })}>
              Generate
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
