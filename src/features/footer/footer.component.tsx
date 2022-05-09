import React from 'react';
import './index.css';
const Footer = () => {
  const linkLogoGithub = 'https://www.svgrepo.com/show/359980/github.svg';
  const linkGithubPages = [
    'https://github.com/Dmitriy-hello-world',
    'https://github.com/Evgeniy37529',
    'https://github.com/DariaMalina'
  ];
  return (
    <footer className="footer">
      {linkGithubPages.map((el) => {
        return (
          <a href={el} key={el}>
            <img src={linkLogoGithub} alt="logo" className="footer-icon" />
          </a>
        );
      })}
    </footer>
  );
};
export default Footer;
