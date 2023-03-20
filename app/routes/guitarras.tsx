import { Outlet, useOutletContext } from '@remix-run/react';
import styles from 'styles/guitarras.css';

export const links = () => {
  return [
    {
      rel: 'stylesheet',
      href: styles,
    },
  ];
};

const Guitars = () => {
  return (
    <main className='container'>
      <Outlet context={useOutletContext()} />
    </main>
  );
};

export default Guitars;
