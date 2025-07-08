import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_BASE_URL } from "../config/ProductBaseApi";
import { ProductsQueryArguments } from "../types/product/ApiResponseTypes";
import { DesignerApiResponseType } from "../types/designer/DesignerApiResponseType";

export const DesignerApi = createApi({
    reducerPath: 'DesignerApi',
    baseQuery: fetchBaseQuery({
        baseUrl: API_BASE_URL
    }),
    endpoints: (builder) => ({
        getDesigner: builder.query<DesignerApiResponseType, ProductsQueryArguments>({
            query: ({ currentPage = 1, limit = 10 }) => `/designer?page=${currentPage}&limit=${limit}`
        })
    })
})
export const { useGetDesignerQuery } = DesignerApi;