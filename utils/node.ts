import { nextId } from './id';
import { Edge, Node, Position } from 'reactflow';
import dagre from 'dagre';
import { PaletteElement, PaletteElementNodeStyles } from './types';
import { CSSProperties } from 'react';

export function generateNodes(type: string, parentNode: Node, data: Array<any>) {
	const parentWidth = parentNode.width!;
	const elementsCount = data.length;
	const space = 100;
	const totalArea = elementsCount * parentWidth + space * (elementsCount - 1);
	const xStartPos = parentNode.position.x - totalArea / 2;

	let y = 200;
	let x = xStartPos - parentWidth;

	return data.map(function (item) {
		x += space + parentWidth;

		return {
			id: nextId(),
			position: {
				x,
				y: parentNode.position.y + y,
			},
			data: item,
			type,
		};
	});
}

export const generateEdges = (parentId: string, childrens: Array<Node>) => {
	return childrens.map((childrenNode) => {
		return {
			id: nextId(),
			source: parentId,
			target: childrenNode.id,
			animated: true,
			style: { stroke: '#1A192B' },
		};
	});
};

const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));

const nodeWidth = 240;
const nodeHeight = 36;

export const getLayoutedElements = (
	nodes: Array<Node>,
	edges: Array<Edge>,
	direction = 'TB',
): { nodes: Array<Node>; edges: Array<Edge> } => {
	const isHorizontal = direction === 'LR';
	dagreGraph.setGraph({ rankdir: direction });

	nodes.forEach((node) => {
		dagreGraph.setNode(node.id, { width: nodeWidth, height: nodeHeight });
	});

	edges.forEach((edge) => {
		dagreGraph.setEdge(edge.source, edge.target);
	});

	dagre.layout(dagreGraph);

	const newNodes: Array<Node> = nodes.map((node) => {
		const nodeWithPosition = dagreGraph.node(node.id);
		node.targetPosition = isHorizontal ? Position.Left : Position.Top;
		node.sourcePosition = isHorizontal ? Position.Right : Position.Bottom;

		// We are shifting the dagre node position (anchor=center center) to the top left
		// so it matches the React Flow node anchor point (top left).
		node.position = {
			x: nodeWithPosition.x - nodeWidth / 2,
			y: nodeWithPosition.y - nodeHeight / 2,
		};

		return node;
	});

	return { nodes: newNodes, edges };
};

export const findLeafNodes = (nodes: Array<Node>, nodeId: string) => {
	const node = nodes.find((node) => node.id === nodeId)!;

	let tree = [node];
	if (node.data.parentId) {
		tree = tree.concat(findLeafNodes(nodes, node.data.parentId));
	}

	return tree;
};

export const getNodeColor = (depth: number, palette: PaletteElement) => {
	const colors = palette.colors;
	const index = depth % colors.length;
	const color = colors[index];

	const style = palette.node.buildStyles(color);

	return { style, color };
};

export const getEdgeColor = (depth: number, palette: PaletteElement) => {
	const colors = palette.colors;
	const index = depth % colors.length;
	const color = colors[index];

	const style = palette.edge.buildStyles(color);

	return { style, color };
};
