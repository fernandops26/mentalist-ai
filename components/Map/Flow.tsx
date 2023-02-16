'use client';

import 'reactflow/dist/style.css';

import { useEffect, useMemo, useRef } from 'react';
import ReactFlow, { Background, Controls } from 'reactflow';
import useMapStore, { RFState } from '@/stores/mapStore';
import { shallow } from 'zustand/shallow';
import { nodeTypes } from '@/data/defaultNodes';

const panOnDrag = [1, 2];

const selector = (state: RFState) => ({
  nodes: state.nodes,
  edges: state.edges,
  viewport: state.viewport,
  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange,
  onConnect: state.onConnect,
  onConnectStart: state.onConnectStart,
  onConnectEnd: state.onConnectEnd,
  setReactFlowWrapper: state.setReactFlowWrapper,
  onInit: state.onInit,
  instance: state.instance,
});

function Flow({ children }: any) {
  const reactFlowWrapper = useRef(null);
  const {
    nodes,
    edges,
    viewport,
    onNodesChange,
    onEdgesChange,
    onConnect,
    onConnectStart,
    onConnectEnd,
    setReactFlowWrapper,
    onInit,
  } = useMapStore(selector, shallow);

  const fitViewOptions = {
    padding: 3,
  };

  const nodeTypesMemorized = useMemo(() => nodeTypes, []);

  useEffect(() => {
    setReactFlowWrapper(reactFlowWrapper);
  }, []);

  return (
    <>
      <div className='w-full h-full bg-slate-100' ref={reactFlowWrapper}>
        <ReactFlow
          onInit={onInit}
          nodeTypes={nodeTypesMemorized}
          nodes={nodes}
          edges={edges}
          defaultViewport={viewport}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
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
        </ReactFlow>
      </div>
    </>
  );
}

export default Flow;
