interface TooltipProps {
    children: React.ReactNode
}

function Tooltip({ children }: TooltipProps) {
    return (
        <div className="absolute inset-y-0 left-12 hidden items-center group-hover:flex">
            <div className="relative whitespace-nowrap rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 drop-shadow-lg">
                <div className="absolute inset-0 -left-1 flex items-center">
                    <div className="h-2 w-2 rotate-45 bg-white" />
                </div>
                {children}
            </div>
        </div>
    )
}

export default Tooltip
