import React from 'react';

const Footer = ({ isDarkMode }) => {
  return (
    <footer className={`py-4 ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="container mx-auto flex justify-center">
        <p className="text-center">
          Global payments
        </p>
      </div>
    </footer>
  );
};

export default Footer;
