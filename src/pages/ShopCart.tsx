import React from "react";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { array } from "../data/data";

type Props = {};

type CartItem = {
  id: number;
  quantity: number;
};
type CartItem2 = {
  id: number;
  quantity: number;
  price: number;
};

function ShopCart({}: Props) {
  const { cartItems } = useShoppingCart();
  const cartArray = cartItems;
  let cartIdArray: CartItem[] = [];
  //Redundant
  cartArray.map((item) => cartIdArray.push(item));

  //const cartList = array.filter((item) => cartIdArray.indexOf(item.id) !== -1);
  let cartList: CartItem2[] = [];
  array.filter((item) =>
    cartIdArray.map((item2) => {
      if (item.id === item2.id) {
        cartList.push();
      }
    })
  );

  const totalPrice = cartList.reduce(
    (partialSum, a) => partialSum + a.quantity,
    0
  );

  console.log("ShoppingCart = " + cartList[0]?.quantity);

  if (!cartList) {
    return (
      <div className="flex justify-center items-center">
        <h2>No Item in YOur Cart</h2>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full h-full justify-start items-center">
      <h2 className="text-2xl tracking-wider mt-8">Your Cart</h2>
      <div className="flex flex-col mt-8 divide-y-4">
        <div>
          {cartList.map((item) => {
            return (
              <div className="flex gap-x-6 mt-3 justify-between ">
                {/* <h2> {item.title} </h2> */}
                <h3> {item.price.toFixed(0)} </h3>
              </div>
            );
          })}
        </div>

        <div className="flex justify-between ">
          Total: <span> {totalPrice} </span>
        </div>
      </div>
    </div>
  );
}

export default ShopCart;
