import { GoGoal } from "react-icons/go";
import { CiCoffeeCup } from "react-icons/ci";
import TitleComponent from "./TitleComponent";
import { IconType } from "react-icons";

function ArticleFact({
    Icon, 
    title,
    text,
}: {
    Icon: IconType, 
    title: string,
    text: string,
}) {
    return(
        <article className="flex flex-col relative items-start gap-5 mt-10">
            <div className="absolute top-0 left-10 w-16 h-16 bg-blue-500 rounded-full opacity-70"></div>
            <Icon 
                className="text-white w-24 h-24"
            />
            <h2 className="text-[28px] text-white">
                {title}
            </h2>
            <p className="text-gray-500">
                {text}
            </p>
        </article>
    )
}

function AboutMeSect() {
    return(
        <section id="About me" className="flex relative items-start justify-between flex-col p-10">
            <TitleComponent 
                title="About me"
                description="Crafting stories through design, developing and  
                innovation"
                position="start"
            />
            <ArticleFact 
                Icon={CiCoffeeCup}
                title="My Ambition"
                text="My ambitions lie in creating unique and adaptive websites that accurately reflect your brand's personality and provide an excellent user experience across all devices. I strive for excellence in developing powerful and interactive web applications that help automate processes and enhance customer interaction. My goal is to offer custom solutions for creating web applications that align with your business goals, ensuring high performance and security. I am constantly seeking innovation and improving my skills to provide clients with the best solutions and help them achieve success in the digital world."
            />
            <ArticleFact 
                Icon={GoGoal}
                title="My Purpose"
                text="My purpose is to create unique and adaptive websites that accurately reflect your brand's personality and provide an excellent user experience across all devices. I specialize in developing powerful and interactive web applications that help automate processes and improve customer interaction. I offer custom solutions for creating web applications that align with your business goals and ensure high performance and security. My mission is to help your business reach new heights in the digital world by providing the best solutions that ensure success and growth."
            />
        </section>
    )
}

export default AboutMeSect;