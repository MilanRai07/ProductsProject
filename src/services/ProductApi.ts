import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_BASE_URL } from "../config/ProductBaseApi";
import { ApiResponseType, CategoryQueryArguments, ProductsQueryArguments, SearchQueryArguments } from "../types/product/ApiResponseTypes";

export const ProductApi = createApi({
    reducerPath: 'ProductApi',
    baseQuery: fetchBaseQuery({
        baseUrl: API_BASE_URL
    }),
    endpoints: (builder) => ({
        getProducts: builder.query<ApiResponseType, ProductsQueryArguments>({
            query: ({ currentPage = 1, limit = 10 }) => `/product?page=${currentPage}&limit=${limit}`
        }),
        getProductsBySlug: builder.query({
            query: (slugs) => `product/${slugs}`,
        }),
        getByCategoryId: builder.query({
            query: (id) => `product/?category=${id}&limit=8`
        }),
        getByPaginateCategoryId: builder.query<ApiResponseType, CategoryQueryArguments>({
            query: ({ id, currentPage = 1, limit = 8 }) => `product/?category=${id}&page=${currentPage}&limit=${limit}`,
        }),
        getProductsByParam: builder.query<ApiResponseType, SearchQueryArguments>({
            query: ({ param, currentPage = 1, limit = 8, id, sortOrder }) => {
                let queryStr = `product/?q=${param}&page=${currentPage}&limit=${limit}`;
                if (id) {
                    queryStr += `&category=${id}`;
                }
                if (sortOrder) {
                    queryStr += `&sortOrder=${sortOrder}`
                }

                return queryStr;
            }
        })

    })
})
export const { useGetProductsQuery,
    useGetProductsBySlugQuery,
    useGetByCategoryIdQuery,
    useGetByPaginateCategoryIdQuery,
    useGetProductsByParamQuery
} = ProductApi;