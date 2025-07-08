import { motion } from "framer-motion";
import { fadeVariants } from "../../utils/FadeVariants";
import { useGetPopUpQuery } from "../../services/PopUpApi";

interface PopUpData {
  items: Array<{
    title: string;
    description: {
      btnPath: string;
      discount: number;
      title: string;
      btnText: string;
      subTitle: string;
    };
  }>;
}

const TopAds = () => {
  const currentPage = 1;
  const limit = 1;
  const { data, isFetching, isError } = useGetPopUpQuery({ currentPage, limit });

  if (isFetching) {
    return (
      <motion.section
        className="w-full bg-Golden h-[44px] xl:text-center Flex-Center All-Font absolute z-50 left-1/2 -translate-x-1/2"
        variants={fadeVariants}
        initial="initial"
        animate="animate"
        transition={{ duration: 2, delay: 0.5 }}
      >
        {/* Loading placeholder */}
      </motion.section>
    );
  }

  if (isError || !data?.items?.length) {
    return (
      <motion.section
        className="w-full bg-Golden h-[44px] xl:text-center Flex-Center All-Font absolute z-50 left-1/2 -translate-x-1/2"
        variants={fadeVariants}
        initial="initial"
        animate="animate"
        transition={{ duration: 2, delay: 0.5 }}
      >
        <p>Ads coming soon...</p>
      </motion.section>
    );
  }

  const adItem = data.items[0];

  return (
    <motion.section
      className="w-full bg-Golden h-[44px] xl:text-center Flex-Center All-Font absolute z-50 left-1/2 -translate-x-1/2"
      variants={fadeVariants}
      initial="initial"
      animate="animate"
      transition={{ duration: 2, delay: 0.5 }}
    >
      <a
        href={adItem.description.btnPath}
        target="_blank"
        rel="noopener noreferrer"
        className="block cursor-pointer"
      >
        <p>
          {adItem.title}:
          <span className="Span-Text mr-1">
            {adItem.description.discount}% OFF
          </span>
          {adItem.description.title} -
          <span className="font-semibold mr-1">
            {adItem.description.btnText}
          </span>
          {adItem.description.subTitle}
        </p>
      </a>
    </motion.section>
  );
};

export default TopAds;