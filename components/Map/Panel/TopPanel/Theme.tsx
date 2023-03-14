import { palettes } from '@/data/defaultPalettes';
import useMapStore from '@/stores/mapStore';
import cn from '@/utils/classnames';
import { getConfigKey, updateConfig } from '@/utils/storage';
import { PaletteElement } from '@/utils/types';
import { useState } from 'react';

export default function Theme() {
	const [activePalette, setActivePalette] = useState(getConfigKey('palette'));
	const applyPalette = useMapStore((s) => s.applyPalette);

	const onChoosePalette = (selectedPalette: PaletteElement) => {
		updateConfig('palette', selectedPalette.id);
		setActivePalette(selectedPalette.id);
		applyPalette(selectedPalette);
	};

	return (
		<div className='w-full h-full grid grid-cols-1 max-h-40 overflow-y-scroll'>
			{palettes.map((palette) => {
				const rootStyles = palette.root.buildStyles();

				return (
					<div
						key={palette.name}
						onClick={() => onChoosePalette(palette)}
						className={cn(
							'p-2 hover:bg-slate-100 hover:cursor-pointer flex rounded',
							palette.id === activePalette ? 'bg-slate-200' : '',
						)}
					>
						<div key='root' className='w-3 h-3' style={rootStyles} />
						{palette.colors.map((color) => {
							const styles = palette.node.buildStyles(color);

							return <div key={color} className='w-3 h-3' style={styles} />;
						})}
					</div>
				);
			})}
		</div>
	);
}
