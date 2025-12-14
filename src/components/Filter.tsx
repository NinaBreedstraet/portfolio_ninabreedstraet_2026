import { createContext, useContext } from "react";
import type { Dispatch, SetStateAction } from "react";

type FilterContextType = {
  genreFilter: string;
  setGenreFilter: Dispatch<SetStateAction<string>>;
};

const FilterContext = createContext<FilterContextType>({
  genreFilter: "",
  setGenreFilter: () => {},
});

export function useFilter() {
  return useContext(FilterContext);
}
