import { PaletteElement } from '@/utils/types';
import fontColorContrast from 'font-color-contrast';

export const palettes: PaletteElement[] = [
	{
		id: 'palette-0',
		name: 'Palette 0',
		colors: ['#0b132b', '#1c2541', '#3a506b', '#5bc0be', '#6fffe9'],
		root: {
			buildStyles: () => {
				return {
					backgroundColor: '#fff',
					color: '#1E293B',
					borderStyle: 'solid',
					borderWidth: 1,
					borderColor: '#0b132b',
					borderRadius: '10px',
				};
			},
		},
		node: {
			buildStyles: (color: string) => {
				return {
					backgroundColor: 'white',
					borderStyle: 'solid',
					borderWidth: 1,
					borderColor: color,
					color: fontColorContrast('white'),
					borderRadius: '10px',
				};
			},
		},
		edge: {
			buildStyles: (color: string) => {
				return {
					stroke: color,
				};
			},
			type: 'default',
		},
	},
	{
		id: 'palette-1',
		name: 'Palette 1',
		colors: ['#f72585', '#7209b7', '#3a0ca3', '#4361ee', '#4cc9f0'],
		root: {
			buildStyles: () => {
				return {
					backgroundColor: '#fff',
					color: '#1E293B',
					borderStyle: 'solid',
					borderWidth: 1,
					borderColor: '#f72585',
					borderRadius: '10px',
				};
			},
		},
		node: {
			buildStyles: (color: string) => {
				return {
					backgroundColor: color,
					borderStyle: 'solid',
					borderWidth: 1,
					borderColor: color,
					color: fontColorContrast(color),
					borderRadius: '10px',
				};
			},
		},
		edge: {
			buildStyles: (color: string) => {
				return {
					stroke: color,
				};
			},
			type: 'default',
		},
	},
	{
		id: 'palette-2',
		name: 'Palette 2',
		colors: ['#ffbe0b', '#fb5607', '#ff006e', '#8338ec', '#3a86ff'],
		root: {
			buildStyles: () => {
				return {
					backgroundColor: '#fff',
					color: '#1E293B',
					borderStyle: 'solid',
					borderWidth: 1,
					borderColor: '#ffbe0b',
					borderRadius: '10px',
				};
			},
		},
		node: {
			buildStyles: (color: string) => {
				return {
					backgroundColor: color,
					borderStyle: 'solid',
					borderWidth: 1,
					borderColor: color,
					color: fontColorContrast(color),
					borderRadius: '10px',
				};
			},
		},
		edge: {
			buildStyles: (color: string) => {
				return {
					stroke: color,
				};
			},
			type: 'default',
		},
	},
	{
		id: 'palette-3',
		name: 'Palette 3',
		colors: ['#03045e', '#023e8a', '#0077b6', '#0096c7', '#00b4d8'],
		root: {
			buildStyles: () => {
				return {
					backgroundColor: '#fff',
					color: '#1E293B',
					borderStyle: 'solid',
					borderWidth: 1,
					borderColor: '#03045e',
					borderRadius: '10px',
				};
			},
		},
		node: {
			buildStyles: (color: string) => {
				return {
					borderStyle: 'solid',
					borderWidth: 1,
					borderColor: color,
					backgroundColor: color,
					color: fontColorContrast(color),
					borderRadius: '10px',
				};
			},
		},
		edge: {
			buildStyles: (color: string) => {
				return {
					stroke: color,
				};
			},
			type: 'default',
		},
	},
	{
		id: 'palette-4',
		name: 'Palette 4',
		colors: ['#03045e', '#023e8a', '#0077b6', '#0096c7', '#00b4d8'],
		root: {
			buildStyles: () => {
				return {
					backgroundColor: '#fff',
					color: '#1E293B',
					borderStyle: 'solid',
					borderWidth: 1,
					borderColor: '#03045e',
					borderRadius: '10px',
				};
			},
		},
		node: {
			buildStyles: (color: string) => {
				return {
					borderStyle: 'solid',
					borderWidth: 1,
					borderColor: color,
					backgroundColor: color,
					color: fontColorContrast(color),
					borderRadius: '10px',
				};
			},
		},
		edge: {
			buildStyles: (color: string) => {
				return {
					stroke: color,
				};
			},
			type: 'default',
		},
	},
	{
		id: 'palette-5',
		name: 'Palette 5',
		colors: ['#8ecae6', '#219ebc', '#023047', '#ffb703', '#fb8500'],
		root: {
			buildStyles: () => {
				return {
					backgroundColor: '#fff',
					color: '#1E293B',
					borderStyle: 'solid',
					borderWidth: 1,
					borderColor: '#8ecae6',
					borderRadius: '10px',
				};
			},
		},
		node: {
			buildStyles: (color: string) => {
				return {
					borderStyle: 'solid',
					borderWidth: 1,
					borderColor: color,
					backgroundColor: color,
					color: fontColorContrast(color),
					borderRadius: '10px',
				};
			},
		},
		edge: {
			buildStyles: (color: string) => {
				return {
					stroke: color,
				};
			},
			type: 'default',
		},
	},
	{
		id: 'palette-6',
		name: 'Palette 6',
		colors: ['#cdb4db', '#ffc8dd', '#ffafcc', '#bde0fe', '#a2d2ff'],
		root: {
			buildStyles: () => {
				return {
					backgroundColor: '#fff',
					color: '#1E293B',
					borderStyle: 'solid',
					borderWidth: 1,
					borderColor: '#cdb4db',
					borderRadius: '10px',
				};
			},
		},
		node: {
			buildStyles: (color: string) => {
				return {
					borderStyle: 'solid',
					borderWidth: 1,
					borderColor: color,
					backgroundColor: color,
					color: fontColorContrast(color),
					borderRadius: '10px',
				};
			},
		},
		edge: {
			buildStyles: (color: string) => {
				return {
					stroke: color,
				};
			},
			type: 'default',
		},
	},
	{
		id: 'palette-7',
		name: 'Palette 7',
		colors: ['#ef476f', '#ffd166', '#06d6a0', '#118ab2', '#073b4c'],
		root: {
			buildStyles: () => {
				return {
					backgroundColor: '#fff',
					color: '#1E293B',
					borderStyle: 'solid',
					borderWidth: 1,
					borderColor: '#ef476f',
					borderRadius: '10px',
				};
			},
		},
		node: {
			buildStyles: (color: string) => {
				return {
					borderStyle: 'solid',
					borderWidth: 1,
					borderColor: color,
					backgroundColor: color,
					color: fontColorContrast(color),
					borderRadius: '10px',
				};
			},
		},
		edge: {
			buildStyles: (color: string) => {
				return {
					stroke: color,
				};
			},
			type: 'default',
		},
	},
	{
		id: 'palette-8',
		name: 'Palette 8',
		colors: ['#7400b8', '#6930c3', '#5e60ce', '#5390d9', '#4ea8de'],
		root: {
			buildStyles: () => {
				return {
					backgroundColor: '#fff',
					color: '#1E293B',
					borderStyle: 'solid',
					borderWidth: 1,
					borderColor: '#7400b8',
					borderRadius: '10px',
				};
			},
		},
		node: {
			buildStyles: (color: string) => {
				return {
					borderStyle: 'solid',
					borderWidth: 1,
					borderColor: color,
					backgroundColor: color,
					color: fontColorContrast(color),
					borderRadius: '10px',
				};
			},
		},
		edge: {
			buildStyles: (color: string) => {
				return {
					stroke: color,
				};
			},
			type: 'default',
		},
	},
	{
		id: 'palette-9',
		name: 'Palette 9',
		colors: ['#d9ed92', '#b5e48c', '#99d98c', '#76c893', '#52b69a'],
		root: {
			buildStyles: () => {
				return {
					backgroundColor: '#fff',
					color: '#1E293B',
					borderStyle: 'solid',
					borderWidth: 1,
					borderColor: '#d9ed92',
					borderRadius: '10px',
				};
			},
		},
		node: {
			buildStyles: (color: string) => {
				return {
					borderStyle: 'solid',
					borderWidth: 1,
					borderColor: color,
					backgroundColor: color,
					color: fontColorContrast(color),
					borderRadius: '10px',
				};
			},
		},
		edge: {
			buildStyles: (color: string) => {
				return {
					stroke: color,
				};
			},
			type: 'default',
		},
	},
	{
		id: 'palette-10',
		name: 'Palette 10',
		colors: ['#ffcdb2', '#ffb4a2', '#e5989b', '#b5838d', '#6d6875'],
		root: {
			buildStyles: () => {
				return {
					backgroundColor: '#fff',
					color: '#1E293B',
					borderStyle: 'solid',
					borderWidth: 1,
					borderColor: '#ffcdb2',
					borderRadius: '10px',
				};
			},
		},
		node: {
			buildStyles: (color: string) => {
				return {
					borderStyle: 'solid',
					borderWidth: 1,
					borderColor: color,
					backgroundColor: color,
					color: fontColorContrast(color),
					borderRadius: '10px',
				};
			},
		},
		edge: {
			buildStyles: (color: string) => {
				return {
					stroke: color,
				};
			},
			type: 'default',
		},
	},
	{
		id: 'palette-11',
		name: 'Palette 11',
		colors: ['#03071e', '#370617', '#6a040f', '#9d0208', '#d00000'],
		root: {
			buildStyles: () => {
				return {
					backgroundColor: '#fff',
					color: '#1E293B',
					borderStyle: 'solid',
					borderWidth: 1,
					borderColor: '#03071e',
					borderRadius: '10px',
				};
			},
		},
		node: {
			buildStyles: (color: string) => {
				return {
					borderStyle: 'solid',
					borderWidth: 1,
					borderColor: color,
					backgroundColor: color,
					color: fontColorContrast(color),
					borderRadius: '10px',
				};
			},
		},
		edge: {
			buildStyles: (color: string) => {
				return {
					stroke: color,
				};
			},
			type: 'default',
		},
	},
	{
		id: 'palette-12',
		name: 'Palette 12',
		colors: ['#2b2d42', '#8d99ae', '#edf2f4', '#ef233c', '#d90429'],
		root: {
			buildStyles: () => {
				return {
					backgroundColor: '#fff',
					color: '#1E293B',
					borderStyle: 'solid',
					borderWidth: 1,
					borderColor: '#2b2d42',
					borderRadius: '10px',
				};
			},
		},
		node: {
			buildStyles: (color: string) => {
				return {
					borderStyle: 'solid',
					borderWidth: 1,
					borderColor: color,
					backgroundColor: color,
					color: fontColorContrast(color),
					borderRadius: '10px',
				};
			},
		},
		edge: {
			buildStyles: (color: string) => {
				return {
					stroke: color,
				};
			},
			type: 'default',
		},
	},
	{
		id: 'palette-13',
		name: 'Palette 13',
		colors: ['#d8e2dc', '#ffe5d9', '#ffcad4', '#f4acb7', '#9d8189'],
		root: {
			buildStyles: () => {
				return {
					backgroundColor: '#fff',
					color: '#1E293B',
					borderStyle: 'solid',
					borderWidth: 1,
					borderColor: '#d8e2dc',
					borderRadius: '10px',
				};
			},
		},
		node: {
			buildStyles: (color: string) => {
				return {
					borderStyle: 'solid',
					borderWidth: 1,
					borderColor: color,
					backgroundColor: color,
					color: fontColorContrast(color),
					borderRadius: '10px',
				};
			},
		},
		edge: {
			buildStyles: (color: string) => {
				return {
					stroke: color,
				};
			},
			type: 'default',
		},
	},
	{
		id: 'palette-14',
		name: 'Palette 14',
		colors: ['#f08080', '#f4978e', '#f8ad9d', '#fbc4ab', '#ffdab9'],
		root: {
			buildStyles: () => {
				return {
					backgroundColor: '#fff',
					color: '#1E293B',
					borderStyle: 'solid',
					borderWidth: 1,
					borderColor: '#f08080',
					borderRadius: '10px',
				};
			},
		},
		node: {
			buildStyles: (color: string) => {
				return {
					borderStyle: 'solid',
					borderWidth: 1,
					borderColor: color,
					backgroundColor: color,
					color: fontColorContrast(color),
					borderRadius: '10px',
				};
			},
		},
		edge: {
			buildStyles: (color: string) => {
				return {
					stroke: color,
				};
			},
			type: 'default',
		},
	},
	{
		id: 'palette-15',
		name: 'Palette 15',
		colors: ['#f7b267', '#f79d65', '#f4845f', '#f27059', '#f25c54'],
		root: {
			buildStyles: () => {
				return {
					backgroundColor: '#fff',
					color: '#1E293B',
					borderStyle: 'solid',
					borderWidth: 1,
					borderColor: '#f7b267',
					borderRadius: '10px',
				};
			},
		},
		node: {
			buildStyles: (color: string) => {
				return {
					borderStyle: 'solid',
					borderWidth: 1,
					borderColor: color,
					backgroundColor: color,
					color: fontColorContrast(color),
					borderRadius: '10px',
				};
			},
		},
		edge: {
			buildStyles: (color: string) => {
				return {
					stroke: color,
				};
			},
			type: 'default',
		},
	},
	{
		id: 'palette-16',
		name: 'Palette 16',
		colors: ['#ffffff', '#84dcc6', '#a5ffd6', '#ffa69e', '#ff686b'],
		root: {
			buildStyles: () => {
				return {
					backgroundColor: '#fff',
					color: '#1E293B',
					borderStyle: 'solid',
					borderWidth: 1,
					borderColor: '#ffffff',
					borderRadius: '10px',
				};
			},
		},
		node: {
			buildStyles: (color: string) => {
				return {
					borderStyle: 'solid',
					borderWidth: 1,
					borderColor: color,
					backgroundColor: color,
					color: fontColorContrast(color),
					borderRadius: '10px',
				};
			},
		},
		edge: {
			buildStyles: (color: string) => {
				return {
					stroke: color,
				};
			},
			type: 'default',
		},
	},
	{
		id: 'palette-17',
		name: 'Palette 17',
		colors: ['#264653', '#2a9d8f', '#e9c46a', '#f4a261', '#e76f51'],
		root: {
			buildStyles: () => {
				return {
					backgroundColor: '#fff',
					color: '#1E293B',
					borderStyle: 'solid',
					borderWidth: 1,
					borderColor: '#264653',
					borderRadius: '10px',
				};
			},
		},
		node: {
			buildStyles: (color: string) => {
				return {
					borderStyle: 'solid',
					borderWidth: 1,
					borderColor: color,
					backgroundColor: color,
					color: fontColorContrast(color),
					borderRadius: '10px',
				};
			},
		},
		edge: {
			buildStyles: (color: string) => {
				return {
					stroke: color,
				};
			},
			type: 'default',
		},
	},
	{
		id: 'palette-18',
		name: 'Palette 18',
		colors: ['#606c38', '#283618', '#fefae0', '#dda15e', '#bc6c25'],
		root: {
			buildStyles: () => {
				return {
					backgroundColor: '#fff',
					color: '#1E293B',
					borderStyle: 'solid',
					borderWidth: 1,
					borderColor: '#606c38',
					borderRadius: '10px',
				};
			},
		},
		node: {
			buildStyles: (color: string) => {
				return {
					borderStyle: 'solid',
					borderWidth: 1,
					borderColor: color,
					backgroundColor: color,
					color: fontColorContrast(color),
					borderRadius: '10px',
				};
			},
		},
		edge: {
			buildStyles: (color: string) => {
				return {
					stroke: color,
				};
			},
			type: 'default',
		},
	},
	{
		id: 'palette-19',
		name: 'Palette 19',
		colors: ['#ff9f1c', '#ffbf69', '#ffffff', '#cbf3f0', '#2ec4b6'],
		root: {
			buildStyles: () => {
				return {
					backgroundColor: '#fff',
					color: '#1E293B',
					borderStyle: 'solid',
					borderWidth: 1,
					borderColor: '#ff9f1c',
					borderRadius: '10px',
				};
			},
		},
		node: {
			buildStyles: (color: string) => {
				return {
					borderStyle: 'solid',
					borderWidth: 1,
					borderColor: color,
					backgroundColor: color,
					color: fontColorContrast(color),
					borderRadius: '10px',
				};
			},
		},
		edge: {
			buildStyles: (color: string) => {
				return {
					stroke: color,
				};
			},
			type: 'default',
		},
	},
	{
		id: 'palette-20',
		name: 'Palette 20',
		colors: ['#5f0f40', '#9a031e', '#fb8b24', '#e36414', '#0f4c5c'],
		root: {
			buildStyles: () => {
				return {
					backgroundColor: '#fff',
					color: '#1E293B',
					borderStyle: 'solid',
					borderWidth: 1,
					borderColor: '#5f0f40',
					borderRadius: '10px',
				};
			},
		},
		node: {
			buildStyles: (color: string) => {
				return {
					borderStyle: 'solid',
					borderWidth: 1,
					borderColor: color,
					backgroundColor: color,
					color: fontColorContrast(color),
					borderRadius: '10px',
				};
			},
		},
		edge: {
			buildStyles: (color: string) => {
				return {
					stroke: color,
				};
			},
			type: 'default',
		},
	},
	{
		id: 'palette-21',
		name: 'Palette 21',
		colors: ['#70d6ff', '#ff70a6', '#ff9770', '#ffd670', '#e9ff70'],
		root: {
			buildStyles: () => {
				return {
					backgroundColor: '#fff',
					color: '#1E293B',
					borderStyle: 'solid',
					borderWidth: 1,
					borderColor: '#70d6ff',
					borderRadius: '10px',
				};
			},
		},
		node: {
			buildStyles: (color: string) => {
				return {
					borderStyle: 'solid',
					borderWidth: 1,
					borderColor: color,
					backgroundColor: color,
					color: fontColorContrast(color),
					borderRadius: '10px',
				};
			},
		},
		edge: {
			buildStyles: (color: string) => {
				return {
					stroke: color,
				};
			},
			type: 'default',
		},
	},
	{
		id: 'palette-22',
		name: 'Palette 22',
		colors: ['#55dde0', '#33658a', '#2f4858', '#f6ae2d', '#f26419'],
		root: {
			buildStyles: () => {
				return {
					backgroundColor: '#fff',
					color: '#1E293B',
					borderStyle: 'solid',
					borderWidth: 1,
					borderColor: '#55dde0',
					borderRadius: '10px',
				};
			},
		},
		node: {
			buildStyles: (color: string) => {
				return {
					borderStyle: 'solid',
					borderWidth: 1,
					borderColor: color,
					backgroundColor: color,
					color: fontColorContrast(color),
					borderRadius: '10px',
				};
			},
		},
		edge: {
			buildStyles: (color: string) => {
				return {
					stroke: color,
				};
			},
			type: 'default',
		},
	},
	{
		id: 'palette-23',
		name: 'Palette 23',
		colors: ['#000814', '#001d3d', '#003566', '#ffc300', '#ffd60a'],
		root: {
			buildStyles: () => {
				return {
					backgroundColor: '#fff',
					color: '#1E293B',
					borderStyle: 'solid',
					borderWidth: 1,
					borderColor: '#000814',
					borderRadius: '10px',
				};
			},
		},
		node: {
			buildStyles: (color: string) => {
				return {
					borderStyle: 'solid',
					borderWidth: 1,
					borderColor: color,
					backgroundColor: color,
					color: fontColorContrast(color),
					borderRadius: '10px',
				};
			},
		},
		edge: {
			buildStyles: (color: string) => {
				return {
					stroke: color,
				};
			},
			type: 'default',
		},
	},
	{
		id: 'palette-24',
		name: 'Palette 24',
		colors: ['#007f5f', '#2b9348', '#55a630', '#80b918', '#aacc00'],
		root: {
			buildStyles: () => {
				return {
					backgroundColor: '#fff',
					color: '#1E293B',
					borderStyle: 'solid',
					borderWidth: 1,
					borderColor: '#007f5f',
					borderRadius: '10px',
				};
			},
		},
		node: {
			buildStyles: (color: string) => {
				return {
					borderStyle: 'solid',
					borderWidth: 1,
					borderColor: color,
					backgroundColor: color,
					color: fontColorContrast(color),
					borderRadius: '10px',
				};
			},
		},
		edge: {
			buildStyles: (color: string) => {
				return {
					stroke: color,
				};
			},
			type: 'default',
		},
	},
	{
		id: 'palette-25',
		name: 'Palette 25',
		colors: ['#ff7b00', '#ff8800', '#ff9500', '#ffa200', '#ffaa00'],
		root: {
			buildStyles: () => {
				return {
					backgroundColor: '#fff',
					color: '#1E293B',
					borderStyle: 'solid',
					borderWidth: 1,
					borderColor: '#ff7b00',
					borderRadius: '10px',
				};
			},
		},
		node: {
			buildStyles: (color: string) => {
				return {
					borderStyle: 'solid',
					borderWidth: 1,
					borderColor: color,
					backgroundColor: color,
					color: fontColorContrast(color),
					borderRadius: '10px',
				};
			},
		},
		edge: {
			buildStyles: (color: string) => {
				return {
					stroke: color,
				};
			},
			type: 'default',
		},
	},
	{
		id: 'palette-26',
		name: 'Palette 26',
		colors: ['#00296b', '#003f88', '#00509d', '#fdc500', '#ffd500'],
		root: {
			buildStyles: () => {
				return {
					backgroundColor: '#fff',
					color: '#1E293B',
					borderStyle: 'solid',
					borderWidth: 1,
					borderColor: '#00296b',
					borderRadius: '10px',
				};
			},
		},
		node: {
			buildStyles: (color: string) => {
				return {
					borderStyle: 'solid',
					borderWidth: 1,
					borderColor: color,
					backgroundColor: color,
					color: fontColorContrast(color),
					borderRadius: '10px',
				};
			},
		},
		edge: {
			buildStyles: (color: string) => {
				return {
					stroke: color,
				};
			},
			type: 'default',
		},
	},
];
