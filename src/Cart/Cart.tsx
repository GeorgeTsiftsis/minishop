import CartItem from "../CartItem/CartItem";
//Styles
import { Wrapper } from "./Cart.styles";
//Types
import { CartItemType } from "../Types";

type Props = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {
  const calculateTotal = (items: CartItemType[]) =>
    items.reduce((acc: number, item) => acc + item.amount * item.price, 0);

  return (
    <Wrapper>
      <h1 className="text-xl font-bold font-manrope">Shopping Cart </h1>
      {cartItems.length === 0 ? (
        <p> No Items in cart please Add Some </p>
      ) : null}
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
      <h1>Total: ${calculateTotal(cartItems).toFixed(2)}</h1>
    </Wrapper>
  );
};

export default Cart;
