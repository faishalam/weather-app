import formatTime from "@/app/helper/FormatTime";
import { useWeatherContext } from "@/app/providers/WeatherProvider";
import TodayForecastLoading from "../../loadingSkeleton/TodayForecastLoading";

interface Weather {
    icon: string;
    description: string;
}

interface Main {
    temp_min: number;
    temp_max: number;
    temp: number | undefined;
}

interface ForecastItem {
    weather: Weather[];
    main: Main;
    dt_txt: string;
}

interface ForecastResponse {
    list: ForecastItem[];
}

export default function TodayForecastSection() {
    const {
        dataListThreeHoursForecast,
        isLoadingDataThreeHoursForecast,
        isFetchingListThreeHoursForecast,
        theme
    } = useWeatherContext();

    const isForecastResponse = (data: unknown): data is ForecastResponse => {
        return (data as ForecastResponse).list !== undefined;
    };

    return (
        <>
            <div className={`font-semibold text-sm mb-7 px-7 ${theme === "light" ? "text-gray-500" : "text-white"}`}>
                <p>TODAY FORECAST</p>
            </div>
            {isLoadingDataThreeHoursForecast || isFetchingListThreeHoursForecast || !dataListThreeHoursForecast ? (
                <TodayForecastLoading />
            ) : (
                isForecastResponse(dataListThreeHoursForecast) && (
                    <div className="w-full max-w-full grid grid-cols-3 px-4 gap-8 md:gap-0 md:grid-cols-6 md:px-0">
                        {dataListThreeHoursForecast.list.slice(0, 6).map((item: ForecastItem, i: number) => (
                            <div
                                className={`flex flex-col gap-4 justify-center items-center ${i !== dataListThreeHoursForecast.list.slice(0, 6).length - 1 ? "border-b p-2 md:border-r md:border-b-0" : ""}`}
                                key={i}
                            >
                                <p className="text-xs">{formatTime(item.dt_txt)}</p>
                                <img
                                    src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                                    className="w-[80px]"
                                    alt={item.weather[0].description} // Add alt text for accessibility
                                />
                                <p className="text-xl font-medium">{Math.floor(item.main.temp ?? 0)}°</p>
                            </div>
                        ))}
                    </div>
                )
            )}
        </>
    );
}
