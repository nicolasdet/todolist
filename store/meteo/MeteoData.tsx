import { createContext, useState } from 'react';

interface MeteoData {
  MeteoData: any;
  setMeteoData: (MeteoData: any) => void;
}

export const MeteoDataContext = createContext<MeteoData>({
  MeteoData: {},
  setMeteoData: () => {},
});

const MeteoDataContextProvider = ({ children }) => {
  const [MeteoData, setMeteoData] = useState();

  const value = { MeteoData, setMeteoData };

  return (
    <MeteoDataContext.Provider value={value}>
      {children}
    </MeteoDataContext.Provider>
  );
};
