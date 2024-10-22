import { BlockProps } from "@/types/typeSkills";

const ArtBlockSkill = ({array}: {array: BlockProps[]}) => {
    return(
        <article className="flex justify-between relative w-full h-96 overflow-hidden">
            {array.map((obj, index) => (
                <div
                    key={index}
                    className="flex flex-col items-start justify-between bg-gray-700 p-5 rounded-md shadow-lg w-80"
                >
                    <h4 className="font-bold text-white">
                        {obj.title}
                    </h4>
                    <div className="flex flex-col justify-around gap-6 ">
                        {[obj.time, obj.specialization, obj.description].map((text, index) => (
                            <p 
                                key={index}
                                className="text-gray-300"
                            >
                                {text}
                            </p>
                        ))}
                    </div>
                    <div className="flex items-center flex-col justify-between w-full gap-1">
                        <div className="w-full bg-gray-300 rounded-full h-4">
                            <div
                                className="bg-blue-700 h-4 rounded-full"
                                style={{ width: `${obj.percent}%` }}
                            ></div>
                        </div>
                        <p className="text-white">
                            {`${obj.percent}%`}
                        </p>
                    </div>
                </div>
            ))}
        </article>
    )
}

export default ArtBlockSkill;