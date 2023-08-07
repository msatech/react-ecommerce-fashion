import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const bannersApi = createApi({
    reducerPath: 'bannersApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://ecom.alphacs.in/api/'
    }),
    endpoints: (builder) => ({
        getBanners: builder.query({
            query: () =>({
                url: 'get-banners',
                method: 'GET',
            }),
        }),
    })
})

export const { useGetBannersQuery,  } = bannersApi