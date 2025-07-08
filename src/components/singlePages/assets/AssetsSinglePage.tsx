import AssetsDetail from "./AssetsDetail";
import YouMayLike from "./YouMayLike";
import { useParams } from 'react-router';
import { useGetByCategoryIdQuery, useGetProductsBySlugQuery } from '../../../services/ProductApi';
import DOMPurify from 'dompurify';


const AssetsSinglePage: React.FC = () => {
    const { slugs } = useParams();

    const { data: product, isFetching, isError } = useGetProductsBySlugQuery(slugs);

    //filter and get category according to the category we get from above product
    const categoryId = product?.item?.category_id;
    const { data: categoryProduct } = useGetByCategoryIdQuery(categoryId, { skip: !categoryId });

    if (isFetching) {
        return <div className="w-full h-screen flex justify-center items-center Loading">Loading...</div>;
    }

    if (isError || !product?.item) {
        return <div className="w-full h-screen flex justify-center items-center Loading">Error loading product details.</div>;
    }


    const { featured_image, title, content, description, specification, productColors, images } = product.item;

    const sanitizedContent = DOMPurify.sanitize(content);
    const sanitizedDescription = DOMPurify.sanitize(description);
    const sanitizedSpecification = DOMPurify.sanitize(specification)

    //to be sent to assetsDetail component
    const details = { title, content: sanitizedContent, description: sanitizedDescription, specificationList: sanitizedSpecification, featured_image, productColors, images }
    return (
        <main className="bg-[rgb(22,23,23)] w-full xl:px-[75px] m-d:px-[60px]">
            <div className="mt-44 w-full px-[75px] xl:px-[60px] sm:!px-0">
                <AssetsDetail {...details} />
                <div className="my-40 xl:my-28 sm:my-24">
                    <YouMayLike categoryProduct={categoryProduct || { items: [] }} />
                </div>
            </div>
        </main>
    )
}
export default AssetsSinglePage;