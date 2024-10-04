
import { IconType } from "react-icons";
import { CgProfile } from "react-icons/cg";
import { TiHome } from "react-icons/ti";
import { HiPencilAlt } from "react-icons/hi";
import { HiChatBubbleOvalLeftEllipsis } from "react-icons/hi2";
import { PiHandbagSimpleFill, PiNetworkSlashFill } from "react-icons/pi";
import { TbLayoutCardsFilled } from "react-icons/tb";

export type typeFuncItemsProps = {
    Icon: IconType;
    text: string;
    onClick: () => any;
}

export function SectionScroll(id: string) {
    const section = document.getElementById(id);

    section?.scrollIntoView({behavior: 'smooth'});
}

export const arrayNavItemsProps: typeFuncItemsProps[] = [
    {
        Icon: TiHome,
        text: "Home",
        onClick: () => SectionScroll('Home')
    },
    {
        Icon: CgProfile,
        text: "About me",
        onClick: () => SectionScroll('About me')

    },
    {
        Icon: HiPencilAlt,
        text: "Services",
        onClick: () => SectionScroll('Services')
    },
    {
        Icon: PiHandbagSimpleFill,
        text: "Skills",
        onClick: () => SectionScroll('Skills')
    },
    {
        Icon: TbLayoutCardsFilled,
        text: "Portfolio",
        onClick: () => SectionScroll('Portfolio')
    },
    {
        Icon: PiNetworkSlashFill,
        text: "Networks",
        onClick: () => SectionScroll('Networks')
    },
    {
        Icon: HiChatBubbleOvalLeftEllipsis,
        text: "Contacts",
        onClick: () => SectionScroll('Contacts')
    }
];