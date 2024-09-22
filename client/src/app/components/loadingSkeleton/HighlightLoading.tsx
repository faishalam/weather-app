export default function HighlightLoading() {
    return (
        <>
            <div className="flex w-full max-w-full gap-14">
                <div className="flex flex-col gap-24 w-full max-w-full">
                    <div className="flex flex-col w-full max-w-full">
                        <div className="bg-gray-300 h-10 w-3/4 rounded mb-2 animate-pulse"></div>
                        <div className="bg-gray-300 h-5 w-1/2 rounded animate-pulse"></div>
                    </div>

                    <div className="flex flex-col w-full max-w-full">
                        <div className="bg-gray-300 h-10 w-[150px] rounded mb-2"></div>
                    </div>
                </div>

                <div>
                    <div className="h-[150px] w-[150px] rounded-full shadow-md bg-gray-300 animate-pulse"></div>
                </div>
            </div>
        </>
    )
}