import { ReactComponent as Deliver } from '../../assets/svg/values/deliver.svg';
import { ReactComponent as Quality } from '../../assets/svg/values/circel-right.svg';
import { ReactComponent as Bulb } from '../../assets/svg/values/bulb.svg';
import { ReactComponent as Partners } from '../../assets/svg/values/partners.svg';
import { OurValuesType } from '../../types/company/OurValuesType';


export const OurValuesItem: OurValuesType[] = [
    {
        img: <Deliver className='w-full h-full' />,
        title: 'Deliver Value',
        text: 'We are committed to providing the best value for your time and money, ensuring every solution meets your needs.'
    },
    {
        img: <Quality className='w-full h-full' />,
        title: 'Quality Conscious',
        text: 'We recognize that one doesn’t build or redesign their living spaces every day, which is why we are committed to providing high-quality products designed to last for years.'
    },
    {
        img: <Bulb className='w-full h-full' />,
        title: 'Thoughtful',
        text: 'For us engineering is not about showing our prowess, it is about solving the real-life problems of the people we serve.'
    },
    {
        img: <Partners className='w-full h-full' />,
        title: 'Partners',
        text: 'We believe in teamwork and treat our clients as partners, working together to create amazing outcomes.'
    },
]