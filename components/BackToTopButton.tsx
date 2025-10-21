import React, { useState, useEffect } from 'react';
import { ArrowUpIcon } from './icons';

const BackToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-8 left-8 z-40">
      <button
        type="button"
        onClick={scrollToTop}
        className={`
          w-12 h-12 bg-brand-primary text-white rounded-full shadow-lg hover:bg-orange-600 
          transition-all duration-300 transform hover:scale-110 
          flex items-center justify-center
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}
        `}
        aria-label="Go to top"
      >
        <ArrowUpIcon className="h-6 w-6" />
      </button>
    </div>
  );
};

export default BackToTopButton;
