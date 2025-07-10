import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from '../../../assets/svg/company-logo.svg';
import { NavbarListProps } from "../../../types/navbar/NavbarListPropsType";
import { motion } from "framer-motion";
import DropContact from "../dropDowns/DropContact";
import { NavbarItem } from "../../../localData/NavbarItem";
import { navitem } from "../../../types/navbar/NavitemTypes";
import { useState } from "react";
import { useLocation } from "react-router";

const NavbarList: React.FC<NavbarListProps> = (props) => {
    const [expandAnimation, setExpandAnimation] = useState<Boolean>(false);
    const [shrinkAnimation, setShrinkAnimation] = useState<boolean>(false);
    const location = useLocation();

    const { setActive, setShowDrop, active, setShowLogin, setShowContact,
        showContact, setPrevActive, showDrop } = props

    const slidingAnimation = (
        <motion.div
            layoutId="underline"
            className="absolute -bottom-2 left-0 h-[2.5px] w-full bg-Golden"
            transition={{ type: 'linear', }}
        />
    )

    const sendToCommon = { showContact, expandAnimation, shrinkAnimation }
    //function for changing the boolan states of the dropdown menus/item to show or not
    const clickItem = (item: string) => {
        if (active !== item) {
            // Only allow dropdown for these 3 items
            if (item === 'Company' || item === 'Assets' || item === 'Brands') {
                setShowDrop(true);
            } else {
                setShowDrop(false); // Explicitly hide dropdown for others
            }
            setShowLogin(false);
            setShowContact(false);
            setPrevActive(active);
            setActive(item);
        } else {
            // Only toggle dropdown if the item is Company/Assets/Brands
            if (item === 'Company' || item === 'Assets' || item === 'Brands') {
                setShowDrop(!showDrop);
            } else {
                setShowDrop(false); // Force-hide for Gallery/Collection
            }
            if (location.pathname !== '/') {
                setActive(item);
            } else {
                setActive('');
            }
            setShrinkAnimation(false);
        }
    };
    const clickContact = (item: string) => {
        //after nav from one navitem to contact
        if (active !== item) {

            if (active === 'Company' || active === 'Assets' || active === 'Brands') {
                setShrinkAnimation(true) //when you first open dropdowns and then open contact dropdown, shrink animation is enabled
            } else {
                setShrinkAnimation(false)
            }
            setActive(item)
            setShowDrop(false)
            setShowContact(true)
            setExpandAnimation(true)
        } else {
            setExpandAnimation(false)
            setShrinkAnimation(false)
            setShowContact(!showContact)
            if (location.pathname == '/') {
                setActive('')
            } else {
                setActive(item)
            }
        }
    }

    return (
        <>
            <div>  {/*logo is added here*/}
                <NavLink to='/'
                    onClick={() => {
                        setActive('')
                        setShowDrop(false)
                        setShowContact(false)
                        setShowLogin(false)
                        setExpandAnimation(false)
                        setShrinkAnimation(false)
                    }}>
                    <Logo className="w-[79px] h-[70px] xl:w-[60px] sm-d:w-[55px] xs:w-[45px]" />
                </NavLink>
            </div>
            <ul className="Flex-Between w-[749px] xl:w-[590px] x-l:w-[500px] lg:hidden  list-none">
                {
                    NavbarItem.map((item: navitem, index) => {
                        const { name, path } = item;
                        return (
                            <li key={index}
                                className="relative"
                                onClick={() => clickItem(name)}
                            >
                                <NavLink to={path} className='Nav-Item'>{name}</NavLink>
                                {active === name && (slidingAnimation)}
                            </li>
                        )
                    })
                }

                <li onClick={() => clickContact('Contact')}
                    className="relative z-0">
                    <NavLink to='#' className="Nav-Item">Contact</NavLink>
                    {active === "Contact" && (slidingAnimation)}
                    <DropContact {...sendToCommon} />
                </li>
            </ul>
        </>
    )
}
export default NavbarList