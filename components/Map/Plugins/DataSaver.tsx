import useMapStore from '@/stores/mapStore';
import { saveMap } from '@/utils/storage';
import { useEffect } from 'react';
import { useNodesInitialized, useReactFlow } from 'reactflow';

function DataSaver() {
	const store = useMapStore();
	const reactFlowInstance = useReactFlow();
	const nodesInitialized = useNodesInitialized();

	useEffect(() => {
		if (nodesInitialized) {
			const map = reactFlowInstance.toObject();

			saveMap(map);
		}
	}, [store.nodes, store.edges, store.viewport]);

	return null;
}

export default DataSaver;
