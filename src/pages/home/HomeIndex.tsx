import React, { lazy, Suspense } from "react";
import HeroHome from "../../components/heroComponent/HeroHome";
import ChooseUs from "./chooseUs/ChooseUs";
import Collections from "./collection/Collections";
import Testimonials from "./testimonials/Testimonials";
import Videos from "./videos/Videos";
import Slider from "./slider/Slider";

const CompanyBrands = lazy(() => import("./companyBrands/CompanyBrands"));
const GalleryIndex = lazy(() => import('./gallery/GalleryIndex'))

const HomeIndex: React.FC = () => {
   return (
      <main>
         <HeroHome />
         <Collections />
         <Slider />
         <ChooseUs />
         <Videos />
         <Suspense>
            <CompanyBrands />
         </Suspense>
         <Suspense>
            <section className="w-full bg-black 3xl:flex 3xl:justify-center">
               <GalleryIndex />
            </section>
         </Suspense>
         <Testimonials />
      </main>
   );
};

export default HomeIndex;
