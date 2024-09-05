
import { IconType } from "react-icons";
import { CgProfile } from "react-icons/cg";
import { GrHomeRounded } from "react-icons/gr";
import { HiPencilAlt } from "react-icons/hi";
import { HiChatBubbleOvalLeftEllipsis } from "react-icons/hi2";
import { PiHandbagSimpleFill, PiNetworkSlashFill } from "react-icons/pi";
import { TbLayoutCardsFilled } from "react-icons/tb";

export type NavFuncItemsProps = {
    Icon: IconType;
    text: string;
    onClick: () => any;
}

export const arrayNavItemsProps: NavFuncItemsProps[] = [
    {
        Icon: GrHomeRounded,
        text: "Home",
        onClick: () => {}
    },
    {
        Icon: CgProfile,
        text: "About me",
        onClick: () => {}
    },
    {
        Icon: HiPencilAlt,
        text: "Service",
        onClick: () => {}
    },
    {
        Icon: PiHandbagSimpleFill,
        text: "Skills",
        onClick: () => {}
    },
    {
        Icon: TbLayoutCardsFilled,
        text: "Portfolio",
        onClick: () => {}
    },
    {
        Icon: HiChatBubbleOvalLeftEllipsis,
        text: "Contact",
        onClick: () => {}
    }, 
    {
        Icon: PiNetworkSlashFill,
        text: "Networks",
        onClick: () => {}
    }
];