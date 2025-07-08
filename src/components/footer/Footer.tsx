import FooterLast from "./FooterLast";
import Subscribe from "./Subscribe";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
    return (
        <>
            <motion.section >
                <Subscribe />
                <FooterLast />
            </motion.section>

        </>
    )
}
export default Footer;