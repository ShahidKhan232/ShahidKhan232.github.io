import Contact from '@/components/Contact';
import Navigation from '@/components/Navigation';
import ParticleBackground from '@/components/ParticleBackground';
import CustomCursor from '@/components/CustomCursor';
import ScrollProgress from '@/components/ScrollProgress';
import CloudBackground from '@/components/CloudBackground';

export default function ContactPage() {
    return (
        <div className="min-h-screen transition-colors duration-300">
            <CustomCursor />
            <ScrollProgress />
            <CloudBackground />
            <ParticleBackground />
            <Navigation />
            <main className="bg-white dark:bg-gray-900 pt-16">
                <Contact />
            </main>
        </div>
    );
}
