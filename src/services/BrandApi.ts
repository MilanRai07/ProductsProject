import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_BASE_URL } from "../config/ProductBaseApi";
import { BrandApiResposeType, ProductsByBrandApiResponse } from "../types/brand/BrandApiResponseType";

export const BrandApi = createApi({
    reducerPath: 'BrandApi',
    baseQuery: fetchBaseQuery({
        baseUrl: API_BASE_URL
    }),
    endpoints: (builder) => ({
        getBrand: builder.query<BrandApiResposeType, void>({
            query: () => '/brands'
        }),
        getProductByBrandId: builder.query<ProductsByBrandApiResponse, number | null>({
            query: (id) => `/brands/product/${id}?limit=60`
        })
    })
})
export const { useGetBrandQuery, useGetProductByBrandIdQuery } = BrandApi;