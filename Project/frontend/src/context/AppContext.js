import { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [stateTrack, setStateTrack] = useState(0);

  return (
    <AppContext.Provider value={{ stateTrack, setStateTrack }}>
      {children}
    </AppContext.Provider>
  );
};
