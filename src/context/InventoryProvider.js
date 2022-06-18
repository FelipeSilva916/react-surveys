import React, { useContext, useEffect, useState } from "react";

const InventoryContext = React.createContext({});

export const useInventoryContext = () => {
  useContext(InventoryContext);
};

const InventoryProvider = ({ children }) => {
  console.log("inventory provider");
  //qValues = Questoinnaire values
  const [qValues, setQValues] = useState([]);

  useEffect(() => {
    console.log("qValues", qValues);
  }, [qValues]);

  return (
    <InventoryContext.Provider
      value={{
        qValues: qValues,
        setQValues: setQValues
      }}
    >
      {children}
    </InventoryContext.Provider>
  );
};

export default InventoryProvider;
