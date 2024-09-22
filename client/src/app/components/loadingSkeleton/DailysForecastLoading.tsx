export default function DailysForecastLoading() {
    return (
        <>
            <div className="px-7">
                {[...Array(5)].map((_, i) => (
                    <div
                        key={i}
                        className={`w-full max-w-full flex items-center justify-between p-5 ${i === 4 ? '' : 'border-b'}`}
                    >
                        <div className="bg-gray-300 animate-pulse h-5 w-1/4 rounded"></div>
                        <div className="bg-gray-300 animate-pulse h-20 w-[80px] rounded"></div>
                        <div className="bg-gray-300 animate-pulse h-5 w-1/4 rounded"></div>
                        <div className="bg-gray-300 animate-pulse h-5 w-1/4 rounded"></div>
                    </div>
                ))}
            </div>
        </>
    )
}