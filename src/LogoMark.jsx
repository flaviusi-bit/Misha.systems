import React from 'react';
import approvedLogo from './misha-logo.svg';

export default function LogoMark(){
  return (
    <img
      className="misha-logo-mark"
      src={approvedLogo}
      alt="MISHA Systems"
      draggable="false"
    />
  );
}
