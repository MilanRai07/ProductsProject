import { useRef, useState } from "react";
import CategorySearch from "../../../components/searchBar/CategorySearch";
import { useGetByPaginateCategoryIdQuery } from "../../../services/ProductApi";
import CommonPaginationContainer from "../../../components/container/pagination-container/CommonPaginationContainer";
import { useGetCategoryQuery } from "../../../services/CategoryApi"
import SubAssetSearch from "./SubAssetSearch";
import useSmoothScrollTop from "../../../customHook/useSmoothScrollTop";

type props = {
    name: string
}

const SubAssetContainer: React.FC<props> = ({ name }) => {
    console.log(name);

    const PaginationRef = useRef(null)
    const [currentPage, setCurrentPage] = useState<number>(1);
    const limit = 100;
    const [searchParam, setSearchParam] = useState<string>('') //stores search params from search box

    //get all the catgeory list from api
    const { data: categoryData } = useGetCategoryQuery();

    //search the category that has same name of name props
    let findCategory = categoryData?.items.find((items) => {
        return items.name.toLowerCase() == name.toLowerCase()
    })

    let id = findCategory?.id ?? null;
    // Fetch category data
    const { data, isFetching, isError } = useGetByPaginateCategoryIdQuery(
        { id, currentPage, limit },
        { skip: id === null } //if there is no id, skip the fetching
    )
    const ScrollTop = useSmoothScrollTop();
    const goTop = () => {
        setTimeout(() => {
            if (PaginationRef.current) {
                ScrollTop(PaginationRef.current);
            }
        }, 100);
    }
    return (
        <section className="w-full p-[55px] sl3:p-11 sl3:px-7 bg-[rgb(22,23,23)] relative"
            ref={PaginationRef}
        >
            <div className="absolute z-20 right-[55px] sl3:right-8">
                <CategorySearch setSearchParam={setSearchParam} />
            </div>

            {
                //pagination container 
                searchParam == '' ? (
                    <div className=" mt-28 w-full px-[50px] gl6:px-0">
                        <CommonPaginationContainer goTop={goTop} assetsArray={data} onPageChange={setCurrentPage} isFetching={isFetching} isError={isError} />
                    </div>) : (

                    // search box products container 
                    <div className=" mt-28 w-full px-[50px]">
                        {
                            id !== null && (
                                <SubAssetSearch searchParam={searchParam} setSearchParam={setSearchParam} id={id} />
                            )
                        }
                        {
                            id == null && (
                                <div className="h-[500px] Loading flex justify-center items-center">There are no any datas..</div>
                            )
                        }
                    </div>
                )
            }

        </section >
    )
}

export default SubAssetContainer;
