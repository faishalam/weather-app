import { useWeatherContext } from "@/app/providers/WeatherProvider"
import HighlightLoading from "../../loadingSkeleton/HighlightLoading"

export default function HighlightSection() {
    const {
        dataListWeather,
        icon,
        theme
    } = useWeatherContext()
    return (
        <>
            {!dataListWeather ? (
                <HighlightLoading />
            ) : (
                <>
                    <div className={`flex flex-col w-full max-w-full gap-14 ${theme === 'light' ? 'text-black' : 'text-white'}`}>
                        <div className="flex flex-col w-full max-w-full">
                            <p className="text-5xl font-medium">{dataListWeather?.name}</p>
                            <p className={`text-lg ${theme === 'light' ? 'text-gray-500' : 'text-white'} `}>{dataListWeather?.weather[0].description}</p>
                        </div>

                        <div>
                            <p className="text-7xl font-medium">
                                {dataListWeather?.main?.temp !== undefined && Math.floor(dataListWeather.main.temp)}°
                            </p>
                        </div>
                    </div>

                    <div>
                        <img
                            src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                            className="w-[150px] rounded-full shadow-md bg-gray-400"
                            alt="img"
                        />

                    </div>
                </>
            )}

        </>

    )
}