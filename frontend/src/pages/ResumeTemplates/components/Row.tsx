import clsx from "clsx"
import React from "react";

interface IProp {
    title: string;
    Icon: string;
    industries: string;
    setIndustries: React.Dispatch<React.SetStateAction<string>>
}

function Row({ title, Icon, industries, setIndustries }: IProp) {
    return (
        <div className={
            clsx("flex items-center gap-3 cursor-pointer transition-all hover:bg-[#2d2d2d14] py-2.5 rounded-md pl-5 mt-1",
                {
                    'bg-[#2d2d2d14]': industries.toLowerCase() === title.toLowerCase()
                }
            )
        }
            onClick={() => {
                setIndustries(title)
            }}
        >
            {/* <Icon size={25} /> */}
            <span className="text-3xl">{Icon}</span>
            <span className="text-xl capitalize text-black/90">
                {title}
            </span>
        </div>
    )
}

export default Row