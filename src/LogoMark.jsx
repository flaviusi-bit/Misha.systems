import React from 'react';

const LOGO_URL = 'https://raw.githubusercontent.com/flaviusi-bit/Misha.systems/54d7183c22440ad060dda46abe4a733f7499d4b4/src/misha-logo.svg';

export default function LogoMark(){
  return <img
    className="misha-logo-mark"
    src={LOGO_URL}
    alt="MISHA Systems"
  />;
}
