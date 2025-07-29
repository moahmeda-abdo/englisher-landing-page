import React from 'react';
import TestPageLayout from '../components/TestPageLayout';
import { placementPage } from '../data/data';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: " Oxford Placement Test | Englisher",
};

export default function Page() {
    return <TestPageLayout {...placementPage} />;
}
