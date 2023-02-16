import { nextId } from './id';
import { Edge, Node, Position } from 'reactflow';
import dagre from 'dagre';

const RADIUS: number = 100;

export function generateNewNodes(
  centerX: number,
  centerY: number,
  type?: string,
  data?: Array<any>
) {
  const numberItems = data?.length!;
  const angleStep = (2 * Math.PI) / numberItems;
  let currentAngle = 0;

  const newNotes: Array<Node> = [];
  for (let i = 0; i < numberItems; i++) {
    const x = centerX + RADIUS * Math.cos(currentAngle);
    const y = centerY + RADIUS * Math.sin(currentAngle);

    const id = nextId();
    const newNode: Node = {
      id,
      position: {
        x,
        y,
      },
      data: (data && data[i]) ?? {
        label: `Node ${id}`,
      },
      type,
    };

    newNotes.push(newNode);
    currentAngle += angleStep;
  }

  return newNotes;
}

export function generateNodes(type: string, data: Array<any>) {
  return data.map(function (item) {
    return {
      id: nextId(),
      position: {
        x: 0,
        y: 0,
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
  direction = 'TB'
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
