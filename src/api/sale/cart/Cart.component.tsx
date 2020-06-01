import React, { useState } from "react";
import { CartProps, CartDOT } from "./Cart.interface";
import { HttpService } from "src/service/Http.service";
import { Loading } from "src/components/loading/Loading.component";

function Cart(props: CartProps) {
  async function get(): Promise<CartDOT> {
    return {
      productIDs: [],
    };
  }

  return <Loading>{async () => props.children(await get())}</Loading>;
}

export default Cart;
