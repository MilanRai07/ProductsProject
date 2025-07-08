import { useRef, useState } from "react";
import { useGetAwardsQuery } from "../../../services/Awards";
import { AwardsQueryParams } from "../../../types/awards/AwardsApiResponseType";
import { ReactComponent as Triangle } from '../../../assets/svg/triangle.svg';
import ReactPaginate from "react-paginate";
import useSmoothScrollTop from "../../../customHook/useSmoothScrollTop";

const AwardsContainer: React.FC = () => {
    const [page, setPage] = useState<number>(1);

    const queryParams: AwardsQueryParams = {};
    if (page) {
        queryParams.page = page;
    }

    queryParams.limit = 6
    const { data, isFetching, isError } = useGetAwardsQuery(queryParams);
    let pagination = data?.pagination ?? { totalPages: 1, currentPage: 1, limit: 6 }
    const { totalPages, currentPage } = pagination;
    const PaginationRef = useRef(null);

    //scroll top
    const ScrollTop = useSmoothScrollTop();

    const goTop = () => {
        setTimeout(() => {
            if (PaginationRef.current) {
                ScrollTop(PaginationRef.current);
            }
        }, 100);
    }

    return (
        <section
            ref={PaginationRef}>
            <h1 className="font-bold text-[28px] md:text-[20px] sm:text-[18px]">Awards and Certificates</h1>
            <div className="grid grid-cols-3 gl3:grid-cols-2 n3:grid-cols-1 gap-6 l-g:gap-5 mt-10 w-full min-h-[600px]">
                {isFetching ? (
                    <p>Awards are Loading...</p>
                ) : isError ? (
                    <p className="text-red-500">Unable to get awards...</p>
                ) : data?.items && data?.items?.length > 0 ? (
                    data?.items.map((item) => (
                        <div key={item.id} className="a1:h-[500px] gl3:!h-[430px] h-[590px] gl5:!h-[400px] box-border bg-[#d9d9d9] p-4 rounded-[10px]">
                            <div className="h-[75%] bg-white rounded-[10px]">
                                {item.image_url ? (
                                    <img src={item.image_url} alt={item.title} className="w-full h-full object-cover" />
                                ) : (
                                    <p className="font-semibold text-[11px] 2x-l:text-[10px] 2x-l:leading-[18px] leading-[25px]">
                                        No image available at the moment
                                    </p>
                                )}
                                <div className="text-center p-4 gl3:p-4 n2:p-1 gl5:p-0 n3:p-5 n4:p-2">
                                    <h1 className="font-bold text-lg a1:text-base gl3:!text-sm sm:!text-xs">{item.title}</h1>
                                    <p className="font-medium text-base mt-5 a1:text-sm a1:mt-4 gl3:!text-xs">
                                        {`Issued Date: ${item.date_of_achivement}`}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500">No awards available at the moment.</p>
                )}
            </div>
            <div className="flex items-center justify-center gap-3 h-[43px] mt-16">
                <button
                    className="w-[36px] gl6:w-[30px] gl6:h-[30px] h-[36px] bg-DarkGolden hover:bg-Golden transition rounded-full relative cursor-pointer"
                    onClick={() => {
                        if (currentPage > 1) {
                            setPage(currentPage - 1);
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
                            setPage(event.selected + 1)
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
                        setPage(currentPage + 1)
                    }}
                    disabled={currentPage === totalPages}
                >
                    <Triangle className="w-[13px] gl6:w-[11px] gl6:h-[11px] h-[13px]  absolute top-1/2 -translate-y-1/2 left-[27%]" />
                </button>
            </div>
        </section>
    )
}
export default AwardsContainer;