import { Link } from "react-router-dom";
import { ApiResponseType, ProductTypes } from "../../../types/product/ApiResponseTypes";
import AssetsCard from "../../cards/AssetsCard";

type Props = {
    categoryProduct: ApiResponseType;
};

const YouMayLike: React.FC<Props> = ({ categoryProduct }) => {
    if (!categoryProduct || !categoryProduct.items?.length) {
        return null; // Don't render if there's no data
    }

    return (
        <section>
            <h1 className="font-bold text-[35px] xl:text-[26px] sm:!text-[24px] leading-[40px] tracking-4 xl:text-center">You may also like</h1>
            <div className="flex justify-center flex-wrap gap-y-9 gap-6 mb-6 w-full mt-16">
                {categoryProduct.items.map((asset: ProductTypes) => (
                    <Link key={asset.id} to={`/assets-singlepage/${asset.slugs}`}>
                        <AssetsCard image={asset.featured_image} title={asset.title} />
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default YouMayLike;
