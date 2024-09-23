import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import ErrorHandler from "@/app/helper/ErrorHandler";
import { WeatherResponseType } from "../../type";

interface WeatherParams {
    lat?: number | null;
    lon?: number | null;
    search: string | null
}

interface Props {
    params: WeatherParams;
}


const useWeatherList = (props: Props) => {
    const { search, lat, lon } = props.params;

    const getWeatherListFn = async (): Promise<WeatherResponseType | undefined> => {
        try {
            const response = await axios.get<WeatherResponseType>(`https://api.openweathermap.org/data/2.5/weather`, {
                params: {
                    ...(lat && { lat: lat }),
                    ...(lon && { lon: lon }),
                    units: 'metric',
                    q: search,
                    appid: process.env.NEXT_PUBLIC_API_KEY,
                },
            })

            return response.data;
        } catch (error) {
            ErrorHandler(error)
        }
    };

    return useQuery({
        queryKey: ['getWeatherList', search],
        queryFn: getWeatherListFn,
        enabled: Boolean(search || (lat && lon)),
    });
};

export default useWeatherList;
