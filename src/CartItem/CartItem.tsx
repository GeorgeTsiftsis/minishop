import Button from "@material-ui/core/Button";
// Types
import { CartItemType } from "../Types";

type Props = {
  item: CartItemType;
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const CartItem: React.FC<Props> = ({ item, addToCart, removeFromCart }) => (
  <div className="flex flex-col py-8 items-center justify-center">
    <div className="flex flex-col items-center justify-center">
      <img className="object-cover w-28" src={item.image} alt={item.title} />
      <h3 className="font-semi-bold p-4 text-center">{item.title}</h3>
      <p className=" text-sm"> Price: ${item.price} </p>
      <p className=" text-sm">
        Total: ${(item.amount * item.price).toFixed(2)}{" "}
      </p>
    </div>
    <div className="flex my-4 space-x-4 items-center justify-center ">
      <Button
        size="small"
        disableElevation
        variant="contained"
        onClick={() => removeFromCart(item.id)}
      >
        -
      </Button>
      <p>{item.amount}</p>
      <Button
        size="small"
        disableElevation
        variant="contained"
        onClick={() => addToCart(item)}
      >
        +
      </Button>
    </div>
  </div>
);

export default CartItem;
