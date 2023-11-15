import axios from 'axios';

const METEO_URL = 'https://api.open-meteo.com/v1/forecast?';

export const Meteo = async (lat: string, long: string) => {
  const Adress = `latitude=${lat}&longitude=${long}&current_weather=true`;
  try {
    const response = await axios.get(METEO_URL + Adress);
    console.log(response);
    return { success: true, data: response.data };
  } catch (error) {
    return { success: false, data: error };
  }
};
