import { create } from 'zustand';
import {
  applyEdgeChanges,
  applyNodeChanges,
  Edge,
  EdgeChange,
  Node,
  NodeChange,
  Connection,
  OnNodesChange,
  OnEdgesChange,
  OnConnect,
  OnConnectStartParams,
  ReactFlowInstance,
  Viewport,
} from 'reactflow';
import { nodeTypes } from '@/data/defaultNodes';
import { findLeafNodes, generateEdges, generateNodes } from '@/utils/node';
import {
  MouseEvent as ReactMouseEvent,
  RefObject,
  TouchEvent as ReactTouchEvent,
} from 'react';
import { SUBTOPIC } from '@/utils/constants/headerTypes';
import { nextId } from '@/utils/id';
import { readData, save } from '@/utils/storage';

export type RFState = {
  instance: ReactFlowInstance | null;
  onInit: (instance: ReactFlowInstance) => void;
  nodes: Node[];
  edges: Edge[];
  viewport: Viewport;
  connectionNodeId: string | null;
  reactFlowWrapper: RefObject<HTMLElement> | null;
  setReactFlowWrapper: (ref: RefObject<HTMLElement>) => void;
  onNodesChange: OnNodesChange;
  onEdgesChange: OnEdgesChange;
  onConnect: OnConnect;
  onConnectStart: (
    event: ReactMouseEvent | ReactTouchEvent,
    params: OnConnectStartParams
  ) => void;
  onConnectEnd: (event: MouseEvent | TouchEvent) => void;
  nodeTypes: typeof nodeTypes;
  updateText: (nodeId: string, text: string) => void;
  updateInnerType: (nodeId: string, text: string) => void;
  addChildrenNodes: (nodeId: string, type: string, data: Array<any>) => void;
  getNodeContext: (nodeId: string) => { main: string; context: Array<string> };
  removeElement: (nodeId: string) => void;
};

const data = readData();

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
  },
  viewport: data.viewport,
  nodes: data.nodes,
  edges: data.edges,
  nodeTypes,
  reactFlowWrapper: null,
  connectionNodeId: null,
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
  setReactFlowWrapper: (ref: RefObject<HTMLElement>) => {
    set({
      reactFlowWrapper: ref,
    });
  },
  onNodesChange: (changes: Array<NodeChange>) => {
    const newNodes = applyNodeChanges(changes, get().nodes);

    set({
      nodes: newNodes,
    });

    if (get().instance) {
      const items = get().instance?.toObject()!;
      items.nodes = newNodes;

      save(items);
    }
  },
  onEdgesChange: (changes: Array<EdgeChange>) => {
    const newEdges = applyEdgeChanges(changes, get().edges);
    set({
      edges: newEdges,
    });

    if (get().instance) {
      const items = get().instance?.toObject()!;

      items.edges = newEdges;

      save(items);
    }
  },
  onConnect: (connection: Edge | Connection) => {
    // set({ edges: addEdge(connection, get().edges) });
  },
  onConnectStart: (
    event: ReactMouseEvent | ReactTouchEvent,
    params: OnConnectStartParams
  ) => {
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
    set({
      nodes: get().nodes.map((node) => {
        if (node.id === nodeId) {
          // it's important to create a new object here, to inform React Flow about the changes
          node.data = { ...node.data, type };
        }

        return node;
      }),
    });
  },
  updateText: (nodeId: string, text: string) => {
    set({
      nodes: get().nodes.map((node) => {
        if (node.id === nodeId) {
          // it's important to create a new object here, to inform React Flow about the changes
          node.data = { ...node.data, text };
        }

        return node;
      }),
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
      return;
    }

    instance.deleteElements({ nodes: [node] });
  },
}));

export default useMapStore;
