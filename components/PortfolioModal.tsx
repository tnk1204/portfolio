import React from 'react';
import type { Project } from '../types';
import { CloseIcon } from './icons';

interface PortfolioModalProps {
  project: Project;
  onClose: () => void;
}

const PortfolioModal: React.FC<PortfolioModalProps> = ({ project, onClose }) => {
  return (
    <div 
      className="fixed inset-0 bg-black/80 backdrop-blur-lg flex items-center justify-center z-50 p-4 animate-fade-in"
      onClick={onClose}
    >
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors z-20"
          aria-label="Close image view"
        >
          <CloseIcon className="h-10 w-10" />
        </button>

        <div 
            className="relative max-w-5xl w-full max-h-[90vh] animate-fade-in-up flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
            onContextMenu={(e) => e.preventDefault()}
        >
            <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="block max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            />
        </div>
    </div>
  );
};

export default PortfolioModal;