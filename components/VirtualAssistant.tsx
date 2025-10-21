import React, { useState, useEffect, RefObject } from 'react';
import { useIntersectionObserver } from '../hooks';

interface VirtualAssistantProps {
  portfolioRef: RefObject<HTMLElement>;
  aboutRef: RefObject<HTMLElement>;
  contactRef: RefObject<HTMLElement>;
}

const messages = {
  welcome: "Xin chào! Chào mừng đến với portfolio của Khương!",
  portfolio: "Đây là những dự án tâm đắc nhất của Khương. Hãy xem qua nhé!",
  about: "Để tôi kể bạn nghe thêm về Khương nhé!",
  contact: "Đừng ngần ngại, hãy gửi lời chào!",
};

const VirtualAssistant: React.FC<VirtualAssistantProps> = ({ portfolioRef, aboutRef, contactRef }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState(messages.welcome);
  const [isChatVisible, setIsChatVisible] = useState(false);

  const isPortfolioVisible = useIntersectionObserver(portfolioRef, { threshold: 0.2, rootMargin: "-50% 0px -50% 0px" });
  const isAboutVisible = useIntersectionObserver(aboutRef, { threshold: 0.2, rootMargin: "-50% 0px -50% 0px" });
  const isContactVisible = useIntersectionObserver(contactRef, { threshold: 0.2, rootMargin: "-50% 0px -50% 0px" });

  // Initial appearance
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      setIsChatVisible(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Contextual messages
  useEffect(() => {
    let newMessage = messages.welcome;
    let shouldShowChat = true;

    if (isContactVisible) {
      newMessage = messages.contact;
    } else if (isAboutVisible) {
      newMessage = messages.about;
    } else if (isPortfolioVisible) {
      newMessage = messages.portfolio;
    } else {
        // When no specific section is in the middle of the screen,
        // hide the bubble after a while
        const timer = setTimeout(() => setIsChatVisible(false), 5000);
        return () => clearTimeout(timer);
    }
    
    if (message !== newMessage) {
        setIsChatVisible(false);
        setTimeout(() => {
            setMessage(newMessage);
            setIsChatVisible(true);
        }, 300);
    }

  }, [isPortfolioVisible, isAboutVisible, isContactVisible]);


  return (
    <div 
        className="virtual-assistant"
        style={{ transform: `translateX(${isVisible ? '0%' : '200%'})` }}
    >
      <div className={`chat-bubble ${isChatVisible ? 'visible' : ''}`}>
        <p className="text-sm text-light-text-secondary">{message}</p>
      </div>
      <img
        src="https://storage.googleapis.com/aistudio-bucket/projects/ea9a2325-7569-4e1b-974a-4c28c313271a/assets/k-bot.png"
        alt="K-Bot Virtual Assistant"
        className="k-bot-character"
        onClick={() => setIsChatVisible(prev => !prev)}
      />
    </div>
  );
};

export default VirtualAssistant;