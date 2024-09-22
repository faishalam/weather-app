import axios from "axios";
import { useQuery } from "@tanstack/react-query"
import { ForecastResponseType } from "@/app/type";

interface ForecastThreeHoursParams {
    search?: string;
    lat?: number,
    lon?: number
}

interface Props {
    params: ForecastThreeHoursParams;
}

const useForecastThreeHoursList = (props: Props) => {
    const { search, lat, lon } = props?.params

    const getForecastThreeHoursListFn = async (): Promise<ForecastResponseType | undefined> => {
        try {
            const response = await axios.get<ForecastResponseType>(`https://api.openweathermap.org/data/2.5/forecast`, {
                params: {
                    q: search,
                    appid: 'dbbbbf4372c452a2a3cc01571350fdcd',
                    units: 'metric',
                    lat: lat,
                    lon: lon
                },
            });

            return response.data
        } catch (error: unknown) {
            console.log(error);
            throw new Error('Failed to fetch weather data');
        }
    };

    return useQuery({
        queryKey: ['getForecastThreeHoursList', search],
        queryFn: getForecastThreeHoursListFn,
        enabled: Boolean(search || (lat && lon))
    });
};

export default useForecastThreeHoursList;
