import React from "react";
import { ProductListProps } from "./ProductList.inteface";
import { Loading } from "src/components/loading/Loading.component";
import { HttpService } from "src/service/Http.service";
import { ProductDOT } from "../Product.interface";
import Card from "src/components/card/Card.component";

function ProductList(props: ProductListProps) {
  function getTitle() {
    switch (props.type) {
      case "featured":
        return "Latest Features";
      case "popular":
        return "Most Popular";
      case "promotional":
        return "Limited Time Promotion";
      case "trending":
        return "Hotest Trends";
      default:
        return "Products";
    }
  }

  return (
    <Card theme="primary" title={getTitle()}>
      <Loading>
        {async () => {
          const res = await new HttpService().getWithAPI(
            "/sale/product/list/" + props.type
          );
          const products: ProductDOT[] = res.data;
          return (
            <React.Fragment>
              {products.map((product) => (
                <div>
                  <img
                    className="img-fluid"
                    src={product.imageURLs[0]}
                    alt="Product Image"
                  />
                  <span>{product.name}</span>
                </div>
              ))}
            </React.Fragment>
          );
        }}
      </Loading>
    </Card>
  );
}

export default ProductList;
