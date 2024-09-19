import { typeFuncItemsProps } from "@/types/typeFuncItemsProps";
import "@/app/globals.css"

const NavFuncItems: React.FC<typeFuncItemsProps & {isActive: boolean}> = ({ Icon, text, onClick, isActive }) => {
    return (
        <article 
            onClick={onClick} 
            className={`flex outline navSection items-center cursor-pointer outline-black rounded-3xl h-12 my-4 mx-8 ${isActive ? 'bg-white' : 'bg-gray-500 transition-all duration-300'}`}
        >
            <div className={`flex items-center justify-center outline rounded-3xl transition-all duration-300 ${isActive ? "bg-black" : "bg-gray-700"}  w-12 h-12 p-2`}>
                <Icon className={`${isActive ? "text-white" :"text-black"} w-6 h-6`} />
            </div>
            <div className="flex items-center justify-start px-5 h-12 w-28">
                <h6 className={`${isActive ? "font-bold": "font-normal"} text-black uppercase text-[12px] font-bold`} >
                    {text}
                </h6>
            </div>
        </article>
    );
};

export default NavFuncItems;