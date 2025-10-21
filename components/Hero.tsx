import React, { useState, useEffect } from 'react';
import { ScrollDownIcon } from './icons';

const Hero: React.FC = () => {
  const name = "Trương Nhựt Khương";
  const initialTickerItems = [
    'Thiết kế chỉ từ 200k',
    'Hơn 2 năm kinh nghiệm làm việc',
    'Cộng tác viên FPT Long Châu',
    'Hơn 50+ khách hàng',
    'Zalo: 0399033804'
  ];

  const [tickerItems, setTickerItems] = useState(initialTickerItems);

  useEffect(() => {
    // Shuffle the array on component mount
    const shuffled = [...initialTickerItems].sort(() => Math.random() - 0.5);
    setTickerItems(shuffled);
  }, []);
  
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-light-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-primary rounded-full filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-brand-secondary rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      
        <div className="container mx-auto px-6 text-center relative z-10">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-light-text mb-4 leading-tight">
              {name.split("").map((char, index) => (
                <span key={index} className="inline-block overflow-hidden">
                  <span className="inline-block animate-reveal-text" style={{ animationDelay: `${index * 50}ms` }}>
                    {char === " " ? "\u00A0" : char}
                  </span>
                </span>
              ))}
            </h1>
            <p className="text-xl md:text-2xl text-light-text-secondary max-w-3xl mx-auto mb-8 tracking-wider animate-fade-in-blur" style={{animationDelay: '1000ms'}}>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary font-bold">GRAPHIC DESIGNER</span>
            </p>
            <p className="text-base md:text-lg text-light-text-secondary max-w-3xl mx-auto mb-8 animate-fade-in-blur" style={{animationDelay: '1200ms'}}>
                Với hơn 2 năm kinh nghiệm, tôi chuyên tạo ra các giải pháp đẹp mắt và hiệu quả, giúp kết nối với khán giả và nâng tầm thương hiệu.
            </p>
            <div className="animate-fade-in-blur" style={{animationDelay: '1400ms'}}>
              <a href="#portfolio" className="bg-brand-primary text-white font-bold py-3 px-8 rounded-full hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-brand-primary/40">
                  Xem Dự Án Của Tôi
              </a>
            </div>
        </div>

        <div className="absolute bottom-24 left-0 w-full overflow-hidden bg-white/10 backdrop-blur-sm py-3 z-10 animate-fade-in-blur" style={{animationDelay: '1600ms'}}>
            <div className="flex animate-marquee-infinite">
              {[...tickerItems, ...tickerItems].map((item, index) => (
                <div key={index} className="flex items-center shrink-0 mx-6">
                  <span className="text-sm font-medium text-light-text whitespace-nowrap">{item}</span>
                  <span className="mx-6 text-brand-secondary font-black text-xl">&bull;</span>
                </div>
              ))}
            </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-fade-in-blur" style={{animationDelay: '1800ms'}}>
            <a href="#portfolio" aria-label="Scroll to portfolio">
                <ScrollDownIcon className="w-8 h-8 text-light-text-secondary animate-bounce"/>
            </a>
        </div>

        <style>
          {`
            .bg-grid-pattern {
                background-image: linear-gradient(to right, rgba(17, 24, 39, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(17, 24, 39, 0.03) 1px, transparent 1px);
                background-size: 4rem 4rem;
            }
            .animate-blob {
                animation: blob 10s infinite;
            }
            .animation-delay-2000 {
                animation-delay: -5s;
            }
            @keyframes blob {
                0% { transform: translate(0px, 0px) scale(1); }
                33% { transform: translate(30px, -50px) scale(1.1); }
                66% { transform: translate(-20px, 20px) scale(0.9); }
                100% { transform: translate(0px, 0px) scale(1); }
            }
            @keyframes fadeInBlur {
                0% { opacity: 0; filter: blur(5px); }
                100% { opacity: 1; filter: blur(0); }
            }
            .animate-fade-in-blur {
                animation: fadeInBlur 0.8s ease-out forwards;
                opacity: 0;
            }
             @keyframes marquee-infinite {
                0% { transform: translateX(0%); }
                100% { transform: translateX(-50%); }
            }
            .animate-marquee-infinite {
                animation: marquee-infinite 30s linear infinite;
            }
          `}
        </style>
    </section>
  );
};

export default Hero;