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
        className={clsx('cursor-pointer transition-all delay-100 inset-0', {
            'bg-primary px-4 md:px-10 py-3 rounded shadow-md text-[16px] md:text-[18px] font-semibold text-shadow-md text-neutral-200 hover:bg-secondary hover:text-neutral-100': variant === "primary"
        }, classname)}
        disabled={disabled}
    >{children}</button>;
}

export default Button;
