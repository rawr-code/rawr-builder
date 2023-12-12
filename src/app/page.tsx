/* eslint-disable @next/next/no-img-element */
import Aside from '@/components/Aside'
import Controls from '@/components/Controls'
import Header from '@/components/Header'

// Icons
import { FiMenu, FiEdit2 } from 'react-icons/fi'

function Home() {
    return (
        <div className="flex bg-gray-100 font-sans text-gray-900">
            <Aside />
            <div className="flex h-screen flex-1 flex-col">
                <Header />
                <main className="flex-1 overflow-y-scroll px-12">
                    <div className="my-12 bg-white">
                        <nav className="flex items-center justify-end px-12 py-6">
                            <div className="flex gap-x-6">
                                <button className="bg-primary rounded-full px-8 py-3 text-white">
                                    Hire Me
                                </button>
                                <button className="p-2">
                                    <FiMenu className="h-6 w-6 stroke-current" />
                                </button>
                            </div>
                        </nav>
                        <section className="py-16">
                            <div className="px-12">
                                <div className="relative">
                                    <div className="border-primary pointer-events-none absolute inset-0 block border-2 ">
                                        <div className="absolute -translate-y-full pl-2">
                                            <div className="bg-primary flex items-center gap-x-2 rounded-t-lg px-3 py-1 text-white">
                                                <span className="text-sm">
                                                    H1 - hero title
                                                </span>
                                                <FiEdit2 className="h-4 w-4 stroke-current" />
                                            </div>
                                        </div>
                                        <div className="border-primary absolute left-0 top-0 h-2 w-2 -translate-x-full -translate-y-full border-2"></div>
                                        <div className="border-primary absolute right-0 top-0 h-2 w-2 -translate-y-full translate-x-full border-2"></div>
                                        <div className="border-primary absolute bottom-0 right-0 h-2 w-2 translate-x-full translate-y-full border-2"></div>
                                        <div className="border-primary absolute bottom-0 left-0 h-2 w-2 -translate-x-full translate-y-full border-2"></div>
                                        <div className="absolute inset-x-0 top-0 flex -translate-y-1/2 items-center justify-center">
                                            <div className="border-primary h-2 w-2 border-2 bg-white"></div>
                                        </div>
                                        <div className="absolute inset-x-0 bottom-0 flex translate-y-1/2 items-center justify-center">
                                            <div className="border-primary h-2 w-2 border-2 bg-white"></div>
                                        </div>
                                    </div>
                                    <h1
                                        className="max-w-3xl text-4xl font-bold leading-[1.4] outline-none"
                                        contentEditable
                                    >
                                        Frontend Engineer, Backend, Mobile &
                                        Video Game Developer
                                    </h1>
                                </div>
                                <p className="mt-4 w-4/5 text-lg leading-loose text-gray-400">
                                    I design and code beautyfully simple code I
                                    design and beautyfully simple things, and I
                                    love what I do design and code.
                                </p>
                            </div>
                            <div className="flex items-center gap-4 px-12 pt-8">
                                <button className="bg-primary rounded-full px-8 py-5 font-semibold text-white">
                                    Let’s chat!
                                </button>
                                <button className="text-primary rounded-full border border-gray-200 px-8 py-5 font-semibold">
                                    Check my work
                                </button>
                            </div>
                        </section>
                        <section className="bg-gray-50 py-16">
                            <div className="px-12">
                                <span className="text-sm uppercase text-gray-400">
                                    About me
                                </span>
                                <div className="flex items-center justify-between">
                                    <h2 className="max-w-3xl text-4xl font-bold leading-[1.4]">
                                        Github profile
                                    </h2>
                                    <a
                                        href="https://www.emmanuelvillegas.com/"
                                        target="_blank"
                                        className="text-primary rounded-full bg-white px-8 py-5 font-semibold"
                                    >
                                        Visit my website
                                    </a>
                                </div>
                            </div>
                            <div className="px-12 pt-8">
                                <div className="flex w-full items-center overflow-hidden bg-gray-100">
                                    <img
                                        className=" w-full object-cover"
                                        src="https://raw.githubusercontent.com/rawr-code/rawr-code/main/banner.png"
                                        alt="banner"
                                    />
                                </div>
                            </div>
                        </section>
                    </div>
                </main>
            </div>
            <Controls />
        </div>
    )
}

export default Home
