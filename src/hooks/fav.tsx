import React, {
  createContext,
  ReactNode,
  useContext,
  useState,
  Dispatch,
} from "react";

interface FavProviderProps {
  children: ReactNode;
}

interface FavContextProps {
  favorites: string[];
  setFavorites: React.Dispatch<React.SetStateAction<string[]>>;
}

const FavContext = createContext({} as FavContextProps);

function FavProvider({ children }: FavProviderProps) {
  const [favorites, setFavorites] = useState<string[]>([]);

  return (
    <FavContext.Provider value={{ favorites, setFavorites }}>
      {children}
    </FavContext.Provider>
  );
}

function useFav() {
  const context = useContext(FavContext);

  return context;
}

export { FavProvider, useFav };
