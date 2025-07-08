import { ReactComponent as Arrow } from '../../../assets/svg/blogArrow.svg'
import { BlogsQueryParams } from '../../../types/blogs/BlogsApiResponseType';
import { useGetCategoryQuery } from '../../../services/CategoryApi';
import { useEffect, useState } from 'react';
import { useGetBlogsQuery } from '../../../services/BlogsApi';
import { Link } from 'react-router-dom';

type props = {
    getCategoryId: number
    getCurrentId: number
}
const RelatedBlogs: React.FC<props> = ({ getCategoryId, getCurrentId }) => {
    const [categoryTitle, setCategoryTitle] = useState<string>('')

    //get Category name by filtering
    const { data: categoryData } = useGetCategoryQuery();
    useEffect(() => {
        if (categoryData) {
            let findCategory = categoryData?.items.find(items => items.id == getCategoryId);
            if (findCategory) {
                let category_title = findCategory.name;
                setCategoryTitle(category_title)
            }
        }
    }, [categoryData, getCategoryId])

    const queryParams: BlogsQueryParams = {};
    if (categoryTitle !== '') {
        queryParams.category_title = categoryTitle;
    }
    queryParams.limit = 3

    const { data: blogsData } = useGetBlogsQuery(
        queryParams
    );

    const relatedBlogs = blogsData?.items.filter(blog => blog.id !== getCurrentId) || [];
    return (
        <div className=" mt-20 sm:mt-16 sm-d:mt-14 font-bold text-[38px] leading-[100%]">
            <h2 className=' text-[28px] md:text-[20px] sm:text-[18px]'>Related Blogs</h2>

            <div className='mt-16 sm:mt-14 sm-d:mt-12'>
                <div className="grid grid-cols-3 l-g:grid-cols-1 gap-4 justify-between w-full">
                    {/* Blog cards here */}
                    {
                        relatedBlogs.map((items) => {
                            return (
                                <div key={items.id} className="w-full h-auto">
                                    <div className=''>
                                        <div className="bg-slate-300 h-[260px]">
                                            {
                                                items.featured_image !== '' ? (
                                                    <img src={items.featured_image} alt={items.title} className='w-full h-full object-cover'></img>
                                                ) : (
                                                    <p className='font-semibold text-[11px] 2x-l:text-[10px] 2x-l:leading-[18px] leading-[25px]'>No image available at the moment</p>
                                                )
                                            }
                                        </div>
                                        <div className="relative -mt-11 w-[95%] min-h-[243px] py-5 pr-5 bg-white">
                                            <h1 className='font-bold text-[15px] 2x-l:text-[14px] 2x-l:leading-[20px] leading-[25px]'>{items.title}</h1>
                                            <div className='mt-3 flex justify-between'>
                                                <p className='font-semibold text-[11px] 2x-l:text-[10px] 2x-l:leading-[18px] leading-[25px]'>
                                                    {new Date(items.createdAt).toLocaleDateString('en-US', {
                                                        year: 'numeric',
                                                        month: 'long',
                                                        day: 'numeric'
                                                    })}
                                                </p>
                                                <p className='font-semibold text-[11px] 2x-l:text-[10px] 2x-l:leading-[18px] leading-[25px]'>-{items.blogCategory.name}</p>
                                            </div>
                                            <p className='font-medium text-[10px] leading-[22px] mt-2'>{items.content.slice(0, 220) + '...'}</p>

                                            <Link to={`/blogs-singlepage/${items.slugs}`}>
                                                <div className='flex items-center gap-3 mt-3'>
                                                    <p className='font-bold text-[11px] 2x-l:text-[10px] hover:text-DarkGolden cursor-pointer'>
                                                        Read More
                                                    </p>
                                                    <Arrow className='w-[16px] h-[12px] 2x-l:w-[14px] 2x-l:h-[14px]' />
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
export default RelatedBlogs;

// return (
//     <div key={index} className="w-full h-auto">
//         <div className=''>
//             <div className="bg-slate-300 h-[260px]">
//                 <img src={'./he'} alt=''></img>
//             </div>
//             <div className="-mt-11 w-[95%] min-h-[243px] py-5 pr-5 bg-white">
//                 <h1 className='font-bold text-[15px] 2x-l:text-[14px] 2x-l:leading-[20px] leading-[25px]'>Hydraulic vs Mechanical Glass Door Floor Springs: Which Should You Choose?</h1>
//                 <p className='font-semibold text-[11px] 2x-l:text-[10px] 2x-l:leading-[18px] leading-[25px] mt-3'>February 17, 2025</p>
//                 <p className='font-medium text-[10px] leading-[22px] mt-2'>Kitchen clutter can turn meal preparation into a frustrating experience. Finding groceries like fruits, vegetables, etc., amidst the mess wastes. Kitchen clutter can turn meal preparation into a frustrating experience. Finding
//                     groceries like fruits, vegetables, etc., amidst the mess wastes.</p>

//                 <div className='flex items-center gap-3 mt-3'>
//                     <p className='font-bold text-[11px] 2x-l:text-[10px] hover:text-DarkGolden cursor-pointer'>
//                         Read More
//                     </p>
//                     <Arrow className='w-[16px] h-[12px] 2x-l:w-[14px] 2x-l:h-[14px]' />
//                 </div>
//             </div>
//         </div>
//     </div>
// )