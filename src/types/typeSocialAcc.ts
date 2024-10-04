import { IconType } from "react-icons";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { SlSocialVkontakte } from "react-icons/sl";
import { FaTelegram, FaFacebook } from "react-icons/fa6";
import InstWork from '../assets/pic/inst_work.jpg'

export type SocialAcc = {
    Icon: IconType;
    img: any;
    title: string;
}

export const ArraySocialAcc: SocialAcc[] = [
    {
        Icon: FaInstagram,
        img: InstWork,
        title: "@Me"
    },
    {
        Icon: FaInstagram,
        img: InstWork,
        title: "@Work"
    },
    {
        Icon: FaTelegram,
        img: InstWork,
        title: "Telegram"
    },
    {
        Icon: FaFacebook,
        img: InstWork,
        title: "Facebook"
    },
    {
        Icon: SlSocialVkontakte,
        img: InstWork,
        title: "Vkontacte"
    },
    {
        Icon: FaLinkedinIn,
        img: InstWork,
        title: "LinkedIn"
    }
]