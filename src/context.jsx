import React, { useState, useContext } from "react";
const AppContext = React.createContext();
export const AppProvider = ({ children }) => {
  const [state, setState] = useState(true);
  return (
    <AppContext.Provider
      value={{
        state,
        setState,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
