import axios from 'axios';

const METEO_URL = 'https://api.open-meteo.com/v1/forecast?';

export const Meteo = async (lat: string, long: string) => {
  const Adress = `latitude=${lat}&longitude=${long}&current_weather=true&timezone=auto&daily=apparent_temperature_min,apparent_temperature_max,weather_code,wind_speed_10m_max`;
  try {
    const response = await axios.get(METEO_URL + Adress);
    // Parse and format daily data
    const returnData = {
      current: response.data.current_weather,
      daily: DailyFormat(response.data),
    };
    return { success: true, data: returnData };
  } catch (error) {
    return { success: false, data: error };
  }
};

export const DailyFormat = (data: any) => {
  console.log(data);
  const Daily = [];
  // ça devrait plutot etre une constante globale :  utilisé dans le call API
  const PredictionLenght = data.daily.time.length;
  for (let i = 1; i < PredictionLenght; i++) {
    // Format de la date
    const DayName = new Date(data.daily.time[i]).toLocaleDateString('fr-FR', {
      weekday: 'long',
    });
    const day = {
      date: DayName,
      temperature: `min: ${data.daily.apparent_temperature_min[i]}°,  max: ${data.daily.apparent_temperature_max[i]}°`,
      min: data.daily.apparent_temperature_min[i],
      max: data.daily.apparent_temperature_max[i],
      weathercode: data.daily.weather_code[i],
      windspeed: data.daily.wind_speed_10m_max[i],
    };
    Daily.push(day);
  }

  return Daily;
};
