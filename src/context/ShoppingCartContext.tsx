import { createContext } from "react";
import { useState } from "react";

interface ShoppingCartProvider {
  children: React.ReactNode;
}
interface CartItem{
    id:number,
    qty:number
}
interface ShoppingCartContext {
  cartItems: CartItem[]
}
export const ShoppingCartContext = createContext({} as ShoppingCartContext);

export const useShoppingCartContext=()=>{
    return useContext(ShoppingCartContext)
}
export function ShoppingCartProvider({ children }: ShoppingCartProvider) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  return (
    <ShoppingCartContext.Provider value={{ cartItems }}>
      {children}
    </ShoppingCartContext.Provider>
  );
}
