import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_BASE_URL } from "../config/ProductBaseApi";
import { PopUpApiResponseType, PopUpQuery } from "../types/popup/PopUpResponseType";

export const PopUpApi = createApi({
    reducerPath: 'PopUpApi',
    baseQuery: fetchBaseQuery({
        baseUrl: API_BASE_URL
    }),
    endpoints: (builder) => ({
        getPopUp: builder.query<PopUpApiResponseType, PopUpQuery>({
            query: ({ currentPage, limit }) => `/popup?page=${currentPage}&limit=${limit}`
        }),
    })
})
export const { useGetPopUpQuery } = PopUpApi;