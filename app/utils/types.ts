export interface CartItem {
  id: number;
  name: string;
  amount: number;
  image: string;
  price: number;
}

export type Cart = CartItem[];

export interface ContextProps {
  addCartItem: (item: CartItem) => void;
  deleteCartItem: (id: number) => void;
  updateCartItem: (item: CartItem) => void;
  cart: Cart;
}
