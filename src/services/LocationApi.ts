import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_BASE_URL } from "../config/ProductBaseApi";
import { LocationApiResponseType, LocationQueryArgument } from "../types/locations/LocationApiResponseType";

export const LocationApi = createApi({
    reducerPath: 'LocationApi',
    baseQuery: fetchBaseQuery({
        baseUrl: API_BASE_URL
    }),
    endpoints: (builder) => ({
        getLocation: builder.query<LocationApiResponseType, LocationQueryArgument>({
            query: ({ currentPage = 1, limit = 100, brand }) => `/location?page=${currentPage}&limit=${limit}&sort=asc&brand=${brand}`
        })
    })
})
export const { useGetLocationQuery } = LocationApi;