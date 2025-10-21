import React, { useState, useRef } from 'react';
import type { Project } from '../types';
import { useIntersectionObserver } from '../hooks';

interface PortfolioCardProps {
  project: Project;
  onClick: () => void;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ project, onClick }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(cardRef, { threshold: 0.1, triggerOnce: true });
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      ref={cardRef}
      className={`group rounded-lg overflow-hidden cursor-pointer shadow-md hover:shadow-xl hover:shadow-brand-primary/20 transition-all duration-300 scroll-animate scroll-animate-up mb-4 [break-inside:avoid] ${!isLoaded ? 'animate-pulse bg-gray-200' : 'bg-white'} ${isVisible ? 'is-visible' : ''}`}
      onClick={onClick}
      role="button"
      onContextMenu={(e) => e.preventDefault()}
    >
      <img 
        src={project.imageUrl} 
        alt={project.title} 
        className={`w-full h-auto block transition-opacity duration-500 ease-in-out group-hover:scale-105 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
};

export default PortfolioCard;