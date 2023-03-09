import React, { ChangeEvent, useState, memo, useCallback } from 'react';
import cn from 'classnames';
import { Textarea } from './Textarea';

interface ToggleInputProps {
	value: string;
	setValue: Function;
	className?: string;
}

function ToggleInput({ value, setValue, className }: ToggleInputProps) {
	const [showInputEle, setShowInputEle] = useState(false);

	const onChange = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
		setValue(e.target.value);
	}, []);

	return (
		<span className='w-full block'>
			{showInputEle ? (
				<Textarea
					className={cn('w-full text-sm focus:outline-none text-slate-800!', className)}
					value={value}
					// defaultValue={value}
					onChange={onChange}
					onBlur={() => setShowInputEle(false)}
					autoFocus
				/>
			) : (
				<span className='w-full block' onDoubleClick={() => setShowInputEle(true)}>
					{value || 'Change this text'}
				</span>
			)}
		</span>
	);
}

export default memo(ToggleInput);
