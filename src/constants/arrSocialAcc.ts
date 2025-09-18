import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { SlSocialVkontakte } from "react-icons/sl";
import { FaTelegram, FaFacebook } from "react-icons/fa6";
import InstWork from '../assets/pic/inst_work.jpg'

import { SocialAccProps } from "@/types/typeSocialAcc";

export const ArraySocialAcc: SocialAccProps[] = [
    {
        icon: FaInstagram,
        img: InstWork,
        title: "@Me"
    },
    {
        icon: FaInstagram,
        img: InstWork,
        title: "@Work"
    },
    {
        icon: FaTelegram,
        img: InstWork,
        title: "Telegram"
    },
    {
        icon: FaFacebook,
        img: InstWork,
        title: "Facebook"
    },
    {
        icon: SlSocialVkontakte,
        img: InstWork,
        title: "Vkontacte"
    },
    {
        icon: FaLinkedinIn,
        img: InstWork,
        title: "LinkedIn"
    }
]