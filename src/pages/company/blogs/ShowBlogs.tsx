import { useRef } from 'react';
import { ReactComponent as Arrow } from '../../../assets/svg/blogArrow.svg';
import ReactPaginate from "react-paginate";
import { ReactComponent as Triangle } from '../../../assets/svg/triangle.svg';
import { BlogApiResponseType } from '../../../types/blogs/BlogsApiResponseType';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import DOMPurify from 'dompurify';
import { NavLink } from 'react-router-dom';

type props = {
    blogs: BlogApiResponseType
    goTop: () => void
    onPageChange: (newPage: number) => void;
}

const ShowBlogs: React.FC<props> = ({ blogs, goTop, onPageChange }) => {
    let pagination = blogs.pagination ?? { totalPages: 1, page: 1, limit: 8 }
    const { totalPages, currentPage } = pagination;
    const PaginationRef = useRef(null);

    return (
        <div ref={PaginationRef}>
            <motion.div className="grid grid-cols-2 l-g:grid-cols-1 gap-4 justify-between w-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
            >

                {
                    blogs.items.map((items) => {
                        const sanitizedContent = DOMPurify.sanitize(items.content)
                        return (
                            <div key={items.id} className="w-full h-auto">
                                <div className=''>
                                    <div className="bg-slate-300 h-[260px] w-full overflow-hidden">
                                        {
                                            items.featured_image !== '' ? (
                                                <img src={items.featured_image} alt={items.title} className='w-full h-full object-cover'></img>
                                            ) : (
                                                <p className='font-semibold text-[11px] 2x-l:text-[10px] 2x-l:leading-[18px] leading-[25px]'>No image available at the moment</p>
                                            )
                                        }
                                    </div>
                                    <div className="relative -mt-11 w-[95%] min-h-[200px] n1:min-h-[250px] py-5 pr-5 bg-white">
                                        <h1 className='font-bold text-[15px] 2x-l:text-[14px] 2x-l:leading-[20px] min-h-[40px] leading-[25px]'>{items.title.slice(0, 75) + '...'}</h1>
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
                                        <p dangerouslySetInnerHTML={{ __html: sanitizedContent.slice(0, 220) + '...' }} className='font-medium text-[10px] leading-[22px] mt-2 min-h-[90px]' />


                                        <NavLink to={`/blogs-singlepage/${items.slugs}`}>
                                            <div className='flex items-center gap-3 mt-3'>
                                                <p className='font-bold text-[11px] 2x-l:text-[10px] hover:text-DarkGolden cursor-pointer'>
                                                    Read More
                                                </p>
                                                <Arrow className='w-[16px] h-[12px] 2x-l:w-[14px] 2x-l:h-[14px]' />
                                            </div>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </motion.div>
            <div className="flex items-center justify-center gap-3 h-[43px] mt-16">
                <button
                    className="w-[36px] gl6:w-[30px] gl6:h-[30px] h-[36px] bg-DarkGolden hover:bg-Golden transition rounded-full relative cursor-pointer"
                    onClick={() => {
                        if (currentPage > 1) {
                            onPageChange(currentPage - 1);
                            goTop();
                        }

                    }
                    }
                    disabled={currentPage === 1}

                >
                    <Triangle className="w-[13px] gl6:w-[11px] gl6:h-[11px] h-[13px] absolute top-1/2 -translate-y-1/2 left-[27%]" />
                </button>

                {totalPages > 1 && (
                    <ReactPaginate
                        previousLabel={null}
                        nextLabel={null}
                        breakLabel={'...'}
                        breakClassName={'break-me'}
                        pageCount={totalPages}
                        marginPagesDisplayed={1}
                        pageRangeDisplayed={1}
                        onPageChange={(event) => {
                            onPageChange(event.selected + 1)
                            goTop()
                        }}
                        containerClassName={'flex h-[40px] gl6:h-[35px] items-center gap-3 bg-DarkGolden rounded-[30px] font-extrabold text-[15px] leading-[40px] tracking-4% transition'}
                        pageClassName={'w-[26px] h-[26px] text-white gl6:w-[23px] gl6:h-[23px] gl6:text-xs flex justify-center items-center rounded-full transition-all duration-300 ease-in-out'}
                        activeClassName={'bg-white !text-black'}
                        forcePage={currentPage - 1}
                    />
                )}

                <button
                    className="w-[36px] gl6:w-[30px] gl6:h-[30px] h-[36px] bg-DarkGolden hover:bg-Golden transition rounded-full relative rotate-180 cursor-pointer"
                    onClick={() => {
                        goTop()
                        onPageChange(currentPage + 1)
                    }}
                    disabled={currentPage === totalPages}
                >
                    <Triangle className="w-[13px] gl6:w-[11px] gl6:h-[11px] h-[13px]  absolute top-1/2 -translate-y-1/2 left-[27%]" />
                </button>
            </div>
        </div >
    )
}
export default ShowBlogs;


