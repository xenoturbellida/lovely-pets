import {FC} from "react";
import {IButton} from "./index.interfaces";
import styles from './index.module.sass';
import classNames from "classnames/bind";


const cn =classNames.bind(styles);

export const Button: FC<IButton> =
    ({
         children,
         onClick,
         mode="primary",
         type='button',
         ...props
    }) => {
    return(
        <button
            onClick={onClick}
            className={cn({
                button: true,
                primary: mode === "primary",
                secondary: mode === "secondary",
                alternative: mode === "alternative",
            })}
            type={type}
            {...props}
        >
            {children}
        </button>
    )
}
