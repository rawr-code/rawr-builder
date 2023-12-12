/* eslint-disable @next/next/no-img-element */
import { FiChevronDown, FiEye, FiUsers } from 'react-icons/fi'

// Components
import Accordion from './Accordion'

function Controls() {
    return (
        <aside className="flex h-screen w-[300px] flex-col border-l border-gray-200 bg-white">
            <div className="flex h-18 items-center gap-x-4 border-b border-gray-200 px-6">
                <button className="flex items-center justify-center gap-x-2 rounded-xl bg-gray-100 px-4 py-2">
                    <FiUsers className="h-5 w-5 stroke-current text-gray-400" />
                    <span className="text-sm font-semibold leading-6">
                        Invite
                    </span>
                </button>
                <button className="flex flex-1 items-center justify-center gap-x-2 rounded-xl bg-primary px-4 py-2 text-sm leading-6 text-white">
                    Publish
                </button>
            </div>
            <div className="flex flex-1 flex-col overflow-y-scroll">
                <Accordion title="spacing">
                    <div className="relative flex items-center rounded-xl border-2 border-dashed border-gray-200 px-12 py-10">
                        <span className="absolute left-2 top-2 text-[10px] uppercase text-gray-400">
                            margin
                        </span>
                        <span className="absolute bottom-12 right-14 text-[10px] uppercase text-gray-400">
                            padding
                        </span>
                        <div className="relative w-full">
                            <div className="absolute inset-x-0 top-0 flex -translate-y-1/2 flex-col items-center gap-2">
                                <input
                                    className="h-4 w-4 text-center text-sm outline-none"
                                    defaultValue={20}
                                />
                                <div className="h-2 w-2 border-2 border-primary bg-white" />
                                <input
                                    className="h-4 w-4 text-center text-sm outline-none"
                                    defaultValue={0}
                                />
                            </div>
                            <div className="absolute inset-y-0 right-0 flex translate-x-1/2 items-center gap-2">
                                <input
                                    className="h-4 w-4 text-center text-sm outline-none"
                                    defaultValue={0}
                                />
                                <div className="h-2 w-2 border-2 border-primary bg-white" />
                                <input
                                    className="h-4 w-4 text-center text-sm outline-none"
                                    defaultValue={0}
                                />
                            </div>
                            <div className="absolute inset-x-0 bottom-0 flex translate-y-1/2 flex-col items-center gap-2">
                                <input
                                    className="h-4 w-4 text-center text-sm outline-none"
                                    defaultValue={0}
                                />
                                <div className="h-2 w-2 border-2 border-primary bg-white" />
                                <input
                                    className="h-4 w-4 text-center text-sm outline-none"
                                    defaultValue={20}
                                />
                            </div>
                            <div className="absolute inset-y-0 left-0 flex -translate-x-1/2 items-center gap-2">
                                <input
                                    className="h-4 w-4 text-center text-sm outline-none"
                                    defaultValue={0}
                                />
                                <div className="h-2 w-2 border-2 border-primary bg-white" />
                                <input
                                    className="h-4 w-4 text-center text-sm outline-none"
                                    defaultValue={0}
                                />
                            </div>
                            <div className="h-24 w-full rounded-xl border-2 border-primary px-10 py-8">
                                <div className="h-full w-full rounded bg-gray-200"></div>
                            </div>
                        </div>
                    </div>
                </Accordion>
                <Accordion title="size">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <div className="relative">
                                <div className="absolute inset-y-0 flex items-center px-4">
                                    <span className="text-sm text-gray-400">
                                        W
                                    </span>
                                </div>
                                <input
                                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 text-right text-sm font-semibold leading-6"
                                    type="text"
                                    defaultValue="Auto"
                                />
                            </div>
                        </div>
                        <div>
                            <div className="relative">
                                <div className="absolute inset-y-0 flex items-center px-4">
                                    <span className="text-sm text-gray-400">
                                        H
                                    </span>
                                </div>
                                <input
                                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 text-right text-sm font-semibold leading-6"
                                    type="text"
                                    defaultValue="Auto"
                                />
                            </div>
                        </div>
                        <div>
                            <div className="relative">
                                <div className="absolute inset-y-0 flex items-center px-4">
                                    <span className="text-sm text-gray-400">
                                        Min W
                                    </span>
                                </div>
                                <input
                                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 text-right text-sm font-semibold leading-6"
                                    type="text"
                                    defaultValue="Auto"
                                />
                            </div>
                        </div>
                        <div>
                            <div className="relative">
                                <div className="absolute inset-y-0 flex items-center px-4">
                                    <span className="text-sm text-gray-400">
                                        Max W
                                    </span>
                                </div>
                                <input
                                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 text-right text-sm font-semibold leading-6"
                                    type="text"
                                    defaultValue="Auto"
                                />
                            </div>
                        </div>
                        <div>
                            <div className="relative">
                                <div className="absolute inset-y-0 flex items-center px-4">
                                    <span className="text-sm text-gray-400">
                                        Max W
                                    </span>
                                </div>
                                <input
                                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 text-right text-sm font-semibold leading-6"
                                    type="text"
                                    defaultValue="Auto"
                                />
                            </div>
                        </div>
                        <div>
                            <div className="relative">
                                <div className="absolute inset-y-0 flex items-center px-4">
                                    <span className="text-sm text-gray-400">
                                        Max H
                                    </span>
                                </div>
                                <input
                                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 text-right text-sm font-semibold leading-6"
                                    type="text"
                                    defaultValue="Auto"
                                />
                            </div>
                        </div>
                        <div className="col-span-2">
                            <button className="relative w-full rounded-xl border border-gray-200 bg-gray-50 py-2 pl-4 pr-10 text-right">
                                <div className="absolute inset-y-0 flex items-center px-4">
                                    <span className="text-sm text-gray-400">
                                        Overflow
                                    </span>
                                </div>
                                <span className="flex items-center justify-end gap-x-2 text-sm font-semibold leading-6">
                                    <FiEye className="h-5 w-5 stroke-current text-gray-400" />
                                    <span>Invisible</span>
                                </span>
                                <div className="absolute inset-y-0 right-0 flex items-center px-4">
                                    <FiChevronDown className="h-5 w-5 stroke-current text-gray-400" />
                                </div>
                            </button>
                        </div>
                    </div>
                </Accordion>
            </div>
        </aside>
    )
}

export default Controls
