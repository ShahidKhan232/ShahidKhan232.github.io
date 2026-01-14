import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import ProjectsOverview from '@/components/ProjectsOverview';
import CertificationsOverview from '@/components/CertificationsOverview';
import Contact from '@/components/Contact';
import Navigation from '@/components/Navigation';
import ParticleBackground from '@/components/ParticleBackground';
import CustomCursor from '@/components/CustomCursor';
import ScrollProgress from '@/components/ScrollProgress';
import StatsSection from '@/components/StatsSection';

export default function Home() {
    return (
        <div className="min-h-screen transition-colors duration-300">
            <CustomCursor />
            <ScrollProgress />
            <ParticleBackground />
            <Navigation />
            <main className="bg-white dark:bg-gray-900">
                <Hero />
                <About />
                <StatsSection />
                <Experience />
                <ProjectsOverview />
                <CertificationsOverview />
                <Contact />
            </main>
        </div>
    );
}
