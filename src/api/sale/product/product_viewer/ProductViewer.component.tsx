import React from "react";
import { useParams } from "react-router-dom";
import Product from "../Product.component";
import Card from "src/components/card/Card.component";
import PhotoViewer from "src/components/viewer/photo_viewer/PhotoViewer.container";
import AddToCart from "src/api/sale/cart/add_to_cart/AddToCart.container";
import { ProductViewerUIProps } from "./ProductViewer.interface";

/**
 * @param id
 */

function ProductViewer(props: ProductViewerUIProps) {
  const { id } = useParams();

  return (
    <Card theme="primary">
      <Product _id={id}>
        {(product) => (
          <div>
            <PhotoViewer photos={product.imageURLs} />
            <div>
              <span>{product.name}</span>
              {product.features.map((feature) => (
                <span>{feature}</span>
              ))}
            </div>
            <AddToCart product={product} onAdd={props.onAddToCart} />
            <hr />
          </div>
        )}
      </Product>
    </Card>
  );
}

export default ProductViewer;
