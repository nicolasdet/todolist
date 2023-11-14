import axios from 'axios';

const GEOCODING_URL = 'https://geocode.maps.co/search?q=';

export const Geocoding = async (Adress) => {
  try {
    const response = await axios.get(GEOCODING_URL + Adress);
    return { success: true, data: response.data };
  } catch (error) {
    return { success: false, data: error };
  }
};
