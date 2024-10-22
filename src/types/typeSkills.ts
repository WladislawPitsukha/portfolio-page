import calculateYearPercentage from "@/utils/calculaterPer";

export type BlockProps = {
    title: string;
    time: string;
    specialization: string;
    description: string;
    percent: number;
}

export type ButtonProps = {
    button: string;
}

export const ButtonItems: ButtonProps[] = [
    { button: "Education" },
    { button: "Biography" },
    { button: "Experience" }
];

let nowTime = new Date();
const curDate = `${(nowTime.getMonth() + 1).toString().padStart(2, '0')}-${nowTime.getFullYear()}`

export const educateBlock: BlockProps[] = [
    {
        title: "Plekhanov University of Economics",
        time: "09.2019-07.2024",
        specialization: "Business Analyst",
        description: "A comprehensive program focused on developing analytical skills and business acumen, preparing students for a career in business analysis.",
        percent: calculateYearPercentage("09.2019-07.2024")
    },
    {
        title: 'Courses "Frontend Developer Entry Level"',
        time: "10.2020-05.2021",
        specialization: "Frontend specialist",
        description: "An introductory course designed to equip students with the fundamental skills required for entry-level positions in frontend development.",
        percent: calculateYearPercentage("10.2020-05.2021")
    },
    {
        title: 'Courses "Frontend Developer"',
        time: "10.2022-05.2023",
        specialization: "Frontend specialist",
        description: "An advanced course aimed at enhancing expertise in frontend technologies, covering modern frameworks and best practices in the industry.",
        percent: calculateYearPercentage("10.2022-05.2023")
    }
]

export const experienceBlock: BlockProps[] = [
    {
        title: "Upwork",
        time: "01.2023-present time",
        specialization: "",
        description: "Developing modern web applications using React, Next.js, and TypeScript. Creating responsive and interactive user interfaces, optimizing performance, and ensuring high code quality.",
        percent: calculateYearPercentage(`01.2023-${curDate}`)
    }, 
    {
        title: "Top Soft",
        time: "11.2022-07.2023",
        specialization: "Frontend Developer",
        description: "Worked on the development and maintenance of web applications, using modern frontend development technologies. Participated in performance optimization and user interface improvements.",
        percent: calculateYearPercentage("11.2022-07.2023")
    },
    {
        title: "Praca.pl",
        time: "04.2024-present time",
        specialization: "Frontend Developer",
        description: "Developing new features for the job search web platform. Focusing on creating a responsive and accessible interface, as well as optimizing application performance.",
        percent: calculateYearPercentage(`04.2024-${curDate}`)
    }
]