import { NavLink } from 'react-router-dom';

import logoimg from '@/assets/images/background/logo.jpg';

function Logo() {
  return (
    <NavLink to="/" className="no-underline custom-logo-link" rel="home">
      <img width="90" height="16" src={logoimg}/>
    </NavLink>
  );
}

export default Logo;
