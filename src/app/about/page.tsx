import React from 'react'
import Hero from './components/Hero/Hero'
import Mission from './components/Mission/Mission'
import { site } from '@/content'
import AboutUs from './components/AboutUs/AboutUs';
import Benefits from './components/Benefits';

export async function generateMetadata() {
    const title = site.about?.hero?.pageTitle;

    return {
        title: title,
    }
}

export default function About() {
    return (
        <>
            <Hero />
            <AboutUs />
            <Mission />
            <Benefits />
        </>
    )
}
