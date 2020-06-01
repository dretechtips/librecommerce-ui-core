export interface ProductDOT {
  _id: string;
  cost: number;
  name: string;
  description: string;
  features: string[];
  imageURLs: string[];
}

export interface ProductProps {
  _id: string;
  children: (product: ProductDOT) => JSX.Element;
}
