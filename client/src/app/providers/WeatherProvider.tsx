"use client"

import { createContext, useContext, ReactNode, useEffect, useState } from "react";
import { useForm, UseFormReturn } from "react-hook-form";
import useWeatherList from "../api/weather/useWeatherList";
import { AlertError } from "../components/alert/AlertToastify";
import { ForecastResponseType, WeatherResponseType } from "../type";
import useForecastThreeHoursList from "../api/weather/useForecasThreeHourstList";

interface UserLocation {
    latitude: number;
    longitude: number;
}

interface WeatherContextProps {
    register: UseFormReturn["register"];
    handleSubmit: UseFormReturn["handleSubmit"];
    dataListWeather: WeatherResponseType | undefined,
    isLoadingDataWeather: boolean,
    search: string,
    setSearch: React.Dispatch<React.SetStateAction<string>>;
    setLocation: React.Dispatch<React.SetStateAction<UserLocation | null>>;
    dataListThreeHoursForecast: ForecastResponseType | undefined,
    isLoadingDataThreeHoursForecast: boolean,
    icon: string | null,
    setIcon: React.Dispatch<React.SetStateAction<string | null>>,
    isFetchingListWeather: boolean,
    isFetchingListThreeHoursForecast: boolean,
    setTheme: React.Dispatch<React.SetStateAction<string>>,
    theme: string | null,
    setFlagLocation: React.Dispatch<React.SetStateAction<boolean>>;
    flagLocation: boolean,
}

interface WeatherProviderProps {
    children: ReactNode;
}

const WeatherContext = createContext<WeatherContextProps | undefined>(undefined);

function useWeatherContext() {
    const context = useContext(WeatherContext);
    if (!context) {
        throw new Error("WeatherContext must be used within an WeatherProvider");
    }
    return context;
}

const WeatherProvider = ({ children }: WeatherProviderProps) => {
    const { register, handleSubmit } = useForm();
    const [search, setSearch] = useState<string>("")

    const [icon, setIcon] = useState<string | null>(null);
    const [theme, setTheme] = useState<string>(localStorage.getItem('theme') || 'dark')


    //get user location
    const [location, setLocation] = useState<UserLocation | null>(null);
    const [flagLocation, setFlagLocation] = useState<boolean>(false)
    const [error, setError] = useState<string>('');


    const { data: dataListWeather, isLoading: isLoadingDataWeather, isFetching: isFetchingListWeather } = useWeatherList({
        params: {
            search: search,
            lat: location?.latitude,
            lon: location?.longitude
        }
    })

    const { data: dataListThreeHoursForecast, isLoading: isLoadingDataThreeHoursForecast, isFetching: isFetchingListThreeHoursForecast } = useForecastThreeHoursList({
        params: {
            search: search,
            lat: location?.latitude,
            lon: location?.longitude
        }
    })

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLocation({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                    });
                },
                (error) => {
                    setSearch('Jakarta');
                    setError(`Error retrieving location: ${error.message}`);
                }
            );
        } else {
            setError('Geolocation is not supported by this browser.');
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <WeatherContext.Provider value={{
            register,
            handleSubmit,
            dataListWeather,
            isLoadingDataWeather,
            setSearch,
            search,
            setLocation,
            dataListThreeHoursForecast,
            isLoadingDataThreeHoursForecast,
            setIcon,
            icon,
            isFetchingListWeather,
            isFetchingListThreeHoursForecast,
            setTheme,
            theme,
            setFlagLocation,
            flagLocation,
        }}>
            {children}
        </WeatherContext.Provider>
    );
}

export { useWeatherContext, WeatherProvider };
