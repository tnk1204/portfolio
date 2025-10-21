import React from 'react';
import { SocialIcon, BehanceIcon } from './icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-light-card py-10 border-t border-gray-200">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-4 md:mb-0">
            <p className="font-semibold text-light-text">&copy; {new Date().getFullYear()} Trương Nhựt Khương</p>
            <p className="text-sm text-light-text-secondary">Bảo lưu mọi quyền.</p>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <div className="flex justify-center space-x-6 mb-2">
              <SocialIcon href="https://behance.net/imteaak">
                <BehanceIcon />
              </SocialIcon>
            </div>
            <p className="text-sm text-light-text-secondary">Địa chỉ: Lê Văn Lương, Phước Kiển, Nhà Bè, Tp. Hồ Chí Minh</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;