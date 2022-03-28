import {FC} from 'react';


export interface IAnchor {
    href: string;
    img?: string;
    active?: boolean;
}

export const Anchor: FC<IAnchor> = (
    {href, img, children}
) => {
    return (
        <a href={href}>
            {img &&
                <img src={img} alt='' />
            }
            {children}
        </a>
    )
}
