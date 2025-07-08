import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ReactComponent as Cross } from '../../assets/svg/cross.svg';

const CookiePopUp = () => {
    const [showBanner, setShowBanner] = useState<boolean>(false);

    useEffect(() => {
        const hasAcceptedCookies = localStorage.getItem("cookiesAccepted");

        if (!hasAcceptedCookies) {
            setTimeout(() => {
                setShowBanner(true);
            }, 3000);
        }
    }, []);


    const handleAcceptCookies = () => {
        localStorage.setItem("cookiesAccepted", "1");
        setTimeout(() => {
            setShowBanner(false);
        }, 600);
    };

    return (
        <AnimatePresence>
            {
                showBanner && (
                    <motion.div className="w-full bg-black text-white p-6 flex sm:flex-col sm:gap-2 justify-between items-center "
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.6, ease: 'easeInOut' }}
                    >
                        <p className="text-sm sm:text-[10px]">We use cookies to improve your experience. By continuing, you agree to our use of cookies.</p>
                        <div className="flex justify-center items-center gap-4">
                            <button
                                className="bg-golden sm:text-[12px] text-black px-4 py-2 rounded-md bg-Golden font-semibold hover:bg-DarkGolden transition-all"
                                onClick={handleAcceptCookies}
                            >
                                Accept
                            </button>
                            <Cross className="w-[40px] h-[40px] sm:w-[30px] sm:h-[30px] fill-white stroke-white cursor-pointer"
                                onClick={() => setShowBanner(false)}
                            />
                        </div>
                    </motion.div>
                )
            }
        </AnimatePresence>
    );
};

export default CookiePopUp;
