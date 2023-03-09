import RootNode from '@/components/Map/Nodes/RootNode';
import TopicNode from '@/components/Map/Nodes/TopicNode';
import { Node } from 'reactflow';
import { MAIN_TOPIC } from '@/utils/constants/headerTypes';

export const nodeTypes = {
	rootNode: RootNode,
	topicNode: TopicNode,
};

export const initialNodes: Array<Node> = [
	{
		id: 'root',
		data: { text: 'AI conquering the world', type: MAIN_TOPIC },
		position: { x: 0, y: 0 },
		type: 'rootNode',
	},
	// {
	//   id: '1',
	//   data: { label: 'Hello' },
	//   position: { x: 0, y: 0 },
	//   type: 'input',
	// },
	// {
	//   id: '2',
	//   data: { label: 'World' },
	//   position: { x: 100, y: 100 },
	// },
];
