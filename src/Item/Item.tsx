import Button from "@material-ui/core/Button";
// Types

import { Props } from "../Types";

const Item: React.FC<Props> = ({ item, handleAddToCart }) => (
  <div className="flex flex-col p-4 m-4 w-80 justify-center items-center  rounded-3xl border-2  ">
    <img className="h-56 p-2  object-cover	" src={item.image} alt={item.title} />
    <div>
      <h3 className=" h-16 text-sm font-bold ">{item.title} </h3>
      <h3 className="line-clamp-4  h-22 text-justify">{item.description}</h3>
      <h3 className="py-4">${item.price}</h3>
    </div>
    <Button className="bg-blue-400" onClick={() => handleAddToCart(item)}>
      Add to cart
    </Button>
  </div>
);

export default Item;
