import { ReactComponent as Ozone } from '../../assets/svg/brands/Ozone.in.svg'
import { ReactComponent as Godrej } from '../../assets/svg/brands/Godrej.svg'
import { ReactComponent as Neo } from '../../assets/svg/brands/neon.svg'
import { ReactComponent as Iron } from '../../assets/svg/brands/Ironwood.svg'

import { ReactElement } from 'react';

type companyLogo = {
    logo: ReactElement
}
export const CompanyLogo: companyLogo[] = [
    {
        logo: <Ozone className='w-[80px] h-[180px] sm:scale-[0.65]' />
    },
    {
        logo: <Godrej className='w-[80px] h-[180px] sm:scale-[0.65]' />
    },
    {
        logo: <Neo className='w-[80px]  h-[180px] sm:scale-[0.65]' />
    },
    {
        logo: <Iron className='w-[80px]  h-[80px] bg-white rounded-full mt-12 p-1 sm:scale-[0.65]' />
    },
]