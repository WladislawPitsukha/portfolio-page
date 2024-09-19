import { IconType } from "react-icons";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { SlSocialVkontakte } from "react-icons/sl";
import { FaTelegram, FaFacebook } from "react-icons/fa6";

export type SocialAcc = {
    Icon: IconType;
    title: string;
}

export const ArraySocialAcc: SocialAcc[] = [
    {
        Icon: FaInstagram,
        title: "@Me"
    },
    {
        Icon: FaInstagram,
        title: "@Work"
    },
    {
        Icon: FaTelegram,
        title: "Telegram"
    },
    {
        Icon: FaFacebook,
        title: "Facebook"
    },
    {
        Icon: SlSocialVkontakte,
        title: "Vkontacte"
    },
    {
        Icon: FaLinkedinIn,
        title: "LinkedIn"
    }
]