'use client';

import React from 'react';
import { ReactFlowProvider } from 'reactflow';

interface FlowWrapperProps {
	children: React.ReactNode;
}

export default function FlowWrapper({ children }: FlowWrapperProps) {
	return <ReactFlowProvider>{children}</ReactFlowProvider>;
}
