import { ProductDOT } from "../../product/Product.interface";

export interface AddToCartProps {
  product: ProductDOT;
  onAdd?: (product: ProductDOT, quantity: number) => void;
}

export interface AddToCartState {
  quantity: number;
}
