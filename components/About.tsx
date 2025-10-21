import React, { useRef } from 'react';
import { useIntersectionObserver } from '../hooks';

const softwareSkills = [
  'Photoshop', 'Illustrator', 'Indesign', 'Substance',
  'Midjourney', 'Figma', 'Wordpress'
];

const strengths = [
  'Chủ động cập nhật xu hướng thiết kế, công nghệ mới.',
  'Khả năng sắp xếp công việc, đảm bảo deadline.',
  'Thái độ tích cực, học hỏi nhanh.'
];

const experiences = [
    {
        company: "CÔNG TY CỔ PHẦN DƯỢC PHẨM FPT LONG CHÂU",
        role: "Cộng tác viên Graphic Design",
        period: "2024 - nay",
        tasks: [
            "Tham gia thiết kế hơn 50+ infographic cho website của công ty.",
            "Thiết kế ấn phẩm truyền thông cho Marketing (banner popup, Facebook post, giao diện website…)."
        ]
    },
    {
        company: "MALLARD AGENCY",
        role: "Cộng tác viên Graphic Design",
        period: "2024 - nay",
        tasks: [
            "Thiết kế tài liệu quảng cáo sản phẩm và thương hiệu (leaflet, brochure, poster, catalogue…).",
            "Thiết kế trưng bày và trang trí không gian theo guidelines thương hiệu (quầy bục, tủ, bảng hiệu…)."
        ]
    },
    {
        company: "CÔNG TY CỔ PHẦN DƯỢC PHẨM FREMED",
        role: "Graphic Designer",
        period: "2022 - 2025",
        tasks: [
            "Thiết kế các ấn phẩm như tờ rơi, phướn tuyến đường, banner cửa hàng, POSM…",
            "Thiết kế ấn phẩm cho event công ty và chụp ảnh sản phẩm.",
            "Lên ý tưởng và xây dựng bộ nhận diện thương hiệu Fremed.",
            "Phối hợp với bộ phận branding và Marketing để đảm bảo thiết kế hiệu quả."
        ]
    }
];

// Sub-component for individual experience items to handle their own animations
const ExperienceItem: React.FC<{ exp: typeof experiences[0]; index: number }> = ({ exp }) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(itemRef, { threshold: 0.4, triggerOnce: true });

  return (
    <div
      ref={itemRef}
      className={`relative pl-8 scroll-animate scroll-animate-up ${isVisible ? 'is-visible' : ''}`}
    >
      <div className={`absolute -left-[39px] top-1 h-4 w-4 rounded-full bg-brand-primary border-4 border-light-card ring-4 ring-brand-primary/20 transition-transform duration-500 ${isVisible ? 'scale-100' : 'scale-0'}`} style={{ transitionDelay: `200ms` }}></div>
      <p className="text-sm font-semibold text-brand-primary">{exp.period}</p>
      <h4 className="text-lg font-bold text-light-text mt-1">{exp.role}</h4>
      <p className="text-light-text-secondary mb-3">{exp.company}</p>
      <ul className="list-disc list-inside space-y-1 text-light-text-secondary pl-2">
        {exp.tasks.map((task, i) => <li key={i}>{task}</li>)}
      </ul>
    </div>
  );
};


const About = React.forwardRef<HTMLElement>((props, ref) => {
  const leftColRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const isLeftVisible = useIntersectionObserver(leftColRef, { threshold: 0.1, triggerOnce: true });
  const isTimelineVisible = useIntersectionObserver(timelineRef, { threshold: 0.2, triggerOnce: true });

  return (
    <section id="about" ref={ref} className="py-20 sm:py-32 bg-light-card overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
          {/* Left Column: Profile & Info */}
          <div 
            ref={leftColRef}
            className={`lg:col-span-2 space-y-8 scroll-animate scroll-animate-left ${isLeftVisible ? 'is-visible' : ''}`}
          >
            <div className="group rounded-xl overflow-hidden shadow-2xl shadow-brand-primary/10 relative">
              <img 
                src="https://i.postimg.cc/cCM4h1J0/IMG-0052.jpg" 
                alt="Trương Nhựt Khương, Graphic Designer" 
                className="w-full transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <h3 className="text-2xl font-bold text-white tracking-tight">Trương Nhựt Khương</h3>
                <p className="text-white/90">Graphic Designer</p>
              </div>
            </div>
            
            <div className="p-6 bg-white rounded-xl shadow-lg shadow-gray-500/5">
              <h3 className="text-xl font-bold text-light-text mb-4">Học Vấn</h3>
              <p className="font-semibold text-light-text">ARENA MULTIMEDIA</p>
              <p className="text-light-text-secondary">Hoàn thành khoá học 2D Design, Web Design, nhiếp ảnh cơ bản.</p>
            </div>
            
            <div className="p-6 bg-white rounded-xl shadow-lg shadow-gray-500/5">
              <h3 className="text-xl font-bold text-light-text mb-4">Phần Mềm</h3>
              <div className="flex flex-wrap gap-3">
                {softwareSkills.map((skill, index) => (
                   <span 
                      key={skill} 
                      className="bg-amber-100 text-amber-800 text-sm font-medium px-4 py-2 rounded-full transition-all duration-300 opacity-0 translate-y-2"
                      style={isLeftVisible ? { transitionDelay: `${index * 50}ms`, opacity: 1, transform: 'translateY(0)' } : {}}
                    >
                      {skill}
                    </span>
                ))}
              </div>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-lg shadow-gray-500/5">
              <h3 className="text-xl font-bold text-light-text mb-4">Ưu Điểm</h3>
              <ul className="list-disc list-inside space-y-2 text-light-text-secondary pl-2">
                {strengths.map(strength => <li key={strength}>{strength}</li>)}
              </ul>
            </div>
          </div>
          
          {/* Right Column: Intro & Experience */}
          <div className="lg:col-span-3">
            <div className={`scroll-animate scroll-animate-up ${isLeftVisible ? 'is-visible' : ''}`} style={{transitionDelay: '200ms'}}>
              <h2 className="text-3xl sm:text-4xl font-black text-light-text mb-4">Đôi Lời Giới Thiệu</h2>
              <p className="text-light-text-secondary mb-12 text-base leading-relaxed">
                Tôi là Khương, sinh năm 2001. Với hơn 2 năm kinh nghiệm thiết kế đồ họa và thành thạo Adobe Creative Suite, tôi đã thực hiện nhiều dự án thương hiệu, truyền thông cũng như các ấn phẩm nội bộ. Tôi tin kinh nghiệm làm việc, khả năng sáng tạo và bắt trend nhanh của tôi sẽ giúp đạt được hiệu quả cao trong thiết kế của công ty, doanh nghiệp.
              </p>
            </div>

            <div className={`scroll-animate scroll-animate-up ${isLeftVisible ? 'is-visible' : ''}`} style={{transitionDelay: '300ms'}}>
              <h2 className="text-3xl sm:text-4xl font-black text-light-text mb-8">Kinh Nghiệm Làm Việc</h2>
            </div>
            <div ref={timelineRef} className="relative border-l-2 border-gray-200/80">
                <div className={`absolute top-0 bottom-0 left-[-1px] w-0.5 bg-brand-primary transition-transform duration-1000 ease-out ${isTimelineVisible ? 'scale-y-100' : 'scale-y-0'}`} style={{ transformOrigin: 'top' }}></div>
                <div className="space-y-12">
                  {experiences.map((exp, index) => (
                      <ExperienceItem key={index} exp={exp} index={index} />
                  ))}
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default About;