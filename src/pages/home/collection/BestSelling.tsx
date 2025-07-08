import { motion } from "framer-motion"
import CollectionSlider from "../../../components/collections/CollectionSlider";
// import CollectionDetail from "../../../components/collections/CollectionDetail";
import { Dispatch, RefObject, SetStateAction, useEffect, useRef, useState } from "react";
import useSmoothScrollTop from "../../../customHook/useSmoothScrollTop";


type props = {
    setShowBest: Dispatch<SetStateAction<boolean>>,
    collectionRef: RefObject<HTMLDivElement | null>
}
const BestSelling: React.FC<props> = ({ setShowBest, collectionRef }) => {
    const [showDetail, setShowDetail] = useState(false);
    const [title, setTitle] = useState<string>('');
    // const [specs, setSpecs] = useState<(string)>('');
    // const [selectedImage, setSelectedImage] = useState<string>();
    // const [slugs, setSlugs] = useState<string>('');

    const BestSellingRef = useRef(null);
    const ToCollectionRef = useRef(null);

    // const setTheDetails = (title: string, specs: string, image: string, slugs: string) => {
    //     setTitle(title);
    //     setSpecs(specs);
    //     setSelectedImage(image);
    //     setShowDetail(true);
    //     setSlugs(slugs)
    // }

    //when i press to collections, the collections shows from top
    const scrollToTop = useSmoothScrollTop();
    const goBack = () => {
        setShowBest(false)
        setTimeout(() => {
            if (collectionRef.current) {
                scrollToTop(collectionRef.current);
            }
        }, 100);
    }
    //when i press the item in slide, the collection detail page will be seen from top
    useEffect(() => {
        if (showDetail && ToCollectionRef.current) {
            scrollToTop(ToCollectionRef.current);
        }
    }, [showDetail, title]);
    return (
        <motion.div
            className="w-full  bg-white text-center Horizontal-Divs-Center justify-around gap-9"
            key={showDetail ? "detail-visible" : "detail-hidden"}
            initial={{ opacity: 0, }}
            animate={{ opacity: 1, }}
            transition={{ duration: 0.5 }}
            ref={BestSellingRef}
        >
            <motion.h1
                className="Collection-Section-Title"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                Best Selling Product's <br />
                <span className="Collection-Section-SubTitle">Category</span>
            </motion.h1>
            <div
                className="w-full h-[350px] 2xl:h-[300px] x-l:h-[300px] sm-d:h-[210px] px-24 x-l:px-20"

            >
                {/* slider here */}
                <CollectionSlider />
            </div>
            <motion.p
                className="w-[511px] sm-d:w-[300px] h-[60px] font-normal text-[15px] x-l:text-[14px] sm-d:text-[13px] leading-[30px] x-l:leading-[25px] sm-d:leading-[20px] xs:text-[12px]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true, amount: 0.4 }}
            >
                We release new designs every week across a wide range of categories — no seasonal limits, just constant creativity.
            </motion.p>
            <motion.button
                className={`w-[149px] h-[46px] md:w-[130px] md:h-[40px] sm-d:w-[120px] sm-d:h-[35px] sm:text-[14px] Black-Btn`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                onClick={goBack}
            >
                Collections
            </motion.button>
            {/* {
                showDetail && (
                    <div ref={ToCollectionRef}>
                        <CollectionDetail BestSellingRef={BestSellingRef} setShowDetail={setShowDetail}
                            slugs={slugs} title={title} specs={specs} image={selectedImage} />
                    </div>
                )
            } */}
        </motion.div>
    )
}
export default BestSelling;