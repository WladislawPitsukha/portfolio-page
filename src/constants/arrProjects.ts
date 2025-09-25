import { PortfolioItemProps } from "@/types/typeProjects";

//TODO: finish this file
//TODO: check all links to projects
//TODO: add pictures of projects (how is looked like)

import { CiBoxList } from "react-icons/ci";
import { GiCellarBarrels } from "react-icons/gi";
import { FaBitcoin } from "react-icons/fa6";

export const portfolioItems: PortfolioItemProps[] = [
    {
        id: 1,
        icon: CiBoxList,
        main: {
            title: "To-do List",
            description: "A modern task management application with user authentication",
            link: "https://github.com/WladislawPitsukha/to-do_avatar",
        },
        image: "/todo-list.jpg",
    },
    {
        id: 2,
        icon: GiCellarBarrels,
        main: {
            title: "Alex Bar",
            description: "An elegant website for a premium bar establishment",
            link: "https://github.com/WladislawPitsukha/alex_bar",
        },
        image: "/alex-bar.jpg",
    },
    {
        id: 3,
        icon: FaBitcoin,
        main: {
            title: "Crappo App",
            description: "Cryptocurrency tracking and management platform",
            link: "https://github.com/WladislawPitsukha/crappo-app",
        },
        image: "/crappo-app.jpg",
    },
    {
        id: 4,
        icon: GiCellarBarrels,
        main: {
            title: "E-commerce",
            description: "Full-featured online shopping platform",
            link: "https://github.com/WladislawPitsukha/e-commerce",
        },
        image: "/e-commerce.jpg",
    },
    {
        id: 5,
        icon: GiCellarBarrels,
        main: {
            title: "Hydra Landing",
            description: "Modern landing page for VR technology company",
            link: "https://github.com/WladislawPitsukha/hydra-landing",
        },
        image: "/hydra-landing.jpg",
    }
];