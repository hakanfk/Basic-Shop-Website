import React, { useContext, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { HiMenuAlt2 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { useFavContext } from "../context/FavContext";

type Props = {};

function Navbar({}: Props) {
  const activeBar: string =
    "text-xl hover:text-orange-300 text-orange-500 h-20 flex items-center border-b-4 border-orange-500";
  const notActiveBar: string = "text-xl hover:text-orange-300 ";

  const [isOpen, setisOpen] = useState(false);
  const [isUserOpen, setisUserOpen] = useState(false);
  const [isCartOpen, setisCartOpen] = useState(false);

  const { getTotalItem } = useShoppingCart();
  const quantity = getTotalItem();

  const { ids } = useFavContext();
  const length = ids.length;

  return (
    <nav className="sticky top-0 z-40 w-full h-20 bg-white shadow-md flex justify-between md:justify-between">
      {/* Home About Section */}
      <div className="py-2 px-8 md:px-24 lg:px-36 ml-8 hidden md:flex items-center gap-x-12">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? activeBar : notActiveBar)}
        >
          Home
        </NavLink>
        <NavLink
          to="About"
          className={({ isActive }) => (isActive ? activeBar : notActiveBar)}
        >
          About
        </NavLink>
      </div>

      {/* Small Screen NavMenu */}
      <div
        className={`md:hidden ${
          isOpen ? "absolute w-2/3" : "flex pl-4"
        } h-full transition-all duration-300 ease-out justify-center items-center `}
      >
        <button
          onClick={() => setisOpen(true)}
          className={`${isOpen ? "hidden" : "flex"} `}
        >
          <HiMenuAlt2 className="w-8 h-8" />
        </button>
        {isOpen ? (
          <div className=" p-2 h-screen bg-gray-100 flex flex-col justify-start">
            <div className="flex justify-between">
              <div className="text-lg tracking-wider ml-3 mt-1 text-orange-700">
                Menu
              </div>
              <div className="cursor-pointer">
                <AiOutlineClose
                  className="w-8 h-8"
                  onClick={() => setisOpen(false)}
                />
              </div>
            </div>
            <div className="flex flex-col gap-y-3 ml-3 mt-8">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-orange-400" : ""
                }
              >
                Home
              </NavLink>
              <NavLink to="/favs">Favorilerim</NavLink>
              <NavLink to="/">Hesabım</NavLink>
              <NavLink to="/">Ayarlar</NavLink>
            </div>
          </div>
        ) : null}
      </div>

      {/* HepsiTrend LAbel */}
      <div className="flex justify-center items-center text-3xl md:m-0 ml-6 ">
        Hepsi <span className="text-orange-400">Trend</span>
      </div>

      {/* Cart and User */}

      {/* Cart */}
      <div className="lg:px-36 md:px-24 px:8 flex">
        <NavLink
          to="/cart"
          className="py-2 px-8 flex items-center mr-6 md:mr-2 cursor-pointer group relative "
        >
          <AiOutlineShoppingCart className="w-8 h-8 group-hover:scale-110" />
          <div className="w-6 h-6 bg-orange-400 rounded-full absolute flex justify-center items-center text-white top-10 left-[3.5rem] group-hover:scale-110 ">
            {quantity}
          </div>
        </NavLink>

        {/* User */}
        <div className="justify-center mr-8 items-center hidden md:flex cursor-pointer group relative">
          <BiUserCircle
            onClick={() => setisUserOpen((prevState) => !prevState)}
            className="w-8 h-8 group-hover:scale-110"
          />
          {isUserOpen ? (
            <div className="absolute top-20 w-44 bg-gray-100 flex justify-start flex-col items-start">
              <div className="text-lg border-b-2 w-full py-2 px-2 hover:bg-orange-400 hover:text-gray-800">
                Hesabım
              </div>
              <NavLink
                to="/favs"
                className="text-lg border-b-2 w-full py-2 px-2 hover:bg-orange-400 hover:text-gray-800 flex justify-between"
              >
                Favorilerim
                <span className="w-6 h-6 rounded-full bg-orange-300 flex justify-center items-center">
                  {length}
                </span>
              </NavLink>
              <div className="text-lg border-b-2 w-full py-2 px-2 hover:bg-orange-400 hover:text-gray-800">
                Adreslerim
              </div>
              <div className="text-lg border-b-2 w-full py-2 px-2 hover:bg-orange-400 hover:text-gray-800">
                Siparişlerim
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
