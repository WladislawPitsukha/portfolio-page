import { IconType } from "react-icons"
import { MdAppShortcut } from "react-icons/md";
import { SiMaterialdesign } from "react-icons/si";
import { RiPagesFill } from "react-icons/ri";

export type ArrayServices = {
    Icon: IconType;
    title: string;
    text: string;
}

export const ArrayServices: ArrayServices[] = [
    {
        Icon: RiPagesFill,
        title: "Web-sites",
        text: "I create unique and adaptive websites that reflect your brand's personality and provide an excellent user experience across all devices. ",
    },
    {
        Icon: SiMaterialdesign,
        title: "Web-Design",
        text: "I specialize in developing powerful and interactive web applications that help automate processes and improve customer interaction. "
    },
    {
        Icon: MdAppShortcut,
        title: "Web-apps",
        text: "I offer custom solutions for creating web applications that align with your business goals and ensure high performance and security."
    }
]