"use client"

import { FaRegCirclePlay } from "react-icons/fa6";
import { IoMdDownload } from "react-icons/io";

function HomeSect() {
    return (
        <section className="flex bg-black w-100">
            <article className="flex flex-col items-start justify-between">
                <h1 className="text-white text-4xl uppercase">
                    Hi, I'm Vladislav!
                    <br />
                    Creative
                    <br />
                </h1>
                <h6 className="text-4xl uppercase text-green-500">
                    Web-developer
                </h6>
                <div className="flex items-center gap-8 mt-7">
                    <div className="flex items-center justify-center rounded-md gap-4 bg-green-400 px-8 py-5 text-black shadow-lg hover:bg-green-500 transition duration-300">
                        <h4 className="text-black">
                            Download CV
                        </h4>
                        <IoMdDownload className="text-black" />
                    </div>
                    <div className="flex items-center justify-center gap-3">
                        <FaRegCirclePlay className="text-green-400" />
                        <h5 className="text-gray-500">
                            Watch The Video
                        </h5>
                    </div>
                </div>
            </article>
        </section>
    );
}

export default HomeSect;