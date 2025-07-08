import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_BASE_URL } from "../config/ProductBaseApi";

export const TestimonialApi = createApi({
    reducerPath: 'TestimonialApi',
    baseQuery: fetchBaseQuery({
        baseUrl: API_BASE_URL
    }),
    endpoints: (builder) => ({
        getTestimonial: builder.query({
            query: ({ currentPage = 1, limit = 10 }) => `/testimonial?page=${currentPage}&limit=${limit}`
        }),
    })
})
export const { useGetTestimonialQuery } = TestimonialApi;