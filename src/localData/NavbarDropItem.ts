import Com1 from '../assets/images/navbar/company/company1.jpg'
import Com2 from '../assets/images/navbar/company/company2.jpg'
import Com3 from '../assets/images/navbar/company/company3.jpg'
import Com4 from '../assets/images/navbar/company/company4.jpg'
// import A1 from '../assets/images/navbar/assets/assets1.webp'
// import A2 from '../assets/images/navbar/assets/assets2.webp'
// import A3 from '../assets/images/navbar/assets/assets3.webp'
// import A4 from '../assets/images/navbar/assets/assets4.webp'
// import Brand1 from '../assets/images/navbar/brand/brand1.webp'
// import Brand2 from '../assets/images/navbar/brand/brand2.webp'
// import Brand4 from '../assets/images/navbar/brand/brand4.webp'

interface DropData {
    lists: { name: string; path: string }[];
    images: string[];
}

export const NavbarDropItem: Record<string, DropData> = {
    Company: {
        lists: [
            { name: 'About us', path: '/about-us' },
            { name: 'Awards & Certificates', path: '/awards-certificates' },
            { name: 'Blogs', path: '/blogs' },
            // { name: 'Events', path: '#' },
            { name: 'Contact us', path: '/contactus' },
        ],
        images: [Com1, Com2, Com3, Com4]
    },
    // Assets: {
    //     lists: [
    //         { name: 'All Assets', path: '/all-assets' },
    //         { name: 'Glass Fittings', path: '/glass-fitting-assets' },
    //         { name: 'Smart Locks', path: '/smart-locks-assets' },
    //         { name: 'Safes', path: '/safes-assets' },
    //         { name: 'Shower Enclosures', path: '/shower-assets' },
    //         { name: 'Kitchen & Furniture Fittings', path: '/kitchen-furniture-assets' },
    //     ],
    //     images: [A1, A2, A3, A4]
    // },
    // Brands: {
    //     lists: [
    //         { name: 'All Brands', path: '/all-brands' },
    //         { name: 'Ozone', path: '/ozone-brands' },
    //         { name: 'Godrej', path: '/godrej-brands' },
    //         { name: 'Neo', path: '/neo-brands' },
    //         { name: 'Ironwood', path: '/ironwood-brands' }
    //     ],
    //     images: [Brand1, Brand2, Com3, Brand4]
    // }
}