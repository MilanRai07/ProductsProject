import { ReactElement } from "react";
import { ReactComponent as Face } from '../../assets/svg/fb2.svg'
import { ReactComponent as Insta } from '../../assets/svg/insta2.svg'
import { ReactComponent as Linkedin } from '../../assets/svg/linkedin.svg'
import { ReactComponent as X } from '../../assets/svg/x.svg'

type Follow = {
    icon: ReactElement,
    path: string
}
export const FollowUs: Follow[] = [
    {
        icon: <Face className="w-[25px] h-[25px] l-g:w-[16px] l-g:h-[16px] gl4:w-[13px] gl4:h-[13px]" />,
        path: '#'
    },
    {
        icon: <Insta className="w-[25px] h-[25px]  l-g:w-[18px] l-g:h-[18px] gl4:w-[14px] gl4:h-[14px]" />,
        path: '#'
    },
    {
        icon: <Linkedin className="w-[25px] h-[25px]  l-g:w-[17px] l-g:h-[17px] gl4:w-[15px] gl4:h-[15px]" />,
        path: '#'
    },
    {
        icon: <X className="w-[20px] h-[20px]  l-g:w-[14px] gl4:w-[12px] gl4:h-[12px] l-g:h-[14px] fill-black stroke-black" />,
        path: '#'
    },
]