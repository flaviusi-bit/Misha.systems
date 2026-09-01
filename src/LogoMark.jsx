import React from 'react';

const APPROVED_LOGO_URL = 'https://raw.githubusercontent.com/flaviusi-bit/Misha.systems/f2870790cc626400ac0bb46981749161fcc8431e/src/misha-logo.svg';

export default function LogoMark(){
  return (
    <img
      className="misha-logo-mark"
      src={APPROVED_LOGO_URL}
      alt="MISHA Systems"
      draggable="false"
    />
  );
}
