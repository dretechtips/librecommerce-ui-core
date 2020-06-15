import React from "react";
import { ProductProps, ProductDOT } from "./Product.interface";
import { HttpService } from "src/service/Http.service";
import { Loading } from "src/components/loading/Loading.component";
import { IS_DEBUG } from "src/env";

function Product(props: ProductProps) {
  async function get(): Promise<ProductDOT> {
    if (IS_DEBUG) {
      throw new Error("No Implementation");
    }

    const res = await new HttpService().getWithAPI("sale/product/fetch");
    return res.data as ProductDOT;
  }

  return <Loading>{async () => props.children(await get())}</Loading>;
}

export default Product;
