import React, { useState } from "react";

export const InventoryContext = React.createContext({});

const InventoryProvider = ({ children }) => {
  return (
    <InventoryContext.Provider value={{}}>
      {children}{" "}
    </InventoryContext.Provider>
  );
};

export default InventoryProvider;
