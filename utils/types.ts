import { ReactFlowJsonObject } from 'reactflow';

export interface ExportedDataState {
	type: string;
	version: string;
	map: ReactFlowJsonObject;
}

export interface ImportedDataState {
	type?: string;
	version?: number;
	map?: MapState;
}

export interface MapState extends ReactFlowJsonObject {
	nodes: NodeElement[];
	edges: EdgeElement[];
	viewport: ViewportState;
}

interface NodeElement {
	width: number;
	height: number;
	id: string;
	data: any;
	position: {
		x: number;
		y: number;
	};
	type: string;
	selected: boolean;
	dragging: boolean;
	positionAbsolute: {
		x: number;
		y: number;
	};
}

interface EdgeElement {
	id: string;
	source: string;
	target: string;
	style: any;
}

interface ViewportState {
	x: number;
	y: number;
	zoom: number;
}
