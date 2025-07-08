import { useEffect, useRef, useState } from "react";
import CategoryDropDown from "../../../components/dropDown/CategoryDropDown";
import CategorySearch from "../../../components/searchBar/CategorySearch";
import { useGetByPaginateCategoryIdQuery, useGetProductsQuery } from "../../../services/ProductApi";
import CommonPaginationContainer from "../../../components/container/pagination-container/CommonPaginationContainer";
import { useGetCategoryQuery } from "../../../services/CategoryApi";
import { CategoryItems } from "../../../types/category/CategoryApiResponseType.ts";
import SearchPaginate from "../../../components/container/pagination-container/SearchPagination";
import useSmoothScrollTop from "../../../customHook/useSmoothScrollTop";

const ShowAssets: React.FC = () => {

    const [currentPage, setCurrentPage] = useState<number>(1);
    const limit = 100;

    const { data: categoryData } = useGetCategoryQuery(); //for getting categories list 
    const { data: productsData, isFetching: isFetchingProducts } = useGetProductsQuery({ currentPage, limit }); //for all data fetching with limit
    const [selected, setSelected] = useState<string>('Category'); //which category is active
    const [options, setOptions] = useState<string[]>(['All']); //stores my options in category
    const [searchParam, setSearchParam] = useState<string>('') //stores search params from search box

    const PaginationRef = useRef(null)

    //by this  i have assigned, options get from name of categoryData
    useEffect(() => {
        if (categoryData?.items) {
            const optionsFromQuery = categoryData.items
                .filter((item: CategoryItems) => item.name !== 'Events') //we don't wnts events to  show in asstes category
                .map((item: CategoryItems) => item.name);

            // Add "All" to the options
            setOptions(['All', ...optionsFromQuery]);

            console.log(optionsFromQuery);
        }
    }, [categoryData?.items]);


    const selectedCategory = categoryData?.items.find(item => item.name === selected);

    let id = selectedCategory?.id ?? null
    // Fetch category data only if `id` is defined
    const { data: category, isFetching: isFetchingCategory, isError } = useGetByPaginateCategoryIdQuery(
        { id, currentPage, limit },
        { skip: id === null } //if there is no id, skip the fetching
    )
    console.log();


    //send the data to commonpagination Container conditionally
    const displayedProducts = selected === "Category" ? productsData : category;
    const isFetching = selected === "Category" ? isFetchingProducts : isFetchingCategory;

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
            <div className="absolute z-20 xs:left-5">
                <CategoryDropDown
                    selected={selected}
                    setCurrentPage={setCurrentPage}
                    setSelected={setSelected}
                    options={options}
                    disabled={searchParam !== ''}

                />
            </div>
            <div className="absolute z-20 right-[55px] sl3:right-8 xs:right-2">
                <CategorySearch setSearchParam={setSearchParam} />
            </div>

            {
                //pagination container 
                searchParam == '' ? (
                    <div className=" mt-28 w-full px-[50px] gl6:px-[0px]">
                        <CommonPaginationContainer assetsArray={displayedProducts}
                            onPageChange={setCurrentPage}
                            isFetching={isFetching}
                            isError={isError}
                            goTop={goTop}
                        />
                    </div>) : (

                    // search box products container 
                    <div className=" mt-28 w-full px-[50px]">
                        <SearchPaginate searchParam={searchParam} setSearchParam={setSearchParam} />
                    </div>
                )
            }

        </section >
    )
}

export default ShowAssets;
