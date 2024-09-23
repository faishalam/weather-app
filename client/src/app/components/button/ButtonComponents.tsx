import { useThemeContext } from "@/app/providers/ThemeProvider"

export default function ButtonComponents() {
    const {
        theme
    } = useThemeContext()

    return (
        <>
            <button
                type="submit"
                className={`absolute flex max-w-full md:max-w-4xl p-2 px-4 rounded-r-xl text-white ease-in-out transition-all  ${theme === "light" ? "bg-gray-400 hover:bg-gray-500" : "bg-gray-900 hover:bg-gray-800 border border-black" }`}
            >
                <span className="">Search</span>
            </button>
        </>
    )
}