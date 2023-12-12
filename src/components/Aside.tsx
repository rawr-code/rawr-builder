/* eslint-disable @next/next/no-img-element */
import {
    FiDatabase,
    FiFileText,
    FiImage,
    FiLayout,
    FiLifeBuoy,
    FiPlusSquare,
    FiSettings,
} from 'react-icons/fi'

// Components
import Tooltip from './Tooltip'

function Aside() {
    return (
        <aside className="w-18 flex h-screen flex-col items-center border-r border-gray-200 bg-white">
            <div className="h-18 flex w-full items-center justify-center border-b border-gray-200">
                <svg
                    className="h-[21px] w-[25px] lg:h-[27.43px] lg:w-[33.41px]"
                    width="1em"
                    height="1em"
                    viewBox="0 0 25 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        className="fill-text"
                        d="M.668.947V20.65h13.287l-7.407-7.362v-1.494h11.496l-1.55 3.696-.885-2.148.002-.003.003.002-1.818.754 2.723 6.545L24.67.947H.668zm3.96 17.736H2.636v-6.549l1.992 1.972v4.577zm0-7.366L2.636 9.346V2.939h1.992v8.378zm4.567 7.366H6.548v-2.605l2.647 2.605zm9.666-8.88H6.548V2.939h2.606l2.08 5 1.822-.744-1.768-4.256h10.43l-2.857 6.864z"
                    ></path>
                </svg>
            </div>
            <nav className="flex flex-1 flex-col gap-y-4 pt-10">
                <a
                    href="#"
                    className="text-primary group relative rounded-xl bg-gray-100 p-2 hover:bg-gray-50"
                >
                    <FiPlusSquare className="h-6 w-6 stroke-current" />
                    <Tooltip>
                        Add elements <span className="text-gray-400">(A)</span>
                    </Tooltip>
                </a>
                <a
                    href="#"
                    className="group relative rounded-xl p-2 text-gray-400 hover:bg-gray-100"
                >
                    <FiLayout className="h-6 w-6 stroke-current" />
                    <Tooltip>
                        Layouts <span className="text-gray-400">(Y)</span>
                    </Tooltip>
                </a>
                <a
                    href="#"
                    className="group relative rounded-xl p-2 text-gray-400 hover:bg-gray-100"
                >
                    <FiDatabase className="h-6 w-6 stroke-current" />
                    <Tooltip>
                        Database <span className="text-gray-400">(D)</span>
                    </Tooltip>
                </a>
                <a
                    href="#"
                    className="group relative rounded-xl p-2 text-gray-400 hover:bg-gray-100"
                >
                    <FiFileText className="h-6 w-6 stroke-current" />
                    <Tooltip>
                        Assets <span className="text-gray-400">(S)</span>
                    </Tooltip>
                </a>
                <a
                    href="#"
                    className="group relative rounded-xl p-2 text-gray-400 hover:bg-gray-100"
                >
                    <FiImage className="h-6 w-6" />
                    <Tooltip>
                        Images <span className="text-gray-400">(I)</span>
                    </Tooltip>
                </a>
            </nav>
            <div className="flex flex-col items-center gap-y-4 py-10">
                <button className="group relative rounded-xl p-2 text-gray-400 hover:bg-gray-100">
                    <FiLifeBuoy className="h-6 w-6 stroke-current" />
                    <Tooltip>
                        Help <span className="text-gray-400">(H)</span>
                    </Tooltip>
                </button>
                <button className="group relative rounded-xl p-2 text-gray-400 hover:bg-gray-100">
                    <FiSettings className="h-6 w-6 stroke-current" />
                    <Tooltip>
                        Settings <span className="text-gray-400">(T)</span>
                    </Tooltip>
                </button>
                <a
                    href="https://github.com/rawr-code"
                    target="_blank"
                    className="mt-2 rounded-full bg-gray-100"
                >
                    <img
                        className="h-10 w-10 rounded-full object-cover"
                        src="https://github.com/rawr-code.png"
                        alt="profile picture"
                    />
                </a>
            </div>
        </aside>
    )
}

export default Aside
