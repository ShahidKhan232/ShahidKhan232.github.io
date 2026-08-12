import Hero from '@/components/Hero';
import Navigation from '@/components/Navigation';
import ParticleBackground from '@/components/ParticleBackground';
import CustomCursor from '@/components/CustomCursor';
import ScrollProgress from '@/components/ScrollProgress';
import CloudBackground from '@/components/CloudBackground';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Stats from '@/components/Stats';
import Experience from '@/components/Experience';
import FilterablePortfolio from '@/components/FilterablePortfolio';
import Contact from '@/components/Contact';

export default function Home() {
    return (
        <div className="min-h-screen bg-slate-950">
            <CustomCursor />
            <ScrollProgress />
            <CloudBackground />
            <ParticleBackground />
            <Navigation />
            <main>
                <Hero />
                <Stats />
                <About />
                <Skills />
                <Experience />
                <FilterablePortfolio />
                <Contact />
            </main>
        </div>
    );
}
