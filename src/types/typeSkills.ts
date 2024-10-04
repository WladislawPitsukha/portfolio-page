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

export const educateBlocks: BlockProps[] = [
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