import { ReactComponent as Search } from '../../assets/svg/search.svg';
import { ReactComponent as Profile } from '../../assets/svg/profile.svg';
import { ReactComponent as Ham } from '../../assets/svg/hamburger.svg';
import { AnimatePresence, motion } from 'framer-motion';
import { SetStateAction, useEffect, useState, Dispatch } from 'react';
import DropLogin from './dropDowns/DropLogin';
import CommonDrop from './dropDowns/CommonDrop';
import { NavbarDropItem } from '../../localData/NavbarDropItem';
import NavbarList from './navbarItem/NavbarList';
import { DropdownType } from '../../types/navbar/DropdownType';
import { fadeVariants } from '../../utils/FadeVariants';
import HamBurgerIndex from './hamburger/HamburgerIndex';
import HamCommonDrop from './hamburger/HamCommonDrop';
import { useNavbar } from '../../context/NavBarContext';
import ContactHam from './hamburger/ContactHam';
import { useLocation } from 'react-router';
import { routeToActiveMap } from '../../localData/navbar/RouteToActive';
import Brand1 from '../../assets/images/navbar/brand/brand1.webp'
import Brand2 from '../../assets/images/navbar/brand/brand2.webp'
import Brand4 from '../../assets/images/navbar/brand/brand4.webp'
import Com3 from '../../assets/images/navbar/company/company3.jpg'
import A1 from '../../assets/images/navbar/assets/assets1.webp'
import A2 from '../../assets/images/navbar/assets/assets2.webp'
import A3 from '../../assets/images/navbar/assets/assets3.webp'
import A4 from '../../assets/images/navbar/assets/assets4.webp'
import useGetBrandsNav from '../../customHook/useGetBrandsNav';
import useGetAssetsNav from '../../customHook/useGetAssetsNav';


