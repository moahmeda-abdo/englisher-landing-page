import React from 'react';
import TestPageLayout from '../components/TestPageLayout';
import { speakingPage } from '../data/data';

export default function Page() {
    return <TestPageLayout {...speakingPage} />;

}