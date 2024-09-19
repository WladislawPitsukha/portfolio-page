"use client";

import { useState } from "react";
import { DownloadCV } from "./home";
import TitleComponent from "./TitleComponent";

const ButtonItems = [
    { button: "Education" },
    { button: "Biography" },
    { button: "Experience" }
];

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
            <article className="relative w-full h-96 overflow-hidden">
                {ButtonItems.map((_, index) => (
                    <div
                        key={index}
                        className={`absolute top-0 left-0 w-full h-full transition-transform duration-700 ease-in-out ${
                            activeIndex === index ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
                        }`}
                    >
                        <h2 className="text-3xl font-extrabold text-white">
                            Content for {ButtonItems[index].button}
                        </h2>
                    </div>
                ))}
            </article>
        </section>
    );
};

export default SkillsSect;