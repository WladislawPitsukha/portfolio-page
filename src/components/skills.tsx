"use client";

import { useEffect, useState } from "react";
import { DownloadCV } from "./home";
import TitleComponent from "./TitleComponent";
import { ButtonItems, educateBlock, experienceBlock } from "@/types/typeSkills";
import "../style/animation.css"
import ArtBlockSkill from "./artBlockSkill";
import ArtBiography from "./artBiography";

const SkillsSect = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [activeArticle, setActiveArticle] = useState<string>("Education");

    const renderActiveSection = () => {
        switch(activeArticle) {
            case "Education":
                return <ArtBlockSkill array={educateBlock} />;
            case "Biography":
                return <ArtBiography />;
            case "Experience":
                return <ArtBlockSkill array={experienceBlock} />;
            default:
                return <ArtBlockSkill array={educateBlock} />;
            }
    }

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
                            onClick={() => {
                                setActiveIndex(index)
                                setActiveArticle(obj.button);
                            }}
                        >
                            <h4 className="font-bold text-white">
                                {obj.button}
                            </h4>
                        </div>
                    ))}
                </div>
            </article>
            {renderActiveSection()}
        </section>
    );
};

export default SkillsSect;