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
import { Label } from '@/components/ui/Label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/Select';
import { AvailableModel, AVAILABLE_MODELS, isAvailableModel } from '@/utils/constants/openai';

import { useConfiguration } from '@/utils/providers/ConfigurationProvider';
import React, { useState } from 'react';

interface OpenAIAKDialogProps {
	isOpen: boolean;
	openChange: (isOpen: boolean) => void;
}

export const OpenAIAKDialog = ({ isOpen, openChange }: OpenAIAKDialogProps) => {
	const { token, updateToken, model, updateModel } = useConfiguration();

	const [apiKey, setApiKey] = useState(() => token ?? '');
	const [apiModel, setApiModel] = useState<AvailableModel>(() => model);

	const handleSave = () => {
		updateToken(apiKey);
		updateModel(apiModel);
		openChange(false);
	};

	return (
		<Dialog open={isOpen} onOpenChange={openChange}>
			<DialogContent className='sm:max-w-[425px]'>
				<DialogHeader>
					<DialogTitle>Manage Open AI Api key</DialogTitle>
					<DialogDescription>Set your api key from here. Click save when you are done.</DialogDescription>
				</DialogHeader>

				<div className='flex flex-col gap-4 py-2'>
					<div>
						<Label htmlFor='apiKey' className='text-slate-500'>
							API Key
						</Label>

						<Input
							id='apiKey'
							placeholder='sk-xxxxxxxxxxxxxxxxx'
							value={apiKey}
							className='mt-2'
							onChange={(e) => setApiKey(e.target.value)}
						/>
					</div>

					<div>
						<Label htmlFor='apiModel' className='text-slate-500'>
							API Model
						</Label>

						<Select value={apiModel} onValueChange={(value) => (isAvailableModel(value) ? setApiModel(value) : null)}>
							<SelectTrigger id='apiModel' className='w-[180px] mt-2'>
								<SelectValue placeholder='API Model' />
							</SelectTrigger>

							<SelectContent>
								{AVAILABLE_MODELS.map((model) => (
									<SelectItem key={model} value={model}>
										{model}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
					</div>
				</div>

				<DialogFooter>
					<Button onClick={handleSave}>Save changes</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};
