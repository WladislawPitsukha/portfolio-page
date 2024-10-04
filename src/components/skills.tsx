"use client";

import { useState } from "react";
import { DownloadCV } from "./home";
import TitleComponent from "./TitleComponent";
import { ButtonItems, educateBlocks } from "@/types/typeSkills";
import "../style/animation.css"

const SkillsSect = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section id="Skills" className="flex flex-col items-center justify-center gap-20 p-10 mt-10">
            <article className="flex flex-col items-center gap-10">
                <TitleComponent 
                    title="My Skills"
                    description="Crafting Stories through Design, Developing and Imagination"
                    position="center"
                />
                <div className="flex justify-between items-center gap-10">
                    <DownloadCV />
                    {ButtonItems.map((obj, index) => ( 
                        <div
                            key={index}
                            className={`flex items-center justify-center rounded-md gap-4 px-8 py-5 shadow-lg cursor-pointer transition duration-300 ${
                                activeIndex === index ? 'bg-blue-700' : 'bg-gray-500 hover:bg-blue-700'
                            }`}
                            onClick={() => setActiveIndex(index)}
                        >
                            <h4 className="font-bold text-white">
                                {obj.button}
                            </h4>
                        </div>
                    ))}
                </div>
            </article>
            <article className="flex justify-between relative w-full h-96 overflow-hidden">
                {educateBlocks.map((obj, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-start justify-between bg-gray-700 p-5 rounded-md shadow-lg w-80"
                    >
                        <h4 className="font-bold text-white">
                            {obj.title}
                        </h4>
                        <div className="flex flex-col justify-around gap-6 ">
                            {[obj.time, obj.specialization, obj.description].map((text, index) => (
                                <p 
                                    key={index}
                                    className="text-gray-300"
                                >
                                    {text}
                                </p>
                            ))}
                        </div>
                        <div className="flex items-center flex-col justify-between w-full gap-1">
                            <div className="w-full bg-gray-300 rounded-full h-4">
                                <div
                                    className="bg-blue-700 h-4 rounded-full"
                                    style={{ width: `${obj.percent}%` }}
                                ></div>
                            </div>
                            <p className="text-white">
                                {`${obj.percent}%`}
                            </p>
                        </div>
                    </div>
                ))}
            </article>
        </section>
    );
};

export default SkillsSect;