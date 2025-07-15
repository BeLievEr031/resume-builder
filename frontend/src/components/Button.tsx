import clsx from "clsx";
import React from "react";

interface IProp {
    children: React.ReactNode;
    variant: string;
    disabled?: boolean;
    classname?: string;
}

function Button({ children, classname, variant = "primary", disabled = false }: IProp) {
    return <button
        className={clsx('cursor-pointer px-4 md:px-10 py-3 rounded shadow-md text-[16px] md:text-[18px] text-shadow-md transition-all delay-100 inset-0', {

            'bg-primary text-neutral-200 hover:bg-secondary hover:text-neutral-100 font-semibold': variant === "primary",
            'bg-[#03dc7a] text-white font-semibold text-shadow-none': variant === "secondary",
            'bg-transparent border shadow-none text-shadow-none text-primary font-medium': variant === "outline"

        }, classname)}
        disabled={disabled}
    >{children}</button>;
}

export default Button;
