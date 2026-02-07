import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import ProjectsOverview from '@/components/ProjectsOverview';
import Contact from '@/components/Contact';
import Navigation from '@/components/Navigation';
import ParticleBackground from '@/components/ParticleBackground';
import CustomCursor from '@/components/CustomCursor';
import ScrollProgress from '@/components/ScrollProgress';
import StatsSection from '@/components/StatsSection';
import Skills from '@/components/Skills';
import CloudBackground from '@/components/CloudBackground';

export default function Home() {
    return (
        <div className="min-h-screen transition-colors duration-300">
            <CustomCursor />
            <ScrollProgress />
            <CloudBackground />
            <ParticleBackground />
            <Navigation />
            <main className="bg-white dark:bg-gray-900">
                <Hero />
                <About />
                <StatsSection />
                <Skills />
                <Experience />
                <ProjectsOverview />
                <Contact />
            </main>
        </div>
    );
}
