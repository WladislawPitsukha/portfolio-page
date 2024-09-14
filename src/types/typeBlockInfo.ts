import { IconType } from "react-icons";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdContactMail } from "react-icons/md";
import { BsFillPhoneVibrateFill } from "react-icons/bs";

export type BlockInfo = {
    index: number;
    Icon: IconType;
    title: string;
    text: string;
    link: string;
}

export const ArrayBlocksInfo:BlockInfo[]  = [
    {
        index: 1,
        Icon: BsFillPhoneVibrateFill,
        title: "Phone",
        text: "You can contact me by phone for more information or to discuss your questions. I will be happy to help!",
        link: "+48507667575",
    },
    {
        index: 2,
        Icon: FaMapLocationDot,
        title: "Location",
        text: "Currently, I am in Warsaw, but from time to time I visit Krakow and Gdansk.",
        link: "View on map",
    },
    {
        index: 3,
        Icon: MdContactMail,
        title: "Monday-Sunday",
        text: "You can contact me via email for any questions or proposals. I am always happy to help and will respond to your messages as soon as possible.",
        link: "pitsukhavladislav@gmail.com",
    },
]