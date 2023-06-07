import React, { useState, useEffect } from "react";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { useFavContext } from "../context/FavContext";
import { useShoppingCart } from "../context/ShoppingCartContext";

type Props = {
  id: number;
  title: string;
  price: number;
  image: string;
};

function Card({ id, title, price, image }: Props) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    removeFromCart,
    decreaseItemQuantity,
  } = useShoppingCart();

  const quantity = getItemQuantity(id);

  const { addRemoveFav, getFavList } = useFavContext();
  function handleFavClick() {
    addRemoveFav(id);
  }

  return (
    <div
      className={`w-72 h-96 bg-gray-100 shadow-md group  cursor-pointer relative overflow-hidden  `}
    >
      {/* Add To Cart Section */}
      <div
        className={`absolute -bottom-16 transition-all duration-300 group-hover:bottom-3 flex justify-center items-center w-full ${
          quantity > 0 ? "hidden" : "flex"
        } `}
      >
        <button
          className=" flex w-3/4 h-10 rounded-3xl hover:scale-105 transition-all duration-150   bg-orange-400 justify-center items-center text-gray-900"
          onClick={() => increaseCartQuantity(id)}
        >
          Add to Cart
        </button>
      </div>

      {/* if cart is bigger than 0 */}
      {quantity > 0 ? (
        <div className="absolute bottom-3 flex mt-3  justify-center items-center w-full">
          <button
            className="w-10 h-10 rounded-lg bg-orange-400 text-lg flex justify-center items-center font-bold hover:bg-orange-600"
            onClick={() => increaseCartQuantity(id)}
          >
            +
          </button>
          <div className="w-24 bg-white h-10 rounded-xl m-2 flex justify-center items-center">
            {quantity}
          </div>
          <button
            className="w-10 flex justify-center items-center h-10 rounded-lg bg-orange-400 text-lg font-bold hover:bg-orange-600"
            onClick={() => decreaseItemQuantity(id)}
          >
            -
          </button>
        </div>
      ) : null}

      {/* Add to Fav Section */}
      <div className="absolute top-4 -right-12 transition-all duration-300 group-hover:top-4 group-hover:right-4">
        <button
          className="w-10 h-10 rounded-full bg-gray-200 flex justify-center items-center"
          onClick={handleFavClick}
        >
          <MdOutlineFavoriteBorder
            stroke="orange"
            color="orange"
            className="w-8 h-8 "
          />
        </button>
      </div>

      {/* Main Cart Section */}
      <div className="flex flex-col justify-center items-center p-2">
        <img src={image} alt={title} className="w-64 h-56" />
        <h2 className="mt-2 text-lg tracking-wide font-normal"> {title} </h2>
      </div>
      <div className="m-4 font-bold text-gray-600">
        {price} <span className="font-normal">TL</span>{" "}
      </div>
    </div>
  );
}

export default Card;
