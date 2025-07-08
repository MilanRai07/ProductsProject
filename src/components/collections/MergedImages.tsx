import { AnimatePresence, motion } from "framer-motion";
import { useGetProductsQuery } from "../../services/ProductApi";
import { useEffect, useState } from "react";
import LoadingSkeleton from "../loading/LoadingSkelton";
import ErrorLoading from "../loading/Error";

const MergedImages: React.FC = () => {
   const currentPage = 1;
   const limit = 5;
   const { data, isFetching, isError } = useGetProductsQuery({ currentPage, limit });
   const [getValue, setGetValue] = useState(0);

   useEffect(() => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 480) return setGetValue(50);
      if (screenWidth < 768) return setGetValue(80);
      if (screenWidth < 1042) return setGetValue(90);
      if (screenWidth > 1041) return setGetValue(180);
   }, []);

   if (isFetching) {
      return (
         <div className="w-full flex justify-center gap-3">
            <LoadingSkeleton count={3} />
         </div>
      );
   }

   if (isError) {
      return <ErrorLoading />;
   }

   if (data?.items.length === 0) {
      return <div className="Loading">Sorry... There is no product at the moment</div>;
   }

   return (
      <div className="w-full h-full flex justify-center relative x-l:mt-6 overflow-visible">
         {data?.items.map((item, index) => {
            const { featured_image } = item;

            const baseRotation = [-4, -2, 0, 2, 4][index] ?? 0;
            const baseY = index % 2 === 0 ? "-10px" : "10px";

            const animatedX = `${(index - (data?.items.length - 1) / 2) * getValue}px`;
            const animatedY = [10, -2, 0, -2, 10][index] ?? "0";

            return (
               <motion.img
                  key={index}
                  src={featured_image}
                  loading="lazy"
                  className="w-[270px] xl:w-[180px] lg:w-[140px] h-[350px] xl:!h-[250px]  x-l:!h-[200px] 
                     sm-d:h-[170px] sm-d:w-[150px] object-cover rounded-[20px] shadow-lg absolute transition-transform"
                  initial={{
                     height: '100%',
                     zIndex: 40 - index * 10,
                     x: 0,
                     y: baseY,
                     rotate: baseRotation,
                     opacity: 0,
                  }}
                  whileInView={{
                     x: animatedX,
                     y: animatedY,
                     rotate: baseRotation,
                     opacity: 1,
                  }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
               />
            );
         })}
      </div>
   );
};

export default MergedImages;
