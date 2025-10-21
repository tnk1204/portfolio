import React, { useState, useRef } from 'react';
import { MailIcon, PhoneIcon } from './icons';
import { useIntersectionObserver } from '../hooks';

const Contact = React.forwardRef<HTMLElement>((props, ref) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const contentRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(contentRef, { threshold: 0.2 });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would handle form submission here (e.g., API call)
    alert('Cảm ơn bạn đã gửi tin nhắn! Tôi sẽ liên hệ lại với bạn sớm nhất có thể.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" ref={ref} className="py-20 sm:py-32 bg-light-bg">
      <div className="container mx-auto px-6 text-center">
        <div 
          ref={contentRef}
          className={`max-w-3xl mx-auto scroll-animate scroll-animate-up ${isVisible ? 'is-visible' : ''}`}
        >
          <h2 className="text-3xl sm:text-4xl font-black text-light-text mb-4">Cùng Nhau Sáng Tạo</h2>
          <p className="text-base text-light-text-secondary mb-10">
            Bạn có dự án nào muốn thực hiện hay chỉ đơn giản là muốn gửi lời chào? Hãy liên hệ với tôi qua form bên dưới hoặc thông tin liên lạc trực tiếp.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-12 mb-12 text-left">
            <div className="flex items-center gap-4">
               <div className="bg-brand-primary/10 p-3 rounded-full">
                <PhoneIcon className="h-6 w-6 text-brand-primary" />
               </div>
               <div>
                 <h4 className="font-semibold text-light-text">Số điện thoại</h4>
                 <a href="tel:0399033804" className="text-light-text-secondary hover:text-brand-primary">0399 033 804</a>
               </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-brand-primary/10 p-3 rounded-full">
                <MailIcon className="h-6 w-6 text-brand-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-light-text">Email</h4>
                <a href="mailto:imteaak@gmail.com" className="text-light-text-secondary hover:text-brand-primary">imteaak@gmail.com</a>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input 
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Tên Của Bạn"
                required
                className="w-full bg-light-card border border-gray-200 rounded-lg py-3 px-4 text-light-text placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-primary transition-all"
              />
              <input 
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Của Bạn"
                required
                className="w-full bg-light-card border border-gray-200 rounded-lg py-3 px-4 text-light-text placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-primary transition-all"
              />
            </div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Nội Dung Tin Nhắn"
              rows={5}
              required
              className="w-full bg-light-card border border-gray-200 rounded-lg py-3 px-4 text-light-text placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-primary transition-all"
            ></textarea>
            <button 
              type="submit" 
              className="bg-brand-primary text-white font-bold py-3 px-8 rounded-full hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-brand-primary/40"
            >
              Gửi Tin Nhắn
            </button>
          </form>
        </div>
      </div>
    </section>
  );
});

export default Contact;