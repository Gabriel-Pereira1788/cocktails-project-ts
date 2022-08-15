import axios from "axios";
import {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useFetch } from "../hooks/useFetch";
import { ICocktail } from "../interfaces/ICocktail";

interface IContext {
  drinks: ICocktail[];
  loading: boolean;
  setFindByText: Dispatch<string>;
}

const initialValue: IContext = {
  drinks: [],
  loading: true,
  setFindByText: () => {},
};

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const Context = createContext(initialValue);

const ApiContextProvider = ({ children }: { children: ReactNode }) => {
  const [drinks, setDrinks] = useState<ICocktail[]>([]);

  const [findByText, setFindByText] = useState("");
  const { loading, response } = useFetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${findByText}`
  );

  useEffect(() => {
    setDrinks(response.drinks);
  }, [response]);
  return (
    <Context.Provider value={{ drinks, setFindByText, loading }}>
      {children}
    </Context.Provider>
  );
};

export default ApiContextProvider;

export const useApiContext = () => {
  return useContext(Context);
};
