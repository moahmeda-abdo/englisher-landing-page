import React from 'react';
import TestPageLayout from '../components/TestPageLayout';
import { speakingPage } from '../data/data';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: " Speaking Test | Englisher",
};

export default function Page() {
    return <TestPageLayout {...speakingPage} />;

}