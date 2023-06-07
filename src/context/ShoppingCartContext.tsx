import { createContext, ReactNode, useContext, useState } from "react";

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

type ShoppingCartContext = {
  cartItems: CartItem[];
  getTotalItem: () => number;
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseItemQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
};

const ShoppingCartContext = createContext({} as ShoppingCartContext);

type ShoppingCartProviderProps = {
  children: ReactNode;
};

type CartItem = {
  id: number;
  quantity: number;
};

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [cartItem, setcartItem] = useState<CartItem[]>([]);

  function getTotalItem() {
    return cartItem.length;
  }

  function getItemQuantity(id: number) {
    return cartItem.find((item) => item.id === id)?.quantity || 0;
  }

  function increaseCartQuantity(id: number) {
    setcartItem((currCart) => {
      if (currCart.find((item) => item.id === id) == null) {
        return [...currCart, { id, quantity: 1 }];
      } else {
        return currCart.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function decreaseItemQuantity(id: number) {
    setcartItem((currCart) => {
      if (currCart.find((item) => item.id === id)?.quantity === 1) {
        return currCart.filter((item) => item.id !== id);
      } else {
        return currCart.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function removeFromCart(id: number) {
    return cartItem.filter((item) => item.id !== id);
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        cartItems: cartItem,
        getTotalItem,
        getItemQuantity,
        increaseCartQuantity,
        decreaseItemQuantity,
        removeFromCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
