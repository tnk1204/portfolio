import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PortfolioModal from './components/PortfolioModal';
import FloatingContact from './components/FloatingContact';
import BackToTopButton from './components/BackToTopButton';
import { PROJECTS } from './constants';
import type { Project } from './types';

function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const portfolioRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Chỉ kích hoạt custom cursor trên desktop để tránh lỗi trên mobile
    const isDesktop = window.innerWidth > 768; // 768px là breakpoint chung cho mobile

    if (!isDesktop) return; // Không add listeners trên mobile

    const dot = document.querySelector('.custom-cursor-dot') as HTMLElement;
    const outline = document.querySelector('.custom-cursor-outline') as HTMLElement;

    const handleMouseMove = (e: MouseEvent) => {
      dot.style.left = `${e.clientX}px`;
      dot.style.top = `${e.clientY}px`;
      
      outline.animate({
        left: `${e.clientX}px`,
        top: `${e.clientY}px`
      }, { duration: 500, fill: 'forwards' });
    };

    const handleMouseOver = (e: MouseEvent) => {
        if ((e.target as Element).closest('a, button, [role="button"], .cursor-pointer')) {
            document.body.classList.add('cursor-hover');
        }
    };

    const handleMouseOut = (e: MouseEvent) => {
        if ((e.target as Element).closest('a, button, [role="button"], .cursor-pointer')) {
            document.body.classList.remove('cursor-hover');
        }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  const handleCardClick = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="bg-white font-sans">
      <Header />
      <main>
        <Hero />
        <Portfolio ref={portfolioRef} projects={PROJECTS} onCardClick={handleCardClick} />
        <About ref={aboutRef} />
        <Contact ref={contactRef} />
      </main>
      <Footer />
      <FloatingContact />
      <BackToTopButton />
      {selectedProject && (
        <PortfolioModal project={selectedProject} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default App;