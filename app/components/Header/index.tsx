import { Link } from '@remix-run/react';
import Navigation from '../Navigation';

const Header = () => {
  return (
    <header className='header'>
      <div className='container bar'>
        <Link to='/' className='logo'>
          <img src='/img/logo.svg' alt='logo.svg' />
        </Link>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
