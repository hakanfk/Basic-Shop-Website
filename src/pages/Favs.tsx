import React from "react";
import Card from "../components/Card";
import { useFavContext } from "../context/FavContext";
import { array } from "../data/data";

function Favs() {
  const { getFavList } = useFavContext();
  const favIds = getFavList();
  let numArr: number[] = [];
  const arr = favIds.map((item) => {
    return numArr.push(item.id);
  });

  const favList = array.filter((item) => numArr.indexOf(item.id) !== -1);

  console.log("FavList = " + favList[0].title);

  return (
    <div className="h-full w-full flex flex-col justify-center items-center gap-x-16 pt-6">
      <h2 className="text-2xl tracking-widest">Your Favs</h2>
      <div className="flex gap-x-12 mt-10">
        {favList.map((item) => {
          return <Card {...item} />;
        })}
      </div>
    </div>
  );
}

export default Favs;
