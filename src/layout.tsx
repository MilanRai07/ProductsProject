import { useLocation } from "react-router";
import NavbarIndex from "./components/navBar/NavbarIndex"; // Import your Navbar component
import TopAds from "./components/ads/TopAds";
import Footer from "./components/footer/Footer";
import { useState, useEffect } from "react";
import PopUpAd from "./components/ads/PopUpAd";
import { motion } from "framer-motion";
import { fadeVariants } from "./utils/FadeVariants";
import DropSearch from "./components/navBar/dropDowns/DropSearch";
import { ReactComponent as Whats } from "../src/assets/svg/whatsapp.svg";
import CookiePopUp from "./components/cookiePopUp/CookiePopUp";
import usePopAvailable from "./customHook/usePopup";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [showPopUp, setShowPopUp] = useState<boolean>(false);
  const [showSearchBox, setShowSearchBox] = useState<boolean>(false); //serchbox div

  const location = useLocation();

  // Determine if we're on the home page
  const isHomePage = location.pathname === "/";

  // Adjust the navbar top value, if in home little bit lower than other pages
  const navbarTop = isHomePage ? "top-[72.52px]" : "top-[26.52px]";

  const popAvailable = usePopAvailable();
  useEffect(() => {
    const popUpValue = localStorage.getItem("popUp");
    const isUserAtTop = window.scrollY < 50;
    if (!popUpValue && popAvailable == true && isUserAtTop) {
      setShowPopUp(true);
    } else {
      setShowPopUp(false);
    }
  }, [popAvailable]);

  useEffect(() => {
    if (showPopUp && isHomePage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup when component unmounts or state changes
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showPopUp, isHomePage]);


  const handleWhatsAppClick = () => {
    const number = "+9779851136771";
    window.open(`https://wa.me/${number}`, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="relative overflow-hidden">
      {/* make a dark overlay until pop up ad is closed */}
      {showPopUp && isHomePage && (
        <div className="fixed inset-0 bg-black/50 z-0"></div>
      )}

      {/* Navbar Component */}
      <motion.div
        key={location.pathname} //trigger the animation when url change, needs a change in future
        className={`w-full z-50 ${showPopUp && isHomePage ? "pointer-events-none" : ""
          }
                            absolute ${navbarTop}`}
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        {/* navbar width was facing problem in width */}
        <div
          className="mx-auto w-[1200px] 2xl:max-w-5xl xl:w-[800px] x-l:w-[680px] lg:!w-[550px] sm-d:!w-[450px] 
                xs:!w-[350px] h-[70.73px] lg:h-[60px] sm-d:h-[50px] xs:h-[45px]
                "
        >
          <NavbarIndex setShowSearchBox={setShowSearchBox} />
        </div>
      </motion.div>

      {/* top ads showing */}
      {isHomePage && <TopAds />}

      {/**show only in homepage at page reload, and true by default */}
      {showPopUp && isHomePage && (
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 top-[162px] z-40"
          variants={fadeVariants}
          initial="initial"
          animate="animate"
          transition={{ duration: 2.1, delay: 2 }}
        >
          <PopUpAd setShowPopUp={setShowPopUp} />
        </motion.div>
      )}
      <div className={showPopUp && isHomePage ? "pointer-events-none" : ""}>
        {" "}
        {/*disable until the pop up ad is closed */}
        {children}
      </div>

      {/* search box */}
      {showSearchBox && (
        <div className="absolute z-50 top-0 w-full">
          <DropSearch setShowSearchBox={setShowSearchBox} />
        </div>
      )}

      {/* whatsapp bot */}

      <div
        className="fixed z-50 right-[5%] bottom-10 cursor-pointer"
        onClick={handleWhatsAppClick}
      >
        <Whats className="h-[55px] w-[55px] sm:w-[35px] sm:h-[35px]" />
      </div>

      {/* cookie pop up */}
      <div className="w-full fixed bottom-0 z-[55]">
        <CookiePopUp />
      </div>

      <Footer />
    </div>
  );
};

export default Layout;