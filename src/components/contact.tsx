//TODO: Refactor this file like networks.tsx
//TODO: add new style with animations
//TODO: change style of contact form


import { arrayBlocksInfo } from "@/constants/arrBlockInfo";
import ContactForm from "./contactForm";
import { BlockInfoProps } from "@/types/typeBlockInfo";

export default function ContactSect() {
    const BlockInfo: React.FC<BlockInfoProps> = ({index, icon, main}) => {
        const { title, text, link } = main;
        const Icon = icon;

        return(
            <div key={index} className="flex flex-col items-center justify-between gap-5 p-5 bg-gray-800 rounded-md w-96">
                <Icon 
                    className="text-blue-700 w-16 h-16"
                />
                <h1 className="font-bold uppercase text-white">
                    {title}
                </h1>
                <p className="font-bold text-white">
                    {text}
                </p>
                <h3 className="font-bold text-white cursor-pointer">
                    {link}
                </h3>
            </div>
        )
    }

    return (
        <section id="Contacts" className="flex flex-col p-10 h-screen w-auto rounded-lg shadow-md gap-10">
            <article className="flex gap-5 justify-between">
                {arrayBlocksInfo.map((obj, index) => (
                    <BlockInfo 
                        index={obj.index}
                        icon={obj.icon}
                        main={obj.main}
                    />
                ))}
            </article>
            <ContactForm />
        </section>
    );
}