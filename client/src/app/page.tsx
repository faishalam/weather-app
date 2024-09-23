"use client"
import { useWeatherContext } from "./providers/WeatherProvider";
import { useEffect } from "react";
import HighlightSection from "./components/pages/homeComponents/HighlightSection";
import TodayForecastSection from "./components/pages/homeComponents/TodayForecastSection";
import AirConditionSection from "./components/pages/homeComponents/AirConditionSection";
import DailysForecastSection from "./components/pages/homeComponents/DailysForecastSection";
import ToggleSwitchTheme from "./components/ToggleSwitchTheme";
import ButtonComponents from "./components/button/ButtonComponents";
import { useThemeContext } from "./providers/ThemeProvider";

interface FormData {
  search: string;
}

export default function Home() {
  const {
    setSearch,
    register,
    handleSubmit,
    setLocation,
    dataListWeather,
    setIcon,
  } = useWeatherContext()

  const {
    theme
  } = useThemeContext()

  function formatDate(date: Date): string {
    const options: Intl.DateTimeFormatOptions = { weekday: 'long', day: 'numeric', month: 'long' };
    return date.toLocaleDateString('en-US', options);
  }

  const date: Date = new Date()
  const formattedDate: string = formatDate(date)


  const onSubmit = (data: FormData) => {
    if (data) {
      setSearch(data.search);
      setLocation(null);
    }
  };

  useEffect(() => {
    if (dataListWeather) {
      setIcon(dataListWeather?.weather[0].icon)
    }
  }, [dataListWeather])


  return (
    <body className={`flex min-h-screen flex-1 flex-col px-5 md:px-20 h-screen ${theme === 'light' ? 'bg-white text-black' : 'bg-gray-800 text-white'}`}>
      <header className="max-w-full w-full mt-4 flex justify-between gap-2">
        <div className="flex flex-col w-full max-w-full">
          <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-full flex items-center">
            <div className="w-full max-w-full md:max-w-4xl flex items-center justify-end overflow-hidden">
              <input
                type="text"
                className={`relative border max-w-full md:max-w-4xl p-2 px-5 w-full rounded-xl placeholder:text-sm placeholder:text-gray-400  ${theme === 'light' ? 'bg-white' : 'bg-gray-700 border-black'}`}
                placeholder="search for cities.."
                {...register('search')}
              />
              <ButtonComponents />
            </div>
          </form>
          <p className={`${theme === 'light' ? 'text-black' : 'text-white'} text-lg mt-3 px-3 block md:hidden`}>{formattedDate}</p>
        </div>

        <div className="flex md:max-w-full md:w-1/2 justify-end md:items-center gap-3">
          <p className={`${theme === 'light' ? 'text-black' : 'text-white'} text-lg hidden md:block`}>{formattedDate}</p>
          <ToggleSwitchTheme />
        </div>
      </header>

      <main className="text-black max-w-full w-full flex lg:flex-row flex-col gap-5 py-4 h-full">
        <div className="max-w-4xl w-full flex flex-col items-center justify-between gap-5">
          <section className="max-w-full w-full flex items-center px-4 md:px-20 h-full">
            <HighlightSection />
          </section>

          <section className={`overflow-x-scroll md:overflow-hidden max-w-full w-full border rounded-2xl py-7 shadow-lg h-full  ${theme === 'light' ? 'bg-white' : 'bg-gray-700 text-white'}`}>
            <TodayForecastSection />
          </section>

          <section className={`max-w-full w-full border rounded-2xl p-7 shadow-lg h-full ${theme === 'light' ? 'bg-white' : 'bg-gray-700 text-white'}`}>
            <AirConditionSection />
          </section>
        </div>

        <aside className={`w-full lg:w-2/4 max-w-full border rounded-2xl shadow-lg ${theme === 'light' ? 'bg-white' : 'bg-gray-700 text-white'}`}>
          <DailysForecastSection />
        </aside>
      </main>
    </body>

  );
}