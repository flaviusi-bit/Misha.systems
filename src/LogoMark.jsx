import React from 'react';
import logo from '../public/misha-logo.png';

export default function LogoMark(){
  return (
    <img
      className="misha-logo-mark"
      src={logo}
      alt="MISHA Systems"
      draggable="false"
    />
  );
}
