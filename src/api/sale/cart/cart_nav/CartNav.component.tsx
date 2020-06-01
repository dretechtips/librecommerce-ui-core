import React from "react";
import AsyncNavDropdown from "src/components/nav/nav_dropdown/async_nav_dropdown/AsyncNavDropdown.container";
import { CartProps } from "../Cart.interface";
import Cart from "../Cart.component";
import { HttpService } from "src/service/Http.service";
import NavDropdown from "src/components/nav/nav_dropdown/NavDropdown.component";
import Product from "../../product/Product.component";

function CartNav(props: CartProps) {
  return (
    <Cart {...props}>
      {(cart) => (
        <NavDropdown>
          {{
            button: <div>{cart.productIDs.length + " Cart Items"}</div>,
            menu: cart.productIDs.map((productID) => (
              <Product _id={productID}>
                {(product) => <div>{product.name + "|" + product.cost}</div>}
              </Product>
            )),
          }}
        </NavDropdown>
      )}
    </Cart>
  );
}

export default CartNav;
