import { ReactComponent as Int } from '../../assets/svg/values/integrity.svg';
import { ReactComponent as Del } from '../../assets/svg/values/deliver.svg';
import { ReactComponent as Part } from '../../assets/svg/values/partners.svg';
import { ReactComponent as Ser } from '../../assets/svg/values/service.svg'

import { ChooseUsType } from '../../types/home/ChooseUsType';

export const ChooseUsItem: ChooseUsType[] = [
    {
        img: <Int className='w-full h-full' />,
        title: 'Integrity',
        text: 'Honesty and trust are the foundation of our work. We stay true to our values in every project we take on.'
    },
    {
        img: <Del className='w-full h-full' />,
        title: 'Deliver Values',
        text: 'We are committed to providing the best value for your time and money, ensuring every solution meets your needs.'
    },
    {
        img: <Part className='w-full h-full' />,
        title: 'Partners',
        text: 'We believe in teamwork and treat our clients as partners, working together to create amazing outcomes.'
    },
    {
        img: <Ser className='w-full h-full' />,
        title: 'Full Service',
        text: 'Not sure where to start? Let us handle everything for you, making the process smooth and hassle-free from beginning to end.'
    },
]