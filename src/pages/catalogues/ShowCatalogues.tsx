import { useEffect, useState } from "react";
import CategoryDropDown from "../../components/dropDown/CategoryDropDown";
import CategorySearch from "../../components/searchBar/CategorySearch";
import { useGetCategoryQuery } from "../../services/CategoryApi";
import { CategoryItems } from "../../types/category/CategoryApiResponseType.ts";
import { useGetCatalogByCategoryIdQuery, useGetCatalogQuery } from "../../services/Catalog";
import CatalogPaginationContainer from "./CatalogPaginationContainer";
import { useRef } from "react";
import useSmoothScrollTop from "../../customHook/useSmoothScrollTop";
import CatalogSearch from "./CatalogSearch";
import CatalogDetails from "./CatalogDetails";

const ShowCatalogues: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const limit = 8;

    const { data: categoryData } = useGetCategoryQuery(); //for getting categories list 
    const { data: catalogData, isFetching: isFetchingCatalog } = useGetCatalogQuery({ currentPage, limit }); //for all data fetching with limit
    const [selected, setSelected] = useState<string>('Category'); //which category is active
    const [options, setOptions] = useState<string[]>(['All']); //stores my options in category
    const [searchParam, setSearchParam] = useState<string>('') //stores search params from search box
    // below are for catalog details showing
    const [showDetail, setShowDetail] = useState<boolean>(false);
    const [catalogImages, setCatalogImages] = useState<string>();
    const [catalogTitle, setCatalogTitle] = useState<string>('')
    console.log(catalogImages, catalogTitle);

    const PaginationRef = useRef(null)

    //by this  i have assigned, options get from name of categoryData
    useEffect(() => {
        if (categoryData?.items) {
            const optionsFromQuery = categoryData.items
                .filter((item: CategoryItems) => item.name !== 'Events') //we don't wnts events to  show in asstes category
                .map((item: CategoryItems) => item.name);

            // Add "All" to the options
            setOptions(['All', ...optionsFromQuery]);
        }
    }, [categoryData?.items]);

    const selectedCategory = categoryData?.items.find(item => item.name === selected);

    let id = selectedCategory?.id ?? null
    // Fetch category data only if `id` is defined
    const { data: category, isFetching: isFetchingCategory, isError } = useGetCatalogByCategoryIdQuery(
        { id, currentPage, limit },
        { skip: id === null } //if there is no id, skip the fetching
    )


    //send the data to commonpagination Container conditionally
    const displayedCatalog = selected === "Category" ? catalogData : category;
    const isFetching = selected === "Category" ? isFetchingCatalog : isFetchingCategory;

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
            <div className="absolute z-20">
                <CategoryDropDown
                    selected={selected}
                    setCurrentPage={setCurrentPage}
                    setSelected={setSelected}
                    options={options}
                    disabled={searchParam !== '' || showDetail}

                />
            </div>
            <div className="absolute z-20 right-[55px] sl3:right-8">
                <CategorySearch setSearchParam={setSearchParam}
                    disabled={showDetail}
                />
            </div>

            {
                showDetail ? (
                    <div className="mt-28 w-full px-[50px]">
                        <CatalogDetails title={catalogTitle} images={catalogImages} setShowDetail={setShowDetail} />
                    </div>
                ) : (
                    searchParam === '' ? (
                        <div className="mt-28 w-full px-[50px]">
                            <CatalogPaginationContainer
                                goTop={goTop}
                                assetsArray={displayedCatalog}
                                onPageChange={setCurrentPage}
                                isFetching={isFetching}
                                isError={isError}
                                setShowDetail={setShowDetail}
                                setCatalogImages={setCatalogImages}
                                setCatalogTitle={setCatalogTitle}
                            />
                        </div>
                    ) : (
                        <div className="mt-28 w-full px-[50px]">
                            <CatalogSearch
                                goTop={goTop}
                                searchParam={searchParam}
                                setSearchParam={setSearchParam}
                                setShowDetail={setShowDetail}
                                setCatalogImages={setCatalogImages}
                                setCatalogTitle={setCatalogTitle}
                            />
                        </div>
                    )
                )
            }
        </section >
    )
}

export default ShowCatalogues;
