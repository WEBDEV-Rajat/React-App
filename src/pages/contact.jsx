import React from 'react'
import { GithubLogo, InstagramLogo, LinkedinLogo, Phone, WhatsappLogo } from 'phosphor-react';
import { Link } from 'react-router-dom';

export const Contact = () => {
  return (
    <div>
      <p><Link to= "/contact"><Phone size={32}/></Link>
          +91 9182184609</p>
      <Link to= "/contact"><WhatsappLogo size={32}/></Link>
      <Link to= "/contact"><InstagramLogo size={32}/></Link>
      <Link to= "/contact"><LinkedinLogo size={32}/></Link>
      <Link to= "/contact"><GithubLogo size={32}/></Link>

    </div>
  );
}

