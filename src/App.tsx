import { useState } from "react";
import { useQuery } from "react-query";
// Components
import Item from "./Item/Item";

import LinearProgress from "@material-ui/core/LinearProgress";
import Drawer from "@material-ui/core/Drawer";
import Badge from "@material-ui/core/Badge";
import Cart from "./Cart/Cart";

import { StyledButton } from "./Item/App.styles";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
// Types
import { CartItemType } from "./Types";

const getProducts = async (): Promise<CartItemType[]> =>
  await (await fetch("https://fakestoreapi.com/products")).json();

const App = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as CartItemType[]);
  const { data, isLoading, error } = useQuery<CartItemType[]>(
    "products",
    getProducts
  );
  console.log(data);

  const getTotalItems = (items: CartItemType[]) =>
    items.reduce((acc: number, item) => acc + item.amount, 0);

  const handleAddToCart = (clickedItem: CartItemType) => {
    setCartItems((prev) => {
      // 1. is the item already addded in the cart ?
      const isItemInCart = prev.find((item) => item.id === clickedItem.id);

      if (isItemInCart) {
        return prev.map((item) =>
          item.id === clickedItem.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      }
      // First time the item is added
      return [...prev, { ...clickedItem, amount: 1 }];
    });
  };

  const handleRemoveFromCart = (id: number) => {
    setCartItems((prev) =>
      prev.reduce((acc, item) => {
        if (item.id === id) {
          if (item.amount === 1) return acc;
          return [...acc, { ...item, amount: item.amount - 1 }];
        } else {
          return [...acc, item];
        }
      }, [] as CartItemType[])
    );
  };

  if (isLoading) return <LinearProgress />;
  if (error) return <div>Something went Wrong</div>;

  return (
    <div className="flex flex-col items-center font-manrope justify-center">
      <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
        <Cart
          cartItems={cartItems}
          addToCart={handleAddToCart}
          removeFromCart={handleRemoveFromCart}
        />
      </Drawer>
      <StyledButton onClick={() => setCartOpen(true)}>
        <Badge badgeContent={getTotalItems(cartItems)} color="error">
          <AddShoppingCartIcon />
        </Badge>
      </StyledButton>
      <div className=" flex items-center justify-center flex-wrap max-w-xxl ">
        <StyledButton onClick={() => setCartOpen(true)}></StyledButton>
        {data?.map((item) => (
          // <Grid item key={item.id} xs={12} sm={4}>
          <Item item={item} handleAddToCart={handleAddToCart} />
          // </Grid>
        ))}
      </div>
    </div>
  );
};
export default App;

// div =Wrapper Grid Grid
