import { ArrayBlocksInfo, BlockInfo } from "@/types/typeBlockInfo";
import ContactForm from "./contactForm";

function ContactSect() {
    const BlockInfo: React.FC<BlockInfo> = ({index, Icon, title, text, link}) => {
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
        <section id="Contacts" className="flex flex-col p-10 rounded-lg shadow-md gap-10">
            <article className="flex gap-5 justify-between">
                {ArrayBlocksInfo.map(obj => (
                    <BlockInfo 
                        index={obj.index}
                        Icon={obj.Icon}
                        title={obj.title}
                        text={obj.text}
                        link={obj.link}
                    />
                ))}
            </article>
            <ContactForm />
        </section>
    );
}

export default ContactSect;