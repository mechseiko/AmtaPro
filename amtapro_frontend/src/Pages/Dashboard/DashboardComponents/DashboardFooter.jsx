import React from 'react';
import {legalLinks} from '../assets/dashboardLinks'
import { Link } from 'react-router-dom';

const Footer = () => {
  const date = new Date();

  return (
    <footer className="bg-foreground xl:pb-4 pb-7 pt-3 text-center text-white">
      {
        date.getFullYear() === 2025 ?
          <h3>Copyright © AmtaPro 2025. All rights reserved.</h3>
          :
          <h3>Copyright © AmtaPro 2025–{date.getFullYear()}. All rights reserved.</h3>
      }
      <div className="mt-2 space-x-4">
        <Link to={legalLinks.find(link => link.to === "/terms-of-service").to} className="underline">Terms of Service</Link>
        <Link to={legalLinks.find(link => link.to === "/privacy-policy").to} className="underline">Privacy Policy</Link>
      </div>
    </footer>
  );
};

export default Footer;
