import { useLoaderData } from '@remix-run/react';
import { getGuitars } from '@/services/guitars.server';
import GuitarsList from '@/components/GuitarsList';
import { GuitarProperties } from './interfaces';

export const meta = () => {
  return {
    title: 'GuitarLA - Tienda',
  };
};

export const loader = async () => {
  const { data } = await getGuitars();

  return data;
};

const Tienda = () => {
  const guitars = useLoaderData() as unknown as GuitarProperties[];

  return (
    <>
      <h2 className='heading'>Nuestra colección</h2>
      {guitars.length > 0 && <GuitarsList guitars={guitars} />}
    </>
  );
};

export default Tienda;
