import "@/app/globals.css"

import { FuncItemsProps } from "@/types/typeFuncItems";

export default function NavFuncItems({ icon, text, onClick, isActive }: FuncItemsProps & {isActive: boolean}) {
    const Icon = icon;
    
    return (
        <article 
            onClick={onClick} 
            className={`flex items-center cursor-pointer rounded-lg mx-4 my-2 p-2 transition-all duration-300 transform hover:translate-x-2 ${
                isActive 
                    ? 'bg-blue-600 shadow-lg' 
                    : 'bg-gray-700 hover:bg-gray-600'
            }`}
        >
            <div className={`flex items-center justify-center rounded-lg transition-all duration-300 ${
                isActive ? "bg-white" : "bg-gray-800"
            } w-10 h-10`}>
                <Icon className={`w-5 h-5 transition-colors duration-300 ${
                    isActive ? "text-blue-600" : "text-white"
                }`} />
            </div>
            <span className={`ml-4 text-sm font-medium transition-all duration-300 ${
                isActive ? "text-white font-bold" : "text-gray-300"
            }`}>
                {text}
            </span>
        </article>
    );
};