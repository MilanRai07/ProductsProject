import { useParams } from 'react-router'
import { useGetBlogsBySlugQuery } from '../../../services/BlogsApi';
import RelatedBlogs from './RelatedBlogs';
import DOMPurify from 'dompurify';

const BlogsSinglePage: React.FC = () => {
    const { slugs } = useParams();
    const { data, isFetching, isError } = useGetBlogsBySlugQuery(slugs);

    //for related blogs
    const getCategoryId = data?.item?.category ?? null;
    const getCurrentId = data?.item?.id

    if (isFetching) {
        return <div className="w-full !h-screen flex justify-center items-center Loading">Loading...</div>
    }

    if (isError || !data?.item) {
        return <div className="w-full !h-screen flex justify-center items-center Loading">Error loading product details.</div>;
    }
    const sanitizedContent = DOMPurify.sanitize(data?.item.content)
    return (
        <main className="bg-white min-h-screen p-[75px] 2xl:px-[140px] m-d:px-[80px] text-black">
            <div className="mt-20 sm-d:mt-16 xs:mt-12">
                <p className="font-medium text-sm sm:text-[13px] sm-d:text-xs text-black/80">
                    {new Date(data.item.createdAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    })}
                </p>
                <h1 className="font-bold text-[38px] xl:text-[32px] mlg:text-[28px] sm:text-[22px] sm-d:text-[21px] sm-d:leading-[30px] sm:leading-[35px] xl:w-full w-[840px] leading-[44px] mt-7 sm:mt-6 sm-d:mt-5 ">
                    {data.item.title}</h1>
                <div className="full h-[456px] xl:h-[380px] sm:h-[3400px] sm-d:h-[300px] bg-slate-400 overflow-hidden mt-7 sm:mt-6 sm-d:mt-5 ">
                    {data.item.featured_image ? (
                        <img
                            src={data.item.featured_image}
                            alt={data.item.title.slice(0, 50)}
                            className="object-cover w-full h-full "
                        />
                    ) : (

                        <p className="text-sm text-gray-500">No Image Available</p>

                    )}
                </div>
                <div dangerouslySetInnerHTML={{ __html: sanitizedContent }} className="mt-7 sm:mt-6 sm-d:mt-5 font-medium text-base sm:text-sm sm-d:text-xs sm:leading-[27px] sm-d:text-[15px] leading-[30px]" />
            </div>

            {/* blogs here */}
            {
                getCategoryId !== null && (
                    <RelatedBlogs getCategoryId={getCategoryId} getCurrentId={getCurrentId} />
                )
            }
        </main>
    )
}
export default BlogsSinglePage