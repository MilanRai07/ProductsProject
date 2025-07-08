import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_BASE_URL } from "../config/ProductBaseApi";
import { AwardsApiResponseType, AwardsQueryParams } from "../types/awards/AwardsApiResponseType";

export const AwardsApi = createApi({
    reducerPath: 'AwardsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: API_BASE_URL
    }),
    endpoints: (builder) => ({

        getAwards: builder.query<AwardsApiResponseType, AwardsQueryParams>({
            query: (params) => ({
                url: '/awards',
                params: {
                    page: params.page || 1,
                    limit: params.limit || 8,
                    sort: params.sort || 'desc',
                    q: params.q,
                },
            }),
        }),
        // getAwardsBySlug: builder.query({
        //     query: (slugs) => `blogs/${slugs}`,
        // }),
    })
})
export const { useGetAwardsQuery } = AwardsApi;