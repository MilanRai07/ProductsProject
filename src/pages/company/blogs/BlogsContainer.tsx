import { useState, useRef, lazy, Suspense } from "react";
import { ReactComponent as Search } from '../../../assets/svg/search.svg';
import { FollowUs } from "../../../localData/followUs/FollowUsData";
import { Link } from "react-router-dom";
import { useGetCategoryQuery } from '../../../services/CategoryApi';
import { useGetBlogsQuery } from "../../../services/BlogsApi";
import { BlogsQueryParams } from "../../../types/blogs/BlogsApiResponseType";
import useSmoothScrollTop from "../../../customHook/useSmoothScrollTop";
const ShowBlogs = lazy(() => import('./ShowBlogs'))

const BlogsContainer: React.FC = () => {
    const [page, setPage] = useState<number>(1);
    const [searchParam, setSearchParam] = useState<string>('');
    const [selected, setSelected] = useState<string>('All');
    const searchInputRef = useRef<HTMLInputElement>(null)
    const { data, isFetching } = useGetCategoryQuery();
    const PaginationRef = useRef(null)

    const handleSelect = (category: string) => {
        setSelected(category)
        setSearchParam('')
        if (searchInputRef.current) {
            searchInputRef.current.value = '';
        }
    }

    const queryParams: BlogsQueryParams = {};
    if (selected !== 'All') {
        queryParams.category_title = selected;
    }
    if (searchParam) {
        queryParams.q = searchParam;
    }
    if (page) {
        queryParams.page = page;

    }
    queryParams.limit = 8

    const { data: blogsData, isFetching: isBlogsFetching } = useGetBlogsQuery(
        queryParams
    );

    //scroll top
    const ScrollTop = useSmoothScrollTop();

    const goTop = () => {
        setTimeout(() => {
            if (PaginationRef.current) {
                ScrollTop(PaginationRef.current);
            }
        }, 100);
    }
    const handleSearch = () => {
        if (searchInputRef.current) {
            setSearchParam(searchInputRef.current.value);
        }
        setSelected('');
    };
    return (
        <section className="text-black p-16"
            ref={PaginationRef}
        >
            {
                selected == 'Events' ? (
                    <h1 className="text-center font-bold text-[25px]">{`Explore our ${selected}`}</h1>
                ) : (
                    <h1 className="text-center font-bold text-[25px]">{`Explore ${selected} Featured Blogs`}</h1>
                )
            }
            {/* main div for blogs */}
            <div className="w-full grid grid-cols-3 gl5:grid-cols-1 gap-7 h-auto mt-14">
                {/* div for search parameter/category */}
                <aside className="gl5:col-span-2">
                    {/* for search bar */}
                    <div className="flex items-center border-[2.5px] border-black rounded-[15px] px-4 sl3:px-5 py-2 cursor-pointe w-full h-[44px] x-l:h-[37px] sm-d:h-[34px] xs:h-[32px]">

                        <input
                            ref={searchInputRef}
                            type="text"
                            placeholder="Search"
                            className="w-full h-full bg-transparent text-black text-[14px] x-l:text-[13px] sm-d:text-[12px] xs:text-[11px] leading-[40px] tracking-[0.05em] px-1 outline-none"
                        />
                        <div className="w-[30px] h-[30px] l-g:w-[27px] xs:w-[25px] xs:h-[25px] l-g:h-[27px] bg-DarkGolden rounded-full flex justify-center items-center"
                            onClick={handleSearch}
                        >
                            <Search className="h-[13px] w-[13px] l-g:w-[9px] xs:w-[7px] xs:h-[7px] l-g:h-[9px] cursor-pointer" />
                        </div>

                    </div>

                    <div className="w-full text-white bg-DarkGolden h-auto mt-7 rounded-[10px] p-5">
                        <h2 className="font-bold text-sm">Category List</h2>
                        <div className="h-1 w-11 mt-1 bg-white"></div>
                        {/* dynaic lists here */}
                        <div className="mt-7">
                            <div className="w-full flex justify-between mt-3 "
                                onClick={() => handleSelect('All')}
                            >
                                <p className={`font-medium text-xs cursor-pointer ${selected == 'All' ? 'text-black' : ''}`}>All</p>
                                {/* <div className="cursor-pointer w-[22px] gl4:w-[18px] gl4:h-[18px] h-[22px] text-black rounded-full text-[11px] gl4:text-[9px] flex justify-center items-center bg-white">
                                    23
                                </div> */}
                            </div>
                            {
                                isFetching ? (
                                    <div className="w-full flex justify-between mt-3">
                                        <p className="font-medium text-[10px] cursor-pointer">...looking for categories</p>
                                    </div>
                                ) : (
                                    data?.items?.map((items) => {
                                        const { id, name } = items;

                                        return (
                                            <div className="w-full flex justify-between mt-3" key={id}
                                                onClick={() => handleSelect(name)}
                                            >
                                                <p className={`font-medium text-xs cursor-pointer ${selected == name ? 'text-black' : ''}`}>{name}</p>
                                                {/* <div className="cursor-pointer w-[22px] h-[22px] gl4:w-[18px] gl4:h-[18px] text-black rounded-full text-[11px] gl4:text-[9px] flex justify-center items-center bg-white">
                                                    23
                                                </div> */}
                                            </div>
                                        )
                                    })
                                )
                            }
                        </div>
                    </div>
                    {/* for follow us */}
                    <div className="w-full bg-DarkGolden p-5 mt-7 rounded-[10px] text-white gl5:hidden">
                        <h2 className="font-bold text-sm">Follow Us</h2>
                        <div className="h-1 w-11 mt-1 bg-white"></div>
                        <div className="flex justify-around w-full mt-7">
                            {
                                FollowUs.map((item, index) => {
                                    const { icon, path } = item;
                                    return (
                                        <Link to={path} key={index}>
                                            <div className="w-[44px] h-[44px] l-g:w-[29px] gl4:w-[25px] gl4:h-[25px] l-g:h-[29px] rounded-full flex justify-center items-center bg-white">
                                                {icon}
                                            </div>
                                        </Link>
                                    )
                                })
                            }

                        </div>
                    </div>
                </aside>
                {/* div for blogs */}
                <div className="col-span-2">
                    {isBlogsFetching ? (
                        <div className="w-full flex justify-center Loading">Loading Blogs...</div>
                    ) : blogsData?.items && blogsData.items.length > 0 ? (
                        <Suspense>
                            <ShowBlogs blogs={blogsData} goTop={goTop} onPageChange={setPage} />
                        </Suspense>
                    ) : (
                        <div className="w-full flex justify-center Loading">No blogs found.</div>
                    )}

                </div>


                {/* in small screens show folow us in botom */}

                <div className="w-full hidden bg-DarkGolden p-5 mt-7 rounded-[10px] text-white gl5:block">
                    <h2 className="font-bold text-sm">Follow Us</h2>
                    <div className="h-1 w-11 mt-1 bg-white"></div>
                    <div className="flex w-full mt-7 justify-center gap-7" >
                        {
                            FollowUs.map((item, index) => {
                                const { icon, path } = item;
                                return (
                                    <Link to={path} key={index}>
                                        <div className="w-[44px] h-[44px] l-g:w-[29px] gl4:w-[25px] gl4:h-[25px] l-g:h-[29px] rounded-full flex justify-center items-center bg-white">
                                            {icon}
                                        </div>
                                    </Link>
                                )
                            })
                        }

                    </div>
                </div>
            </div >
        </section >
    )
}
export default BlogsContainer;