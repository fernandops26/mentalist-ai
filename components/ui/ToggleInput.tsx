import React, { ChangeEvent, useState, memo, useCallback } from 'react';
import cn from 'classnames';

interface ToggleInputProps {
	value: string;
	setValue: Function;
	className?: string;
}

function ToggleInput({ value, setValue, className }: ToggleInputProps) {
	const [showInputEle, setShowInputEle] = useState(false);

	const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	}, []);

	return (
		<span className='w-full block'>
			{showInputEle ? (
				<input
					className={cn('w-full text-sm focus:outline-none', className)}
					type='text'
					value={value}
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
