import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_BASE_URL } from "../config/ProductBaseApi";
import { CategoryApiResponseType } from "../types/category/CategoryApiResponseType.ts";

export const CategoryApi = createApi({
    reducerPath: 'CategoryApi',
    baseQuery: fetchBaseQuery({
        baseUrl: API_BASE_URL
    }),
    endpoints: (builder) => ({
        getCategory: builder.query<CategoryApiResponseType, void>({
            query: () => '/category'
        })
    })
})
export const { useGetCategoryQuery } = CategoryApi;