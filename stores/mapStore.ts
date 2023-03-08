import { create } from 'zustand';
import {
  applyEdgeChanges,
  applyNodeChanges,
  Edge,
  EdgeChange,
  Node,
  NodeChange,
  OnNodesChange,
  OnEdgesChange,
  OnConnectStartParams,
  ReactFlowInstance,
  Viewport,
} from 'reactflow';

import { findLeafNodes, generateEdges, generateNodes } from '@/utils/node';
import { MouseEvent as ReactMouseEvent, RefObject, TouchEvent as ReactTouchEvent } from 'react';
import { SUBTOPIC } from '@/utils/constants/headerTypes';
import { nextId } from '@/utils/id';
import { loadMapData, save } from '@/utils/storage';

export type RFState = {
  instance: ReactFlowInstance | null;
  onInit: (instance: ReactFlowInstance) => void;
  nodes: Node[];
  edges: Edge[];
  loadFromStorage: () => void;
  viewport: Viewport;
  connectionNodeId: string | null;
  reactFlowWrapper: RefObject<HTMLDivElement | undefined> | null;
  setReactFlowWrapper: (ref: RefObject<HTMLDivElement | undefined>) => void;
  onNodesChange: OnNodesChange;
  onEdgesChange: OnEdgesChange;
  onConnectStart: (event: ReactMouseEvent | ReactTouchEvent, params: OnConnectStartParams) => void;
  onConnectEnd: (event: MouseEvent | TouchEvent) => void;
  updateText: (nodeId: string, text: string) => void;
  updateInnerType: (nodeId: string, text: string) => void;
  addChildrenNodes: (nodeId: string, type: string, data: Array<any>) => void;
  getNodeContext: (nodeId: string) => { main: string; context: Array<string> };
  removeElement: (nodeId: string) => void;
};

// const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(
//   data.nodes,
//   data.edges
// );

const useMapStore = create<RFState>((set, get) => ({
  instance: null,
  onInit: (instance: ReactFlowInstance) => {
    set({
      instance,
    });

    get().loadFromStorage();
  },
  viewport: {
    x: 0,
    y: 0,
    zoom: 1,
  },
  nodes: [],
  edges: [],
  reactFlowWrapper: null,
  connectionNodeId: null,
  loadFromStorage: () => {
    const data = loadMapData();

    const instance = get().instance;
    if (!instance) {
      console.log('no instance');

      return;
    }

    set({
      nodes: data.nodes,
      edges: data.edges,
      viewport: data.viewport,
    });
  },
  getNodeContext: (nodeId: string) => {
    const nodes = findLeafNodes(get().nodes, nodeId).reverse();

    const rootNode = nodes.shift()!;
    const main = rootNode.data.text;
    const context = nodes.map((node) => node.data.text);

    return {
      main,
      context,
    };
  },
  setReactFlowWrapper: (ref: RefObject<HTMLDivElement | undefined>) => {
    set({
      reactFlowWrapper: ref,
    });
  },
  onNodesChange: (changes: Array<NodeChange>) => {
    const newNodes = applyNodeChanges(changes, get().nodes);

    set({
      nodes: newNodes,
    });
  },
  onEdgesChange: (changes: Array<EdgeChange>) => {
    const newEdges = applyEdgeChanges(changes, get().edges);
    set({
      edges: newEdges,
    });
  },
  onConnectStart: (event: ReactMouseEvent | ReactTouchEvent, params: OnConnectStartParams) => {
    if ((event.target as any).classList.contains('source')) {
      set({
        connectionNodeId: params.nodeId,
      });
    }
  },
  onConnectEnd: (event: any) => {
    const targetIsPane = event.target.classList.contains('react-flow__pane');
    const connectingNodeId = get().connectionNodeId!;
    const reactFlowWrapper = get().reactFlowWrapper;

    if (targetIsPane && connectingNodeId && reactFlowWrapper?.current) {
      // we need to remove the wrapper bounds, in order to get the correct position
      const { top, left } = reactFlowWrapper.current.getBoundingClientRect();

      const { project } = get().instance!;

      const id = nextId();
      const newNode = {
        id,
        type: 'topicNode',
        // we are removing the half of the node width (75) to center the new node
        position: project({
          x: event.clientX - left - 100,
          y: event.clientY - top,
        }),
        data: {
          text: 'Subtopic title',
          type: SUBTOPIC,
          parentId: connectingNodeId,
        },
      };

      set({
        nodes: get().nodes.concat(newNode),
        edges: get().edges.concat({
          id: nextId(),
          source: connectingNodeId,
          target: id,
          style: { stroke: '#1A192B' },
        }),
        connectionNodeId: null,
      });
    }
  },
  updateInnerType: (nodeId: string, type: string) => {
    const newNodes = get().nodes.map((node) => {
      if (node.id === nodeId) {
        node.data = { ...node.data, type };
      }

      return node;
    });

    set({
      nodes: newNodes,
    });
  },
  updateText: (nodeId: string, text: string) => {
    const newNodes = get().nodes.map((node) => {
      if (node.id === nodeId) {
        node.data = { ...node.data, text };
      }

      return node;
    });

    set({
      nodes: newNodes,
    });
  },
  addChildrenNodes: (nodeId: string, type: string, data: Array<any>) => {
    const node = get().nodes.find((node) => node.id == nodeId)!;

    if (data.length === 0) {
      return;
    }

    const newNodes = generateNodes(type, node, data);

    const newEdges = generateEdges(node.id, newNodes);

    const allNodes = [...get().nodes, ...newNodes];
    const allEdges = [...get().edges, ...newEdges];

    set({ nodes: [...allNodes] });
    set({ edges: [...allEdges] });
  },
  removeElement: (nodeId: string) => {
    const node = get().nodes.find((node) => node.id == nodeId)!;

    const instance = get().instance;
    if (!instance) {
      console.log('no instance');

      return;
    }

    instance.deleteElements({ nodes: [node] });
  },
}));

export default useMapStore;
