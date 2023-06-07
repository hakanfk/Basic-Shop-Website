import React from "react";
import computer from "../assets/monster2.jfif";
import Card from "../components/Card";
import { array } from "../data/data";

type Props = {};

function Home({}: Props) {
  return (
    <div className="w-full h-full flex flex-col px-2 md:px-16 py-2 mb-12 md:py-8">
      <div className=" flex justify-center w-full mt-2">
        <h2 className="text-2xl tracking-widest">Items</h2>
      </div>
      <div
        className="md:mt-16 mt-4 grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 mx-auto gap-x-16
      gap-y-12"
      >
        {array.map((item) => {
          return <Card key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
}

export default Home;
