import * as React from 'react';
const LogoImage = require('../../assets/dezrez.png');

const styles = { height: 35 };

export default function Logo() {
  return (
    <a className="navbar-brand">
      <img style={ styles }
        src={ LogoImage }
        alt="Dezrez" />
    </a>
  );
}
