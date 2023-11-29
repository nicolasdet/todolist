import { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const PersistMeteoContext = createContext({
  lastAdress: '',
});

const PersistMeteoContextProvider = ({ children }) => {
  const [lastAdress, setpersisted] = useState('');

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('meteo-lastAdress');
      if (value !== null) {
        setpersisted(value);
      }
    } catch (e) {
      // error reading value
    }
  };

  const value = { lastAdress };

  return (
    <PersistMeteoContext.Provider value={value}>
      {children}
    </PersistMeteoContext.Provider>
  );
};

export default PersistMeteoContextProvider;
