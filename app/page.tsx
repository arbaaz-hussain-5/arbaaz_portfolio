'use client';

import HeroSection from './components/HeroSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import NavBar from './components/NavBar';

export default function SimplePortfolio() {
	return (
		<main className="min-h-screen bg-black"
		 style={{
    backgroundImage: 'url("https://img.freepik.com/premium-photo/green-programming-code-with-cybersecurity-digital-grid_198067-1181720.jpg")',
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
  }}>
			<NavBar/>
			<HeroSection />
			<SkillsSection />
			<ProjectsSection />
			<ContactSection />
		</main>
	);
}
