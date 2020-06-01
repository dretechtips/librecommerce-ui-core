export interface CartProps {
  _id: string;
  children: (dot: CartDOT) => JSX.Element;
}

export interface CartState {
  isLoading: boolean;
}

export interface CartDOT {
  productIDs: string[];
}
