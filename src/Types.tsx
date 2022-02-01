export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
};

export type Props = {
  item: CartItemType;
  handleAddToCart: (clcikedItem: CartItemType) => void;
};
