import { useWeatherContext } from "@/app/providers/WeatherProvider";
import DailysForecastLoading from "../../loadingSkeleton/DailysForecastLoading";
import { useThemeContext } from "@/app/providers/ThemeProvider";

interface Weather {
    icon: string;
    description: string;
}

interface Main {
    temp_min: number;
    temp_max: number;
}

interface ForecastItem {
    weather: Weather[];
    main: Main;
}

interface ForecastResponse {
    list: ForecastItem[];
}

export default function DailysForecastSection() {
    const {
        dataListThreeHoursForecast,
        isLoadingDataThreeHoursForecast,
        isFetchingListThreeHoursForecast,
    } = useWeatherContext();

    const {
        theme
    } = useThemeContext()

    const dayInWeek = new Date().getDay();
    const days = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
    ];

    const fiveDaysForecast = (dataListThreeHoursForecast as ForecastResponse | undefined)?.list?.filter((item: ForecastItem, index: number) => index % 8 === 0);

    const nextFiveDays = [
        ...days.slice(dayInWeek, days.length),
        ...days.slice(0, 5 - (days.length - dayInWeek))
    ];


    return (
        <>
            <div className={`font-semibold text-sm pt-7 px-7 ${theme === "light" ? "text-gray-500" : "text-white"}`}>
                <p>DAILY FORECAST</p>
            </div>

            {isLoadingDataThreeHoursForecast || isFetchingListThreeHoursForecast || !dataListThreeHoursForecast ? (
                <DailysForecastLoading />
            ) : (
                <div className="px-2 md:px-7 text-sm md:text-md">
                    {fiveDaysForecast?.map((item: ForecastItem, i: number) => (
                        <div
                            key={i}
                            className={`w-full max-w-full grid grid-cols-3 justify-between items-center p-5 ${i === fiveDaysForecast.length - 1 ? "" : "border-b"}`}
                        >
                            <p className="text-md">{nextFiveDays[i]}</p>
                            <div className="w-full max-w-full flex flex-col justify-center items-center">
                                <img
                                    src={`http://openweathermap.org/img/wn/${item?.weather[0].icon}@2x.png`}
                                    className="w-[80px]"
                                    alt="img"
                                />
                                <p className="text-sm">{item?.weather[0].description.split(" ").map((item) => item[0].toUpperCase() + item.slice(1)).join(" ")}</p>
                            </div>
                            <p className="text-sm flex justify-end">{Math.round(item?.main.temp_min)}° / {Math.round(item?.main.temp_max)}°C</p>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
}
