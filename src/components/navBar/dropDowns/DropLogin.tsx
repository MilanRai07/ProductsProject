import { motion, AnimatePresence } from "framer-motion";
import { DropLoginType } from "../../../types/navbar/DropdownType";

const DropLogin: React.FC<DropLoginType> = ({ showLogin, fadeVariants }) => {

  return (
    <AnimatePresence>
      {showLogin && (
        <motion.div
          className="absolute z-10 top-[200%] -right-[57px]"
          variants={fadeVariants}
          initial="initial"
          animate="animate"
          exit="initial"
          transition={{
            duration: 1,
          }}
        >
          <div
            className="w-[275px] xl:w-56 x-l:w-48 h-[150px] bg-[rgba(69,69,69,0.9)] rounded-[10px] relative z-10 p-6  
                                  Flex-Col justify-between font-semibold text-sm leading-[21px] x-l:text-[13px]"
          >
            <p className="py-2 cursor-pointer border-b-2 border-white border-opacity-65 ">
              My Account
            </p>
            <a
              href="https://account.stlnpl.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="w-full h-[39px] text-sm x-l:text-[13px] leading-[21px] font-bold bg-Golden text-white py-2 rounded-md hover:bg-DarkGolden transition">
                My Account
              </button>
            </a>
            {/* the arrowed div on top of the div */}
            <div
              className="absolute -top-4 right-14 w-8 h-8 bg-[rgba(69,69,69,0.9)] -rotate-45"
              style={{ clipPath: "polygon(0% 0%, 100% 100%, 100% 0%)" }}
            ></div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default DropLogin;