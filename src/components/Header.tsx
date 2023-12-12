import { FiAlertTriangle, FiEye } from 'react-icons/fi'
import { IoBugOutline } from 'react-icons/io5'

function Header() {
    return (
        <header className="pax-8 flex h-18 items-center gap-x-6 border-b border-gray-200 bg-white">
            <button className="flex flex-col items-start rounded-xl px-6 py-2">
                <div className="flex items-center gap-x-2">
                    <span className="text-sm font-bold">RawrFlow</span>
                    <span className="text-xs font-bold opacity-75">
                        v4.0 - React 18.0.0
                    </span>
                </div>
                <div className="text-xs text-gray-400">Home page</div>
            </button>

            {/* Separator */}
            <div className="h-full w-px bg-gray-200" />

            <div className="flex flex-1 justify-end space-x-4 px-8">
                <button className="flex items-center justify-center gap-x-2 rounded-xl border-2 border-gray-100 p-1">
                    <span className="h-6 w-6 rounded-md bg-yellow-500 text-sm font-semibold leading-6 text-white">
                        1
                    </span>
                    <FiAlertTriangle className="h-6 w-6 stroke-current" />
                </button>
                <button className="flex items-center justify-center gap-x-2 rounded-xl border-2 border-gray-100 p-1">
                    <span className="h-6 w-6 rounded-md bg-red-400 text-sm font-semibold leading-6 text-white">
                        1
                    </span>
                    <IoBugOutline className="h-6 w-6 stroke-current" />
                </button>
                <button className="flex items-center justify-center gap-x-2 rounded-xl bg-gray-100 px-4 py-2">
                    <FiEye className="h-6 w-6 stroke-current text-gray-400" />
                    <span className="text-sm font-semibold leading-6">
                        Preview
                    </span>
                </button>
            </div>
        </header>
    )
}

export default Header
