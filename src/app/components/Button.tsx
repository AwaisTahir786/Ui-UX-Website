import ButtonSvg from '@/assets/svg/ButtonSvg'
import Link from 'next/link'
import React from 'react'

const Button = ({ className, href, children, px, white,onClick }: any) => {
    const classes = `button relative inline-flex items-center justify-center h-11
     transition-colors hover:text-color-1 ${px || "px-7"} ${white ? "text-n-8" : "text-n-1"} ${className || ""}`

    const spanClass = "relative z-10"

    const renderButton = () => (
        <button className={classes} onClick={onClick}>
            <span className={spanClass}>{children}</span>
            {ButtonSvg(white)}
        </button>
    );

    const renderLink = () => (
        <Link href={href} className={classes}>
                <span className={spanClass}>{children}</span>
                {ButtonSvg(white)}

        </Link>
    );

    return href ? renderLink() : renderButton();
}

export default Button
