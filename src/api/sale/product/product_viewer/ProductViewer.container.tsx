import React, { Component } from "react";
import {
  ProductViewerProps,
  ProductViewerState,
} from "./ProductViewer.interface";
import ProductViewerUI from "./ProductViewer.component";
import { ProductDOT } from "../Product.interface";

export class ProductViewer extends Component<
  ProductViewerProps,
  ProductViewerState
> {
  constructor(props: ProductViewerProps) {
    super(props);
    this.state = {
      alert: undefined,
    };
  }

  public clearAlert() {
    this.setState({ ...this.state, alert: undefined });
  }

  public onAddToCart(product: ProductDOT, quantity: number) {
    this.setState({
      ...this.state,
      alert: {
        message:
          quantity + "x" + product.name + " was just added into the cart",
        theme: "success",
      },
    });
    setTimeout(() => this.clearAlert(), 5000);
  }

  public render() {
    return (
      <ProductViewerUI
        alert={this.state.alert}
        onAddToCart={this.onAddToCart.bind(this)}
      />
    );
  }
}

export default ProductViewer;
