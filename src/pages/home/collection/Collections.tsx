import { AnimatePresence, motion } from "framer-motion";
import { useState, useRef, useEffect, lazy, Suspense } from "react";
import MergedImages from "../../../components/collections/MergedImages";
import useSmoothScrollTop from "../../../customHook/useSmoothScrollTop";
import useIsDesktop from "../../../customHook/useIsDesktop";
const BestSelling = lazy(() => import('./BestSelling'));

const Collections: React.FC = () => {
    const [isBoxHovered, setIsBoxHovered] = useState(false);
    const [showBest, setShowBest] = useState(false);

    const collectionRef = useRef<HTMLDivElement>(null);
    const bestSellingRef = useRef<HTMLDivElement>(null);

    const scrollToTop = useSmoothScrollTop();
    const isDesktop = useIsDesktop();

    useEffect(() => {
        if (showBest && bestSellingRef.current) {
            scrollToTop(bestSellingRef.current);
        }
    }, [showBest]);

    return (
        <motion.section
            className={`w-full ${showBest?'min-h-[845px] xl:min-h-[800px] x-l:min-h-[700px] sm-d:min-h-[560px]':'min-h-[845px] xl:min-h-[800px] x-l:min-h-[730px] sm-d:min-h-[620px] xs:min-h-[600px]'} bg-white text-black py-10 x-l:py-7`}
        >
            {!showBest && (
                <motion.div
                    ref={collectionRef}
                    className="w-full bg-white text-center Vertical-Divs-Center"
                >
                    <AnimatePresence>
                        <motion.div
                            className=" Horizontal-Divs-Center justify-center gap-9 sm-d:gap-5"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: isBoxHovered ? -15 : 0 }}
                            exit={{ opacity: 0, y: 50 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true, amount: 0.4 }} // 👈 triggers animation when 40% in view
                        >
                            <motion.h1
                                className="Collection-Section-Title x-l:mt-10"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                viewport={{ once: true, amount: 0.4 }}
                            >
                                The Ultimate <br />
                                <span className="Collection-Section-SubTitle ">Collections</span>
                            </motion.h1>

                            <motion.div
                                className="w-full h-[350px] xl:h-[300px]"
                            >
                                <MergedImages />
                            </motion.div>

                            <motion.p
                                className="w-[511px] sm-d:w-[300px] h-[60px] font-normal text-[15px] x-l:text-[14px] sm-d:text-[13px] leading-[30px] x-l:leading-[25px] sm-d:leading-[20px] xs:text-[12px]"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                viewport={{ once: true, amount: 0.4 }}
                            >
                              We don’t follow seasonal trends — new designs are released every week, keeping our collections fresh and ever-evolving.
                            </motion.p>

                            <motion.button
                                onClick={() => setShowBest(true)}
                                className="w-[149px] h-[46px] md:w-[130px] md:h-[40px] sm-d:w-[120px] sm-d:h-[35px] bg-black md:text-[14px] sm:text-[14px] text-white Flex-Center rounded-[30px]"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                viewport={{ once: true, amount: 0.4 }}
                            >
                                Explore More
                            </motion.button>
                        </motion.div>
                    </AnimatePresence>
                </motion.div>
            )}
            {showBest && (
                <div ref={bestSellingRef}>
                    <Suspense>
                        <BestSelling setShowBest={setShowBest} collectionRef={collectionRef} />
                    </Suspense>
                </div>
            )}
        </motion.section>
    );
};

export default Collections;
