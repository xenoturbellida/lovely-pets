import {FC} from 'react';
import {Icon} from "../Icon";
import styles from "./index.module.sass";
import {IAnchor} from "./index.interfaces";


export const Anchor: FC<IAnchor> = (
    {href, img, img_size=24, children}
) => {
    return (
        <a href={href} className={styles.anchor}>
            {img &&
                <Icon name={img} size={img_size} />
            }
            {children}
        </a>
    )
}
