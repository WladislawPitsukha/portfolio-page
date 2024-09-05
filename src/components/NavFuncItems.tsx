import { NavFuncItemsProps } from "@/types/NavFuncItemsProps";

const NavFuncItems: React.FC<NavFuncItemsProps> = ({ Icon, text, onClick }) => {
    return (
        <article onClick={onClick} className="flex border border-gray-700 rounded-lg h-12 my-4 mx-8">
            <div className="flex items-center justify-center border rounded-lg border-gray-700 bg-gray-700 w-12 h-12 p-2">
                <Icon className="text-white w-6 h-6" />
            </div>
            <div className="flex items-center justify-start px-5 h-full w-28">
                <h6 className="text-white uppercase text-[12px]">
                    {text}
                </h6>
            </div>
        </article>
    );
};

export default NavFuncItems;