import {IIcon} from "./index.interfaces";
import {FC} from "react";
import styles from "./index.module.sass";

export const Icon: FC<IIcon> = ({ name, size = 24 }) => {
    return (
        <svg
            version='1.1'
            xmlns='http://www.w3.org/2000/svg'
            style={{
                width: `${size}px`,
                height: `${size}px`,
            }}
            className={styles.icon}
        >
            <use xlinkHref={`/sprite.svg#${name}`}></use>
        </svg>
    );
}
