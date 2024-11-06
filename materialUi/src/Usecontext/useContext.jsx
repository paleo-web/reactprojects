import { createContext, useState } from "react";

export const SearchItemsContext = createContext();

function SearchProvider({ children }) {
  const [search, setSearch] = useState('');
  
  // console.log(search);
  
  return (
    <SearchItemsContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchItemsContext.Provider>
  );
}

export default SearchProvider;
