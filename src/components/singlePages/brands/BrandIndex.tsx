import { lazy, Suspense } from "react";
import BrandsBanner from "../../../components/brandsToContactBanner/BrandsBanner";
import ShopByCategory from "../../../components/container/brands-container/ShopByCategory";
import HeroIndia from "../../../components/heroComponent/HeroIndia";
import MapEnd from "../../../components/map/MapEnd";
import { useGetBrandQuery, useGetProductByBrandIdQuery } from "../../../services/BrandApi";
import { useParams } from "react-router";
const ProductCollectionSlider = lazy(() => import('../../../components/slider/ProductCollectionSlider'))

const BrandIndex: React.FC = () => {

    const { slugs } = useParams();

    const decodeBrandName = decodeURIComponent(slugs || '');

    const capitalizeFirstLetter = (str: string) => str
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

    const { data: brands, isError: isBrandError, isFetching: isFetchingLoading } = useGetBrandQuery();


    const slugify = (str: string) =>
        str
            .trim()
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[^\w-]+/g, '')
            .replace(/-+$/, '');

    const searchBrand = brands?.items.find(
        (item) => slugify(item.brand_name) === slugify(decodeBrandName)
    );

    const BrandDetail = searchBrand?.brand_details ??
        'Get the premium collection, showcased with elegance and style. Transform your spaces with top-quality designs, now at an unbeatable 50% off.'
    const BrandLogo = searchBrand?.brand_logo;

    const { data, isLoading: isFetchingBrand } = useGetProductByBrandIdQuery(searchBrand?.id ?? null, { skip: !searchBrand?.id });

    if (isFetchingLoading || isFetchingBrand) {
        return (
            <div className="w-full h-screen flex justify-center items-center">
                Loading...
            </div>
        )
    }

    const heroData = data?.items?.length ? data.items[0].product : null;
    const descendingData = data?.items ? [...data.items].sort((a, b) => b.id - a.id) : [];

    const bannerData = {
        title: `${decodeBrandName} Brings style to your space`,
        description: 'Elevate your interiors with premium design solutions. We deliver to over 100 countries, ensuring that sophistication reaches your doorstep.',
        path: `/contactus/${slugs}`
    }

    return (
        <main className="bg-white text-black">
            {
                isBrandError ?
                    (
                        <div className="w-full h-[200px] flex justify-center items-center pt-28">
                            Failed to load brand data. Sorry....
                        </div>
                    ) :

                    !searchBrand ? (
                        <div className="w-full h-[200px] flex justify-center items-center pt-28">
                            {` ${capitalizeFirstLetter(decodeBrandName)} brand not found at the moment.`}
                        </div>
                    ) :
                        !data || !data.items || data.items.length === 0 ? (
                            <div className="w-full h-[200px] flex justify-center items-center pt-28">
                                {` Sorry, no data available for ${capitalizeFirstLetter(decodeBrandName)}...`}
                            </div>
                        ) : (
                            <>
                                <section
                                    style={{
                                        background: 'rgba(64, 64, 64, 0.08)'
                                    }}
                                >
                                    <div className="p-[65px]">
                                        <HeroIndia heroData={heroData}
                                            brandDetail={BrandDetail}
                                            title={capitalizeFirstLetter(decodeBrandName)}
                                            logo={BrandLogo}
                                        />
                                    </div>
                                </section>
                                {/* the heading of shop by cateory is changed to watch our latest products */}
                                <section className="p-[75px]">
                                    <ShopByCategory data={data} />
                                </section>
                                <Suspense fallback={<div className="Loading min-h-48 flex justify-center w-full">Loading...</div>}>
                                    <ProductCollectionSlider data={descendingData} />
                                </Suspense>
                            </>
                        )
            }
            <BrandsBanner title={capitalizeFirstLetter(bannerData.title)} description={bannerData.description} path={bannerData.path} />
            <MapEnd />
        </main>
    )
}
export default BrandIndex;

