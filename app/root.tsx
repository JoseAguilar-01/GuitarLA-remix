import { MetaFunction } from '@remix-run/node';
import {
  Meta,
  Links,
  Outlet,
  Scripts,
  LiveReload,
  useCatch,
  Link,
} from '@remix-run/react';
import { useEffect, useState } from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';
import styles from 'styles/index.css';
import { Cart, CartItem } from './utils/types';

export const meta: MetaFunction = () => {
  return {
    charset: 'utf-8',
    title: 'GuitarLA - Remix',
    viewport: 'width=device-width, initial-scale=1',
  };
};

export const links = () => {
  return [
    {
      rel: 'stylesheet',
      href: 'https://necolas.github.io/normalize.css/8.0.1/normalize.css',
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com',
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossOrigin: 'true',
    },
    {
      href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap',
      rel: 'stylesheet',
    },
    {
      rel: 'stylesheet',
      href: styles,
    },
  ];
};

const App = (props: any) => {
  const [cart, setCart] = useState<Cart>([]);

  useEffect(() => {
    const cartLS = JSON.parse(localStorage.getItem('CART') ?? '[]');
    setCart(cartLS);
  }, []);

  const addCartItem = (item: CartItem) => {
    const cartFiltered = cart.filter(data => data.id !== item.id);

    const newCart = [...cartFiltered, item];

    setCart(newCart);
    localStorage.setItem('CART', JSON.stringify(newCart));
  };

  const deleteCartItem = (itemId: number) => {
    const newCart = cart.filter(data => data.id !== itemId);

    setCart(newCart);
    localStorage.setItem('CART', JSON.stringify(newCart));
  };

  const updateCartItem = (item: CartItem) => {
    const newCart = cart.map(cartItem =>
      cartItem.id === item.id ? { ...cartItem, amount: item.amount } : cartItem
    );

    setCart(newCart);
    localStorage.setItem('CART', JSON.stringify(newCart));
  };

  const { children } = props;

  return (
    <html lang='es'>
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <div id='root'>
          <Header />
          {children}
          <Outlet
            context={{
              addCartItem,
              deleteCartItem,
              updateCartItem,
              cart,
              setCart,
            }}
          />
          <Footer />
        </div>
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
};

export const CatchBoundary = () => {
  const error = useCatch();

  return (
    <App>
      <div className='container_error'>
        <p className='error'>
          {error.status} {error.statusText}
        </p>
        <Link className='error_link' to='/'>
          Tal vez quieras volver a Inicio
        </Link>
      </div>
    </App>
  );
};

export const ErrorBoundary = (props: any) => {
  const { error } = props;

  return (
    <App>
      <div className='container_error'>
        <p className='error'>
          {error.status} {error.statusText}
        </p>
        <Link className='error_link' to='/'>
          Tal vez quieras volver a Inicio
        </Link>
      </div>
    </App>
  );
};

export default App;
