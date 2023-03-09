import AppLayout from '@/components/Layout/AppLayout/AppLayout';
import React from 'react';

interface LayoutProps {
	children: React.ReactNode;
}
export default function Layout({ children }: LayoutProps) {
	return <AppLayout>{children}</AppLayout>;
}
