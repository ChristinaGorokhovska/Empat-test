import { useState, createContext, useContext } from "react";

interface IStoreContext {
  category: string;
  setCategory: (category: string) => void;
}
const initialStoreContext: IStoreContext = {
  category: "Electronics",
  setCategory: (category: string) => undefined,
};
export const StoreContext = createContext<IStoreContext>(initialStoreContext);
export const useStoreContext = () => useContext(StoreContext);

export function StoreProvider({ children }: { children: JSX.Element }) {
  const [category, setCategory] = useState<string>("");

  return <StoreContext.Provider value={{ category, setCategory }}>{children}</StoreContext.Provider>;
}
