import { ArrayServices } from "@/types/typeArrayServices";

const ServicesSect = () => {
    return(
        <section className="flex flex-col justify-between items-center gap-20 p-10">
            <article className="flex flex-col items-center">
                <h4 className="font-bold uppercase text-blue-700 text-[24px]">
                    My services
                </h4>
                <h1 className="font-bold text-white text-[64px] text-center">
                    Bringing your vision to life with 
                    <br />
                    precision and passion
                </h1>
            </article>
            <article className="flex items-center justify-around gap-10">
                {ArrayServices.map((obj, index) =>(
                    <ItemServices key={index} Icon={obj.Icon} title={obj.title} text={obj.text} />
                ))}
            </article>
        </section>
    )
}

export default ServicesSect;


export const ItemServices: React.FC<ArrayServices> = ({Icon, title, text}) => {
    return(
        <div className="relative w-auto h-auto rounded-sm pt-16 px-9 pb-9 bg-gray-700">
            <div className="absolute -top-10 left-8 w-20 h-20 rounded-md flex items-center justify-center p-3 bg-blue-700">
                <Icon 
                    className="w-14 h-14 text-black"
                />
            </div>
            <div className="flex flex-col items-start justify-between gap-5">
                <h2 className="text-font text-white uppercase">
                    {title}
                </h2>
                <h4 className="text-left text-gray-300">
                    {text}
                </h4>
            </div>
        </div>
    )
}