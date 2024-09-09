"use client"

import '@/style/scroll.css'
import { FaRegCirclePlay } from "react-icons/fa6";
import { IoMdDownload } from "react-icons/io";

export const DownloadCV = () => {
    return(
        <div className="flex items-center justify-center rounded-md gap-4 bg-blue-700 px-8 py-5 shadow-lg">
            <h4 className="font-bold text-black">
                Download CV
            </h4>
            <IoMdDownload className="text-black" />
        </div>
    )
}

function HomeSect() {
    return (
        <section className="flex bg-black w-100 py-40 px-12">
            <article className="flex flex-col items-start justify-between gap-10 w-1/2">
                <div className="flex flex-col gap-4">
                    <h1 className="text-white text-4xl uppercase">
                        Hi, I'm Vladislav!
                        <br />
                        Creative
                        <br />
                    </h1>
                    <h6 className="font-bold text-4xl uppercase text-blue-700">
                        Web-developer
                    </h6>
                </div>
                <p className="font-bold text-gray-500">
                    I am a web developer and web designer with six months of experience. In my practice, I use modern technologies such as JavaScript, TypeScript, React, and Next.js, which allows me to create dynamic and responsive web applications. I am also proficient in Figma for designing attractive and user-friendly interfaces, and I am familiar with React libraries and Redux Toolkit for state management in applications. My experience enables me to effectively combine functionality and aesthetics in my projects.
                </p>
                <div className="flex items-center gap-8 mt-7">
                    <DownloadCV />
                    <div className="flex items-center justify-center gap-3">
                        <FaRegCirclePlay className="text-blue-700  w-11 h-11" />
                        <h5 className="font-bold text-gray-500">
                            Watch The Video
                        </h5>
                    </div>
                </div>
            </article>
        </section>
    );
}

export default HomeSect;