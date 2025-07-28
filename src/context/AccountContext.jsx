import { createContext, useState } from "react";

export const AccountContext = createContext(null);
export const AccountContextProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "Jeet Tamang" });

  return (
    <AccountContext.Provider value={{ user, setUser }}>
      {children}
    </AccountContext.Provider>
  );
};
