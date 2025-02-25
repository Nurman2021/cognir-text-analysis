import { TextHoverEffect } from "../ui/text-hover"

export function EmailCard() {
    return (
        <section className="w-full mx-auto px-5 lg:px-0">
            <div className="bg-gray-950 dark p-6 md:p-10 rounded-b-3xl mx-auto flex flex-col gap-y-5 justify-center items-center relative">
                <TextHoverEffect text="COGNIR" />
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-wide text-white text-center">Get the latest updates
                </h3>
                <h4 className="text-white font-light">Sign up for news on the latest innovations from Cognir AI.</h4>
                <div
                    className="input-form max-w-2xl mx-auto w-full flex flex-col md:flex-row gap-y-2 items-center justify-center lg:justify-start gap-x-5 lg:gap-x-5 mt-5">
                    <div className="w-full">
                        <input type="text" placeholder="Enter your email address"
                            className="py-2.5 px-5 placeholder:text-sm rounded-full bg-white/20 border border-zinc-400/40 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500/50 ring-offset-2 ring-offset-white transition duration-200" />
                    </div>
                    <button
                        className="bg-white w-full md:w-1/3 hover:shadow-md focus:ring-2 focus:ring-indigo-500/50 ring-offset-2 ring-offset-[#EAE8FF] hover:drop-shadow transition duration-200 lg:w-1/3 text-zinc-800 text-sm rounded-full px-5 py-2.5 shadow-md group font-clash font-[500]">
                        Send an Email
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024"
                            className="inline-block ml-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 0 0 0-48.4z">
                            </path>
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    )
}