type props = {
    setShowSearchBox: Dispatch<SetStateAction<boolean>>;
}
const NavbarIndex: React.FC<props> = ({ setShowSearchBox }) => {
    const { active, setActive } = useNavbar();
    const { brandList } = useGetBrandsNav();
    const { AssetList } = useGetAssetsNav();

    const location = useLocation();
    // const [active, setActive] = useState<null | string>(null); //set active navbar item by clicking
    const [prevActive, setPrevActive] = useState<null | string>(null) //track the previous state
    const [showContact, setShowContact] = useState<boolean>(false); //contact frop down
    const [showLogin, setShowLogin] = useState<boolean>(false); //login dropdown
    const [showDrop, setShowDrop] = useState<boolean>(false); //big drop down (company, asstes and brands)
    const [dropData, setDropData] = useState<DropdownType>({ //store data for dropdown according to (company,assets,brands),
        lists: [],
        images: []
    })
    const [showHam, setShowHam] = useState<boolean>(false); //for hamburger menu in small screens
    const [showHamMenu, setShowHamMenu] = useState<boolean>(false) //for ham sub menu, company,brands,etc
    const [showContactHamMenu, setShowContactHamMenu] = useState<boolean>(false)
    //change the data in dropData, according to the item clicked(active state)
    useEffect(() => {
        if (typeof active === 'string') {
            if (active === 'Brands') {
                setDropData({
                    lists: brandList,
                    images: [Brand1, Brand2, Com3, Brand4]
                });
            } else if (active === 'Assets') {
                setDropData({
                    lists: AssetList,
                    images: [A1, A2, A3, A4]
                })
            } else if (NavbarDropItem[active]) {
                setDropData({
                    lists: NavbarDropItem[active].lists,
                    images: NavbarDropItem[active].images,
                });
            }
        }
    }, [active, brandList]);

    // Update active state based on the current route
    useEffect(() => {
        const currentRoute = location.pathname;

        // Check for a /brands/:slug route
        if (currentRoute.startsWith('/brands/')) {
            setActive('Brands');  // You can update this to something more dynamic if needed
        } else {
            const activeItem = routeToActiveMap[currentRoute] || null;
            setActive(activeItem);
        }
    }, [location.pathname, setActive]);
    //props to be sent to <NavbarList/> component as object
    const navbarProps = { setActive, setShowDrop, active, showDrop, setShowLogin, setShowContact, showContact, prevActive, setPrevActive }

    //props to be sent to <HamBurgerIndex/>
    const hamProps = { setShowHamMenu, setActive, setShowHam, setShowContactHamMenu }

    //when clicked search
    const searchClick = () => {
        setShowSearchBox(true)
        setShowContact(false)
        setShowDrop(false)
        setActive(null)
        setShowLogin(false)
    }

    return (
        <>
            <nav
                className={`w-full h-full relative z-40 px-1 rounded-[10px] bg-[rgba(14,13,12,1)] 
                    Flex-Around lg:Flex-Between lg:px-4`}>

                <NavbarList {...navbarProps} /> {/*Navbarlist component here and props is sent */}

                {/*search and account section below */}
                <div className="flex items-center justify-between lg:!justify-end lg:gap-5 w-36 2xl:w-28 xl:w-16 x-l:w-14 lg:!w-32 z-0 cursor-pointer">
                    <div>
                        <Search className='h-[20px] w-[20px] xl:w-[17px] x-l:w-4 x-l:h-4 xs:w-3' onClick={searchClick} />
                    </div>
                    <div className='relative cursor-pointer lg:hidden'>
                        <Profile
                            onClick={() => {
                                setShowLogin(!showLogin)
                                setShowContact(false)
                                setShowDrop(false)
                                setActive('')
                            }}
                            className='w-[30px] h-[30px] xl:w-[25px] x-l:w-6 x-l:h-6 xs:w-5'
                        />
                        {/*show the dropdown here for account section */}
                        <DropLogin fadeVariants={fadeVariants} showLogin={showLogin} />
                    </div>
                    <div onClick={() => setShowHam(!showHam)}>
                        <Ham className='hidden lg:block w-14 xs:w-12' />
                    </div>
                </div>
            </nav>

            {/* dropdown menu mainly for company, assets and brand navitem for larger screens */}
            <AnimatePresence>
                {showDrop && (
                    <motion.div
                        className='absolute z-30 top-[90%] w-[1200px] 2xl:w-[1024px] xl:!w-[800px] x-l:!w-[680px] left-1/2 -translate-x-1/2'
                        variants={fadeVariants} //used shared animation
                        initial='initial'
                        animate='animate'
                        exit='initial'
                        transition={{
                            duration: 0.8
                        }}
                    >
                        {/**the dynamic drop down menu below, just take data as the condition 
                 * which navitem is clicked in useEffect Hook */}
                        <CommonDrop lists={dropData.lists} images={dropData.images} fadeVariants={fadeVariants} />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* for ham menu in small screens instead of navitem */}
            <AnimatePresence>
                {showHam && (
                    <motion.div
                        className='absolute z-50 -top-2 lg:!w-[550px] sm-d:!w-[450px] xs:!w-[350px] left-1/2 -translate-x-1/2'
                        variants={fadeVariants} //used shared animation
                        initial='initial'
                        animate='animate'
                        exit='initial'
                        transition={{
                            duration: 0.8
                        }}
                    >
                        <HamBurgerIndex {...hamProps} />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* for small screen sub menu, after clicking navitems in hammenu */}
            <AnimatePresence>
                {showHamMenu && (
                    <motion.div
                        className='absolute z-[55] -top-2 lg:!w-[550px] sm-d:!w-[450px] xs:!w-[350px] left-1/2 -translate-x-1/2'
                        variants={fadeVariants} //used shared animation
                        initial='initial'
                        animate='animate'
                        exit='initial'
                        transition={{
                            duration: 0.8
                        }}
                    >
                        <HamCommonDrop lists={dropData.lists} setShowHam={setShowHam}
                            setShowHamMenu={setShowHamMenu} />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* for small screen sub menu, after clicking contact in hammenu */}
            <AnimatePresence>
                {showContactHamMenu && (
                    <motion.div
                        className='absolute z-[55] -top-2 lg:!w-[550px] sm-d:!w-[450px] xs:!w-[350px] left-1/2 -translate-x-1/2'
                        variants={fadeVariants} //used shared animation
                        initial='initial'
                        animate='animate'
                        exit='initial'
                        transition={{
                            duration: 0.8
                        }}
                    >
                        <ContactHam setShowHam={setShowHam} setShowHamMenu={setShowHamMenu} setShowContactHamMenu={setShowContactHamMenu} />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
export default NavbarIndex;

