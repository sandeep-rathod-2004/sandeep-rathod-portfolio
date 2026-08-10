import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import TechStack from '@/components/sections/TechStack';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import GitHubSection from '@/components/sections/GitHubSection';
import Architecture from '@/components/sections/Architecture';
import Timeline from '@/components/sections/Timeline';
import Skills from '@/components/sections/Skills';
import Statistics from '@/components/sections/Statistics';
import Blog from '@/components/sections/Blog';
import RecruiterCard from '@/components/sections/RecruiterCard';
import AIPlayground from '@/components/sections/AIPlayground';
import Contact from '@/components/sections/Contact';
import FinalCTA from '@/components/sections/FinalCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <Statistics />
      <About />
      <TechStack />
      <Experience />
      <Skills />
      <Projects />
      <Architecture />
      <GitHubSection />
      <AIPlayground />
      <Timeline />
      <RecruiterCard />
      <Blog />
      <Contact />
      <FinalCTA />
    </>
  );
}
