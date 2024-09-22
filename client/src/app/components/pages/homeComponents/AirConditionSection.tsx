import { useWeatherContext } from "@/app/providers/WeatherProvider";
import { CiTempHigh } from "react-icons/ci";
import { LiaCloudSolid } from "react-icons/lia";
import { WiHumidity, WiStrongWind } from "react-icons/wi";
import AirConditionLoading from "../../loadingSkeleton/AirConditionLoading";

export default function AirConditionSection() {
    const {
        dataListWeather,
        isFetchingListWeather,
        isLoadingDataWeather,
        theme
    } = useWeatherContext()


    return (
        <>
            {isFetchingListWeather || isLoadingDataWeather || !dataListWeather ? (
                <AirConditionLoading />
            ) : (
                <>
                    <div className={`font-semibold text-sm mb-7 ${theme === 'light' ? 'text-gray-500' : 'text-white'}`}>
                        <p>AIR CONDITIONS</p>
                    </div>

                    <div className="max-w-full w-full flex flex-row justify-start items-start">
                        <div className="w-full max-w-full flex flex-col gap-16 md:gap-7">
                            <div className="flex items-start w-full max-w-full gap-3">
                                <div>
                                    <CiTempHigh size={40} />
                                </div>
                                <div className="flex flex-col w-full max-w-full gap-2">
                                    <p className="font-semibold text-sm md:text-lg">Feels Like</p>
                                    <p className="text-lg md:text-xl font-semibold">
                                        {dataListWeather?.main?.feels_like !== undefined && Math.floor(dataListWeather.main.feels_like)}°
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start w-full max-w-full gap-3">
                                <div>
                                    <WiStrongWind size={40} />
                                </div>
                                <div className="flex flex-col w-full max-w-full gap-2">
                                    <p className="font-semibold text-sm md:text-lg">Wind</p>
                                    <p className="text-lg md:text-xl font-semibold">
                                        {dataListWeather?.wind?.speed !== undefined && Math.floor(dataListWeather.wind.speed)} km / hours
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="w-full max-w-full flex flex-col gap-16 md:gap-7">
                            <div className="flex items-start w-full max-w-full gap-3">
                                <div>
                                    <LiaCloudSolid size={40} />
                                </div>
                                <div className="flex flex-col w-full max-w-full gap-2 h">
                                    <p className="font-semibold text-sm md:text-lg">Clouds</p>
                                    <p className="text-lg md:text-xl font-semibold">
                                        {dataListWeather?.clouds?.all !== undefined && Math.floor(dataListWeather.clouds.all)}%
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start w-full max-w-full gap-3">
                                <div>
                                    <WiHumidity size={40} />
                                </div>
                                <div className="flex flex-col w-full max-w-full gap-2 h">
                                    <p className="font-semibold text-sm md:text-lg">Humidity</p>
                                    <p className="text-lg md:text-xl font-semibold">
                                        {dataListWeather?.main?.humidity !== undefined && Math.floor(dataListWeather.main.humidity)}%
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}

        </>
    )
} 