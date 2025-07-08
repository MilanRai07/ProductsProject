import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_BASE_URL } from "../config/ProductBaseApi";
import { GalleryApiResponse, GalleryQueryType } from "../types/gallery/GalleryApiResponseType";

export const GalleryApi = createApi({
    reducerPath: 'GalleryApi',
    baseQuery: fetchBaseQuery({
        baseUrl: API_BASE_URL
    }),
    endpoints: (builder) => ({
        getGallery: builder.query<GalleryApiResponse, GalleryQueryType>({
            query: ({ currentPage = 1, limit = 10 }) => `/gallery?page=${currentPage}&limit=${limit}`
        }),
    })
})
export const { useGetGalleryQuery } = GalleryApi;