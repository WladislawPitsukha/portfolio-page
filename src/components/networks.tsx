//TODO: Refactor this file like networks.tsx
//TODO: add new style with animations
//TODO: delete unused code
//TODO: delete links useless social networks
//TODO: stay & add more working social networks
//TODO: change the design of the cards

import "@/app/globals.css"
import TitleComponent from "./TitleComponent";
import '../style/animation.css'
import Image from "next/image";
import { SocialAccProps } from "@/types/typeSocialAcc";
import { ArraySocialAcc } from "@/constants/arrSocialAcc";

export const GridBlockItem: React.FC<SocialAccProps> = ({ icon, img, title }) => {
    const Icon = icon;

    return (
        <article className="articleCard flex flex-col justify-between rounded-md outline outline-4 outline-gray-600 items-center gap-5 p-5 w-40 h-40">
            <Icon className="text-blue-700 w-16 h-16" />
            <Image 
                src={img}
                alt="screenshort"
            />
            <h5 className="uppercase font-bold text-white word-spacing-wide">
                {title}
            </h5>
        </article>
    );
}

export const DivItem = ({i, j}: {i: number, j: number}) => {
    return(
        <div className="flex items-center justify-around">
            {ArraySocialAcc.slice(i, j).map((item, index) => (
                <GridBlockItem
                    key={index}
                    {...item}
                />
            ))}
        </div>
    )
}

export default function Networks() {
    return(
        <section id="Networks" className="flex flex-col justify-between h-screen w-auto p-10 gap-20">
            <TitleComponent 
                title="My social networks"
                description="Contact me on social media: LinkedIn, Instagram, Facebook, Telegram, and VKontakte"
                position="start"
            />
            <article className="flex flex-col justify-around gap-20 w-auto">
                <DivItem 
                    i={0}
                    j={3}
                />
                <DivItem 
                    i={3}
                    j={6}
                />
            </article>
        </section>
    )
}