import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_BASE_URL } from "../config/ProductBaseApi";

interface SubscribeRequest {
    email: string;
}

interface SubscribeResponse {
    message: string;
}

export const SubscribePostApi = createApi({
    reducerPath: "SubscribePostApi",
    baseQuery: fetchBaseQuery({
        baseUrl: API_BASE_URL,
    }),
    endpoints: (builder) => ({
        subscribeEmail: builder.mutation<SubscribeResponse, SubscribeRequest>({
            query: (data) => ({
                url: "/subscriber",
                method: "POST",
                body: data,
                headers: { "Content-Type": "application/json" },
            }),
        }),
    }),
});
export const { useSubscribeEmailMutation } = SubscribePostApi;
