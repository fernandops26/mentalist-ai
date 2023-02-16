'use client';
import { ReactFlowJsonObject } from 'reactflow';
import { initialNodes } from '@/data/defaultNodes';
import { initialEdges } from '@/data/defaultEdges';

const KEY = 'mentalist-data';

export const save = (obj: ReactFlowJsonObject) => {
  localStorage.setItem(KEY, JSON.stringify([obj]));
};

export const readData = (): ReactFlowJsonObject => {
  const data = typeof window !== 'undefined' && localStorage.getItem(KEY);

  if (!data) {
    return {
      nodes: initialNodes,
      edges: initialEdges,
      viewport: {
        x: 0,
        y: 0,
        zoom: 1,
      },
    };
  }

  return JSON.parse(data)[0] as ReactFlowJsonObject;
};
