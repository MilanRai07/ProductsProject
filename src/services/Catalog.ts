import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_BASE_URL } from "../config/ProductBaseApi";
import { CatalogApiResponseType, CatalogQueryArguments, CatalogSearchQueryArguments, CategoryCatalogQueryArguments } from "../types/catalog/CatalogApiResponseType";

export const CatalogApi = createApi({
    reducerPath: 'CatalogApi',
    baseQuery: fetchBaseQuery({
        baseUrl: API_BASE_URL
    }),
    endpoints: (builder) => ({
        getCatalog: builder.query<CatalogApiResponseType, CatalogQueryArguments>({
            query: ({ currentPage = 1, limit = 10 }) => `/catalog?page=${currentPage}&limit=${limit}`
        }),
        getCatalogByCategoryId: builder.query<CatalogApiResponseType, CategoryCatalogQueryArguments>({
            query: ({ id, currentPage = 1, limit = 8 }) => `catalog/?category=${id}&page=${currentPage}&limit=${limit}`,
        }),
        getCatalogByParam: builder.query<CatalogApiResponseType, CatalogSearchQueryArguments>({
            query: ({ param, currentPage = 1, limit = 8, }) => `catalog/?q=${param}&page=${currentPage}&limit=${limit}`
        })
    })
})
export const { useGetCatalogQuery, useGetCatalogByCategoryIdQuery, useGetCatalogByParamQuery } = CatalogApi;