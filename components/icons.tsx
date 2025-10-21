import React from 'react';

export const CloseIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export const DribbbleIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M12 24c-6.627 0-12-5.373-12-12s5.373-12 12-12c6.627 0 12 5.373 12 12s-5.373 12-12 12zm-2.4-15.6c.73-1.624 2.87-2.825 5.09-3.197-.478 1.93-1.574 3.638-3.05 4.862-1.28-1.06-2.04-1.66-2.04-1.665zm-3.92 2.62c.42 1.83 1.85 3.32 3.66 4.31.2-.3.42-.6.64-.9-1.84-1.04-3.04-2.6-3.8-4.22-.16-.03-.32-.06-.5-.09zm8.12 9.27c-1.53.84-3.32 1.43-5.26 1.56.97-1.48 1.6-3.26 1.82-5.16 2.06.18 3.86 1.25 4.82 2.83.08.17.16.34.22.51-.2.09-.38.19-.6.26zm4.8-1.92c-.54-2.4-2.2-4.52-4.38-5.92 2.02 1.2 3.42 3.2 4.1 5.42.09.28.18.55.28.81v-.31zm-10.45 2.15c-2.42-.92-4.3-2.9-5.32-5.32.96.06 1.92.12 2.86.18 1.02 2.22 2.86 4.02 5.16 4.82-.96.12-1.94.2-2.7.32z"/>
    </svg>
);

export const LinkedInIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
);

export const BehanceIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M22 6h-5v-1h5v1zm-6.5 4h-4c.33 1.68.32 4.32 0 6h4v-1.6c.94.94 1.5 2 1.5 3.1 0 2.2-1.8 4-4 4s-4-1.8-4-4c0-1.98 1.39-3.64 3.25-3.95.17-.03.25.18.11.29-.16.14-1.36.96-1.36 2.16 0 1.1.9 2 2 2s2-.9 2-2c0-.55-.22-1.05-.59-1.41l.09-.09h-3.5v-1h3.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5zm-5.5-2h-5v1h5v-1zm14.5-8h-24v24h24v-24zm-2 22h-20v-20h20v20z"/>
    </svg>
);

export const SocialIcon: React.FC<{ href: string, children: React.ReactNode }> = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-light-text-secondary hover:text-brand-primary transition-colors">
    {children}
  </a>
);

export const ChatIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
);

export const PhoneIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
);

export const MessengerIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.373 0 0 4.974 0 11.111c0 3.494 1.763 6.596 4.456 8.534v4.355l3.858-2.182c1.17.332 2.41.51 3.686.51 6.627 0 12-4.974 12-11.11S18.627 0 12 0zm1.213 14.888l-2.04-2.28-4.957 2.28L11.173 9.12l2.04 2.28 4.957-2.28-4.957 5.768z" />
    </svg>
);

export const ZaloIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 512 512" fill="currentColor">
        <path d="M394.9,331.4c-2.4-2.4-5.8-3.5-9.1-3.5h-26.1c-2.8,0-5.5,1.1-7.5,3.1c-1.9,1.9-2.8,4.5-2.6,7.1c0,1.3,0.3,2.6,0.8,3.8 c1.2,3.1,1.9,6.4,1.9,9.8c0,15.1-6.1,28.8-16.1,38.8c-10,10-23.7,16.1-38.8,16.1c-14.8,0-28.3-5.9-38.2-15.6 c-9.8-9.6-15.8-22.8-15.8-37.3c0-4.4,0.7-8.8,2.1-13c0.6-2,0.4-4.2-0.7-6c-1.1-1.8-3-3-5.1-3h-25.2c-3.4,0-6.7,1.3-9.1,3.5 c-2.4,2.4-3.5,5.8-3.5,9.1v15.9c0,21.8,8.8,41.5,23,55.7c14.2,14.2,33.9,23,55.7,23c21.8,0,41.5-8.8,55.7-23 c14.2-14.2,23-33.9,23-55.7V340.5C398.4,337.2,397.3,333.8,394.9,331.4z M214.5,235.6h-26.6c-3.4,0-6.7,1.3-9.1,3.5 c-2.4,2.4-3.5,5.8-3.5,9.1v16.4c0,3.4,1.3,6.7,3.5,9.1c2.4,2.4,5.8,3.5,9.1,3.5h26.6c3.4,0,6.7-1.3,9.1-3.5 c2.4-2.4,3.5-5.8,3.5-9.1v-16.4c0-3.4-1.3-6.7-3.5-9.1C221.2,236.9,217.9,235.6,214.5,235.6z M275.6,183.1h26.1 c3.4,0,6.7-1.3,9.1-3.5c2.4-2.4,3.5-5.8,3.5-9.1v-15.9c0-21.8-8.8-41.5-23-55.7c-14.2-14.2-33.9-23-55.7-23 c-21.8,0-41.5,8.8-55.7,23c-14.2,14.2-23,33.9-23,55.7v15.9c0,3.4,1.3,6.7,3.5,9.1c2.4,2.4,5.8,3.5,9.1,3.5h25.2 c2.1,0,4-1.2,5.1-3c1.1-1.8,1.3-4,0.7-6c-1.4-4.2-2.1-8.6-2.1-13c0-14.5,5.9-27.7,15.8-37.3c9.9-9.8,23.4-15.6,38.2-15.6 c15.1,0,28.8,6.1,38.8,16.1c10,10,16.1,23.7,16.1,38.8c0,3.4-0.7,6.7-1.9,9.8c-0.5,1.2-0.8,2.5-0.8,3.8 C273,178.6,273.9,181.2,275.6,183.1z M512,256c0,141.4-114.6,256-256,256S0,397.4,0,256S114.6,0,256,0S512,114.6,512,256z"/>
    </svg>
);


export const MailIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);

export const ScrollDownIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
  </svg>
);

export const ArrowUpIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 19V5m0 0l-7 7m7-7l7 7" />
  </svg>
);