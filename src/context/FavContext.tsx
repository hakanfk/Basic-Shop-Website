import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

export function useFavContext() {
  return useContext(FavContext);
}

type FavContext = {
  ids: FavItem[];
  addRemoveFav: (id: number) => void;
  //removeFromFav: (id: number) => void;
  getFavList: () => FavItem[];
  getFavQuantity: () => number;
};

const FavContext = createContext({} as FavContext);

type FavContextProviderProps = {
  children: ReactNode;
};

type FavItem = {
  id: number;
};

export function FavContextProvider({ children }: FavContextProviderProps) {
  const [favList, setfavList] = useState<FavItem[]>([]);

  useEffect(() => {
    console.log(favList);
  }, [favList]);

  function addRemoveFav(id: number) {
    setfavList((currList) => {
      if (currList.find((item) => item.id === id) == null) {
        return [...currList, { id }];
      } else {
        return favList.filter((item) => item.id !== id);
      }
    });
    //console.log(favList);
  }

  /* function removeFromFav(id: number) {
    setfavList((currList) => {
      return currList.filter((item) => item.id !== id);
    });
  } */

  function getFavList() {
    //console.log(favList);

    return favList;
  }

  function getFavQuantity() {
    //console.log(favList.length);

    return favList.length;
  }

  return (
    <FavContext.Provider
      value={{
        addRemoveFav,
        getFavList,
        getFavQuantity,
        ids: favList,
      }}
    >
      {children}
    </FavContext.Provider>
  );
}
