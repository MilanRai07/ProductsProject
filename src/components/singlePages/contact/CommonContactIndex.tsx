import { useParams } from "react-router";
import HeroContactUs from "../../../components/heroComponent/HeroContactUs";
import CommonMapContainer from "../../../components/map/CommonMapContainer";
import GetInTouch from "../../../pages/contact/contactUs/GetInTouch";
import { useGetLocationQuery } from "../../../services/LocationApi";
import { useGetBrandQuery } from "../../../services/BrandApi";

const CommonContactIndex: React.FC = () => {
    const { slugs } = useParams();
    //decode brand name so that -,%,& lik this will be come as plain space
    const decodeBrandName = decodeURIComponent(slugs || '')

    //since decodeBrandName will get Godrej to godrej, we have to captilaize the first letter
    const capitalizeFirstLetter = (str: string) => str
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

    //fetch all the brands from query
    const { data: brands, isError: isBrandError, isFetching: isFetchingLoading } = useGetBrandQuery();

    //to make all the string in small removing unncessary smbols if necessary
    const slugify = (str: string) =>
        str
            .trim()
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[^\w-]+/g, '')
            .replace(/-+$/, '');

    //search the brands with out decode brand if it exists
    const searchBrand = brands?.items.find(
        (item) => slugify(item.brand_name) === slugify(decodeBrandName)
    );

    //if exists set the brand_id to the founded brand id
    const brand_id = searchBrand?.id ?? 0;

    const limit = 100;
    const currentPage = 1;

    //get the location according to the brand_id
    const { data, isFetching, isError } = useGetLocationQuery(
        { currentPage, limit, brand: brand_id },
        { skip: brand_id == null } // Avoid query if brand ID is not available
    );
    let getLocations = data?.items || []

    return (
        <main className="bg-white">
            <HeroContactUs title={capitalizeFirstLetter(decodeBrandName)} />
            <section className="p-[75px] text-black bg-white">
                <CommonMapContainer
                    title={capitalizeFirstLetter(decodeBrandName)}
                    getLocations={getLocations}
                    isFetching={isFetching}
                    isError={isError}
                />
            </section>
            <section className=" bg-[#161717]">
                {/* <GetInTouch brand_id={brand} /> */}
                <GetInTouch brand_id={brand_id} />
            </section>

        </main>
    )
}
export default CommonContactIndex;