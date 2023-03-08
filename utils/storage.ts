'use client';
import { ReactFlowJsonObject } from 'reactflow';
import { initialNodes } from '@/data/defaultNodes';
import { initialEdges } from '@/data/defaultEdges';
import { ImportedDataState } from './types';

const KEY = 'mentalist-data';
const TYPE = 'mentalist';
const VERSION = 1;

export const save = (obj: ReactFlowJsonObject) => {
  const objToSave = formatObject(obj);

  localStorage.setItem(KEY, JSON.stringify(objToSave));
};

export const loadMapData = (): ReactFlowJsonObject => {
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

  const jsonObj = JSON.parse(data);

  if (Array.isArray(jsonObj) || !Object.hasOwn(jsonObj, 'type')) {
    // old version
    return jsonObj[0] as ReactFlowJsonObject;
  }

  return jsonObj.map as ReactFlowJsonObject;
};

export const readFullContentObj = () => {
  const data = typeof window !== 'undefined' && localStorage.getItem(KEY);

  return JSON.parse(data as any);
};

const formatObject = (obj: ReactFlowJsonObject) => {
  return {
    type: TYPE,
    version: VERSION,
    map: obj,
  };
};

export const restore = (dataState: ImportedDataState) => {
  localStorage.setItem(KEY, JSON.stringify(dataState));
};
