import React from "react";
import { ProductProps, ProductDOT } from "./Product.interface";
import { HttpService } from "src/service/Http.service";
import { Loading } from "src/components/loading/Loading.component";
import {} from "src/";
import { IS_DEBUG } from "src/env";

function Product(props: ProductProps) {
  async function get(): Promise<ProductDOT> {
    if (IS_DEBUG) {
      return {
        cost: 1,
        name: "Product Name",
        _id: "cuo93420",
      };
    }

    const res = await new HttpService().getWithAPI("sale/product/fetch");
    return res.data as ProductDOT;
  }

  return <Loading>{async () => props.children(await get())}</Loading>;
}

export default Product;
