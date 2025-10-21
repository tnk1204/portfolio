import React, { useState, useEffect } from 'react';
import type { Project } from '../types';
import PortfolioCard from './PortfolioCard';
import { useIntersectionObserver } from '../hooks';

interface PortfolioProps {
  projects: Project[];
  onCardClick: (project: Project) => void;
}

const PROJECTS_PER_PAGE = 20;

const Portfolio = React.forwardRef<HTMLElement, PortfolioProps>(({ projects, onCardClick }, ref) => {
  const titleRef = React.useRef<HTMLDivElement>(null);
  const isTitleVisible = useIntersectionObserver(titleRef, { threshold: 0.1 });

  const filters = ['Tất cả', 'Long Châu', 'Fremed', 'Dự án ngẫu nhiên'];
  const [activeFilter, setActiveFilter] = useState('Tất cả');
  const [visibleCount, setVisibleCount] = useState(PROJECTS_PER_PAGE);

  const filteredProjects = activeFilter === 'Tất cả'
    ? projects
    : projects.filter(project => project.filterCategory === activeFilter);
    
  useEffect(() => {
    setVisibleCount(PROJECTS_PER_PAGE);
  }, [activeFilter]);

  const projectsToShow = filteredProjects.slice(0, visibleCount);

  return (
    <section id="portfolio" ref={ref} className="py-20 sm:py-32 bg-light-bg">
      <div className="container mx-auto px-6">
        <div 
          ref={titleRef} 
          className={`text-center mb-12 scroll-animate scroll-animate-up ${isTitleVisible ? 'is-visible' : ''}`}
        >
          <h2 className="text-3xl sm:text-4xl font-black text-light-text">Thư Viện Ảnh</h2>
          <p className="text-base text-light-text-secondary mt-2">Một số tác phẩm tiêu biểu của tôi.</p>
        </div>

        <div className={`flex justify-center flex-wrap gap-x-4 gap-y-2 mb-12 scroll-animate scroll-animate-up ${isTitleVisible ? 'is-visible' : ''}`}>
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 text-sm font-semibold rounded-full transition-all duration-300 transform hover:scale-105 ${
                activeFilter === filter
                  ? 'bg-brand-primary text-white shadow-lg shadow-brand-primary/30'
                  : 'bg-light-card text-light-text-secondary hover:bg-gray-200 hover:text-light-text shadow-sm'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div key={activeFilter} className="columns-2 sm:columns-3 lg:columns-4 xl:columns-5 gap-4 animate-fade-in">
          {projectsToShow.map((project) => (
            <PortfolioCard 
              key={project.id} 
              project={project} 
              onClick={() => onCardClick(project)}
            />
          ))}
        </div>
        
        {visibleCount < filteredProjects.length && (
          <div className="text-center mt-12">
            <button
              onClick={() => setVisibleCount(prev => prev + PROJECTS_PER_PAGE)}
              className="bg-brand-primary text-white font-bold py-3 px-8 rounded-full hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-brand-primary/40"
            >
              Tải Thêm
            </button>
          </div>
        )}
      </div>
    </section>
  );
});

export default Portfolio;