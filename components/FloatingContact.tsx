import React, { useState } from 'react';
import { CloseIcon, ChatIcon, PhoneIcon, MessengerIcon, ZaloIcon } from './icons';

const FloatingContact: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const actions = [
        { 
            label: "Gọi điện", 
            icon: <PhoneIcon className="h-6 w-6" />, 
            href: "tel:0399033804",
            bg: 'bg-green-500 hover:bg-green-600'
        },
        { 
            label: "Facebook Messenger", 
            icon: <MessengerIcon className="h-6 w-6" />, 
            href: "https://www.facebook.com/share/19rei3qEQo/?mibextid=wwXIfr",
            bg: 'bg-blue-600 hover:bg-blue-700'
        },
        { 
            label: "Zalo", 
            icon: <ZaloIcon className="h-6 w-6" />, 
            href: "https://zalo.me/0399033804",
            bg: 'bg-blue-400 hover:bg-blue-500'
        },
    ];

    return (
        <div className="fixed bottom-8 right-8 z-40">
            <div className="relative flex flex-col items-center gap-3">
                {/* Mini FABs */}
                <div 
                    className="flex flex-col items-center gap-3"
                >
                    {actions.map((action, index) => (
                         <a
                            key={index}
                            href={action.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={action.label}
                            className={`w-12 h-12 rounded-full flex items-center justify-center text-white shadow-md transition-all duration-300 transform hover:scale-110 ${action.bg} ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 pointer-events-none'}`}
                             style={{ transitionDelay: `${isOpen ? index * 60 : (2-index) * 30}ms` }}
                        >
                            {action.icon}
                        </a>
                    ))}
                </div>

                {/* Main FAB */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="relative w-16 h-16 bg-brand-primary text-white rounded-full shadow-lg hover:bg-orange-600 transition-all duration-300 transform hover:scale-110 flex items-center justify-center overflow-hidden"
                    aria-label={isOpen ? "Đóng tùy chọn liên hệ" : "Mở tùy chọn liên hệ"}
                    aria-expanded={isOpen}
                >
                   <div className={`absolute transition-all duration-300 ${isOpen ? 'opacity-0 scale-50 -rotate-45' : 'opacity-100 scale-100 rotate-0'}`}>
                        <ChatIcon className="h-8 w-8" />
                   </div>
                   <div className={`absolute transition-all duration-300 ${isOpen ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-50 rotate-45'}`}>
                        <CloseIcon className="h-8 w-8" />
                   </div>
                </button>
            </div>
        </div>
    );
};

export default FloatingContact;