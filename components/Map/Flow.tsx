'use client';

import 'reactflow/dist/style.css';

import { useEffect, useRef } from 'react';
import ReactFlow, { Background, Controls, MiniMap } from 'reactflow';
import useMapStore, { RFState } from '@/stores/mapStore';
import { shallow } from 'zustand/shallow';
import { nodeTypes } from '@/data/defaultNodes';
import DataSaver from './Plugins/DataSaver';

const panOnDrag = [1, 2];

const selector = (state: RFState) => ({
	nodes: state.nodes,
	edges: state.edges,
	viewport: state.viewport,
	onNodesChange: state.onNodesChange,
	onEdgesChange: state.onEdgesChange,
	onConnectStart: state.onConnectStart,
	onConnectEnd: state.onConnectEnd,
	setReactFlowWrapper: state.setReactFlowWrapper,
	onInit: state.onInit,
	instance: state.instance,
});

const fitViewOptions = {
	padding: 3,
};

function Flow({ children }: any) {
	const reactFlowWrapper = useRef(null);
	const {
		nodes,
		edges,
		viewport,
		onNodesChange,
		onEdgesChange,
		onConnectStart,
		onConnectEnd,
		setReactFlowWrapper,
		onInit,
	} = useMapStore(selector, shallow);

	useEffect(() => {
		setReactFlowWrapper(reactFlowWrapper);
	}, []);

	return (
		<>
			<div className="w-full h-full bg-slate-100" ref={reactFlowWrapper}>
				<ReactFlow
					onInit={onInit}
					nodeTypes={nodeTypes}
					nodes={nodes}
					edges={edges}
					defaultViewport={viewport}
					onNodesChange={onNodesChange}
					onEdgesChange={onEdgesChange}
					// panOnScroll
					selectionOnDrag
					fitView
					panOnDrag={panOnDrag}
					onConnectStart={onConnectStart}
					onConnectEnd={onConnectEnd}
					fitViewOptions={fitViewOptions}
				>
					<Background />
					<Controls />
					<MiniMap zoomable pannable />
					<DataSaver />
				</ReactFlow>
			</div>
		</>
	);
}

export default Flow;
