import React from 'react';
import TestPageLayout from '../components/TestPageLayout';
import { placementPage } from '../data/data';

export default function Page() {
    return <TestPageLayout {...placementPage} />;
}
