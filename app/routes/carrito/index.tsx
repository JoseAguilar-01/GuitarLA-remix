import { useOutletContext } from '@remix-run/react';
import { CartItem, ContextProps } from '@/utils/types';
import styles from 'styles/carrito.css';

export const meta = () => {
  return {
    title: 'GuitarLA - Carrito de compras',
  };
};

export const links = () => {
  return [
    {
      rel: 'stylesheet',
      href: styles,
    },
  ];
};

const Cart = () => {
  const { cart, updateCartItem, deleteCartItem } =
    useOutletContext<ContextProps>();

  const handleChange = (item: CartItem) => {
    updateCartItem(item);
  };

  const handleDeleteItem = (itemId: number) => {
    deleteCartItem(itemId);
  };

  const totalCost = cart.reduce(
    (acum, curr) => acum + curr.amount * curr.price,
    0
  );

  return (
    <main className='container'>
      <h1 className='heading'>Carrito de compras</h1>

      <div className='content'>
        <div className='cart'>
          <h2>Artículos</h2>

          {cart.length === 0
            ? 'Carrito Vacío'
            : cart.map(cartItem => (
                <div key={cartItem.id} className='cart-item'>
                  <img src={cartItem.image} alt={`cartItem-${cartItem.name}`} />

                  <div>
                    <p className='name'>{cartItem.name}</p>
                    <div className='amount'>
                      <p>Cantidad:</p>
                      <select
                        id='cantidad'
                        name='cantidad'
                        className='select'
                        onChange={e => {
                          const item = {
                            ...cartItem,
                            amount: Number(e.target.value),
                          };

                          handleChange(item);
                        }}
                        defaultValue={String(cartItem?.amount)}
                      >
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                      </select>
                    </div>
                    <div>
                      <p className='price'>
                        $ <span>{cartItem.price}</span>
                      </p>
                    </div>
                    <p className='subtotal'>
                      Subtotal: ${' '}
                      <span>{cartItem.price * cartItem.amount}</span>
                    </p>
                  </div>
                  <button
                    type='button'
                    className='button-delete'
                    onClick={() => {
                      handleDeleteItem(cartItem.id);
                    }}
                  >
                    X
                  </button>
                </div>
              ))}
        </div>

        <aside className='resume'>
          <h3>Resumen del pedido</h3>
          <p>
            Total a pagar: $ <span>{totalCost}</span>
          </p>
        </aside>
      </div>
    </main>
  );
};

export default Cart;
