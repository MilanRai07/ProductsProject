import image1 from '../../assets/images/heroImages/heroHome.webp';
import image2 from '../../assets/images/heroImages/heroAssets.webp';
import { HeroHomeItemsType } from '../../types/heroContainer/HeroHomeitemsType';

export const HeroConatainerItem: HeroHomeItemsType[] = [
    {
        img: image1,
        title: 'Discover Our Brands Partner',
        detail: 'Explore our trusted brand partners, offering innovative solutions in architecture, security, and lifestyle products, ensuring quality and reliability.',
        button: 'Explore Brands',
        path: '/all-brands'
    },
    {
        img: image2,
        title: 'Watch our Assets in Real',
        detail: 'Discover the perfect fusion of elegance and functionality with Ozone, a market leader in architectural hardware and security solutions.',
        button: 'See Assets',
        path: '/all-assets'
    },
    {
        img: image1,
        title: 'Join with us on our journey',
        detail: 'Every great journey begins with a single step, and we invite you to take that step with us.',
        button: 'Contact Us',
        path: '/contactus'
    },
    {
        img: image2,
        title: 'Discover Our Innovative Designs',
        detail: 'Discover the perfect fusion of elegance and functionality with Ozone, a market leader in architectural hardware and security solutions.',
        button: 'Discover',
        path: '/collections'
    },

]