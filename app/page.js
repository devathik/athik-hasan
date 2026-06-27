import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import LoadingSpinner from './components/ui/LoadingSpinner';

// Dynamic imports for better performance
const Hero = dynamic(() => import('./components/home/Hero'));
const Skills = dynamic(() => import('./components/home/Skills'));
const Projects = dynamic(() => import('./components/home/Projects'));
const About = dynamic(() => import('./components/home/About'));
const Testimonials = dynamic(() => import('./components/home/Testimonials'));
const Contact = dynamic(() => import('./components/home/Contact'));

export const metadata = {
  title: 'Developers Portfolio',
  description: 'MERN-stack developer specializing in building exceptional digital experiences',
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Suspense fallback={<LoadingSpinner />}>
        <Skills />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Projects />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <About />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Testimonials />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Contact />
      </Suspense>
    </>
  );
}
