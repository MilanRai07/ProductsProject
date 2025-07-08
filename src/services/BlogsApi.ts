import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_BASE_URL } from "../config/ProductBaseApi";
import { BlogApiResponseType, BlogsQueryParams } from "../types/blogs/BlogsApiResponseType";

export const BlogsApi = createApi({
    reducerPath: 'BlogsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: API_BASE_URL
    }),
    endpoints: (builder) => ({

        getBlogs: builder.query<BlogApiResponseType, BlogsQueryParams>({
            query: (params) => ({
                url: '/blogs',
                params: {
                    page: params.page || 1,
                    limit: params.limit || 8,
                    sort: params.sort || 'desc',
                    category_title: params.category_title,
                    q: params.q,
                },
            }),
        }),
        getBlogsBySlug: builder.query({
            query: (slugs) => `blogs/${slugs}`,
        }),
    })
})
export const { useGetBlogsQuery, useGetBlogsBySlugQuery } = BlogsApi;