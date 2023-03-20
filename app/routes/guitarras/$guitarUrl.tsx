import { LoaderArgs } from '@remix-run/node';
import { useLoaderData, useOutletContext } from 'react-router';
import { FormEventHandler, useState } from 'react';
import { getGuitarByUrl } from '@/services/guitars.server';
import { CartItem, ContextProps } from '@/utils/types';
import Advert from '@/components/Advert';
import { GuitarProperties } from './interfaces';

export const meta = (props: any) => {
  if (!props.data) {
    return {
      title: 'GuitarLA - Guitarra no encontrada',
    };
  }

  const { name } = props.data.attributes;

  return {
    title: `GuitarLA - ${name}`,
  };
};

export const loader = async (props: LoaderArgs) => {
  const { params } = props;

  const { data } = await getGuitarByUrl(params.guitarUrl as string);

  if (data.length === 0) {
    // eslint-disable-next-line @typescript-eslint/no-throw-literal
    throw new Response('', {
      status: 404,
      statusText: 'Guitarra no encontrada',
    });
  }

  return data[0];
};

const Product = () => {
  const [amount, setAmount] = useState(0);
  const [advert, setAdvert] = useState({
    message: '',
    error: false,
  });

  const { addCartItem, updateCartItem, cart } =
    useOutletContext<ContextProps>();

  const guitar = useLoaderData() as GuitarProperties;

  const { id } = guitar;
  const { name, description, image, price } = guitar.attributes;

  const imageUrl = image.data.attributes.formats.medium.url;

  const currentCartItem = cart.find(guitar => guitar.id === id);

  const handleSubmit: FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();

    if (amount === 0) {
      setAdvert({
        message: 'Por favor, indica una cantidad.',
        error: true,
      });
      setTimeout(() => {
        setAdvert({
          message: '',
          error: true,
        });
      }, 5000);
      return;
    }

    const guitarData: CartItem = {
      id,
      name,
      amount,
      image: imageUrl,
      price,
    };

    let advertMessage;

    if (currentCartItem?.id) {
      updateCartItem(guitarData);
      advertMessage = 'Pedido actualizado exitosamente';
    } else {
      addCartItem(guitarData);
      advertMessage = 'Pedido añadido al carrito';
    }

    setAdvert({ message: advertMessage, error: false });
    setTimeout(() => {
      setAdvert({
        message: '',
        error: true,
      });
    }, 5000);
  };

  return (
    <>
      {advert?.message && (
        <Advert message={advert.message} error={advert.error} />
      )}
      <div className='guitar'>
        <img className='image' src={imageUrl} alt={`guitar-${name}.jpg`} />

        <div className='content'>
          <h3>{name}</h3>
          <p className='text'>{description}</p>
          <p className='price'>${price}</p>

          <form className='form' onSubmit={handleSubmit}>
            <label htmlFor='cantidad'>Cantidad</label>

            <select
              id='cantidad'
              name='cantidad'
              onChange={e => {
                setAmount(Number(e.target.value));
              }}
              defaultValue={String(currentCartItem?.amount) ?? ''}
            >
              <option value='0'>-- Seleccione --</option>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
            </select>

            <input
              type='submit'
              value={
                currentCartItem?.amount
                  ? 'Actualizar pedido'
                  : 'Agregar al carrito'
              }
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Product;
