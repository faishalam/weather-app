export default function AirConditionLoading() {
    return (
        <>
            <div className="font-semibold text-gray-500 text-sm mb-7">
                <p>AIR CONDITIONS</p>
            </div>

            <div className="max-w-full w-full flex flex-row justify-start items-start">
                <div className="w-full max-w-full flex flex-col gap-7">
                    {/* Skeleton for Feels Like */}
                    <div className="flex items-start w-full max-w-full gap-3 animate-pulse">
                        <div className="bg-gray-300 rounded-full w-10 h-10" />
                        <div className="flex flex-col w-full max-w-full gap-2">
                            <div className="bg-gray-300 h-4 w-24 rounded" />
                            <div className="bg-gray-300 h-8 w-16 rounded" />
                        </div>
                    </div>

                    {/* Skeleton for Wind */}
                    <div className="flex items-start w-full max-w-full gap-3 animate-pulse">
                        <div className="bg-gray-300 rounded-full w-10 h-10" />
                        <div className="flex flex-col w-full max-w-full gap-2">
                            <div className="bg-gray-300 h-4 w-16 rounded" />
                            <div className="bg-gray-300 h-8 w-16 rounded" />
                        </div>
                    </div>
                </div>

                <div className="w-full max-w-full flex flex-col gap-7">
                    {/* Skeleton for Clouds */}
                    <div className="flex items-start w-full max-w-full gap-3 animate-pulse">
                        <div className="bg-gray-300 rounded-full w-10 h-10" />
                        <div className="flex flex-col w-full max-w-full gap-2">
                            <div className="bg-gray-300 h-4 w-16 rounded" />
                            <div className="bg-gray-300 h-8 w-16 rounded" />
                        </div>
                    </div>

                    {/* Skeleton for Humidity */}
                    <div className="flex items-start w-full max-w-full gap-3 animate-pulse">
                        <div className="bg-gray-300 rounded-full w-10 h-10" />
                        <div className="flex flex-col w-full max-w-full gap-2">
                            <div className="bg-gray-300 h-4 w-16 rounded" />
                            <div className="bg-gray-300 h-8 w-16 rounded" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}