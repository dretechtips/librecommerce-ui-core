import { AlertProps } from "src/components/alert/Alert.interface";
import { ProductDOT } from "../Product.interface";

export interface ProductViewerProps {}

export interface ProductViewerUIProps extends ProductViewerProps {
  alert?: AlertProps;
  onAddToCart: (product: ProductDOT, quantity: number) => void;
}

export interface ProductViewerState {
  alert?: AlertProps;
}
