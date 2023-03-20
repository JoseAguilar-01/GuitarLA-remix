import { Link, useLocation } from '@remix-run/react';
import carrito from 'public/img/carrito.png';

const Navigation = () => {
  const { pathname } = useLocation();

  const activeLinkClassName = (url: string) => {
    if (pathname === url) {
      return 'active';
    }
    return '';
  };

  return (
    <nav className='navigation'>
      <Link to='/' className={activeLinkClassName('/')}>
        Inicio
      </Link>
      <Link to='/nosotros' className={activeLinkClassName('/nosotros')}>
        Nosotros
      </Link>
      <Link to='/guitarras' className={activeLinkClassName('/guitarras')}>
        Tienda
      </Link>
      <Link to='/blog' className={activeLinkClassName('/blog')}>
        Blog
      </Link>
      <Link to='/carrito' className={activeLinkClassName('/carrito')}>
        <img src={carrito} alt='carrito.png' />
      </Link>
    </nav>
  );
};

export default Navigation;
