export default function TodayForecastLoading() {
    return (
        <div className="w-full max-w-full grid grid-cols-6">
            {Array.from({ length: 6 }).map((_, i) => (
                <div
                    className={`flex flex-col gap-4 justify-center items-center ${i !== 5 ? 'border-r' : ''}`}
                    key={i}
                >
                    <div className="h-4 w-16 bg-gray-300 animate-pulse rounded"></div>
                    <div className="w-[80px] h-[80px] bg-gray-300 animate-pulse rounded"></div>
                    <div className="h-8 w-16 bg-gray-300 animate-pulse rounded"></div>
                </div>
            ))}
        </div>
    );
}
