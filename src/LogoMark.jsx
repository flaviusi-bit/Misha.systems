import React from 'react';
import approvedLogoSvg from './misha-logo.svg?raw';

// Keep the approved logo asset exactly as-is, but extract its embedded PNG
// and render that PNG directly. This avoids relying on the browser to decode
// the external SVG wrapper that was rendering as a broken image in deployment.
const approvedLogo = approvedLogoSvg.match(/data:image\/png;base64,[^"]+/)?.[0] || '';

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
