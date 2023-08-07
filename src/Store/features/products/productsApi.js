import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productsApi  = createApi({
    reducerPath: "productsApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://ecom.alphacs.in/api/" }),
    endpoints: (builder) => ({
        getAllProducts: builder.query({
            query: () => "get-products-and-product-variants",
        }),
        getSProducts: builder.query({
            query: (id) => `get-single-product`,
        }),
        getSingleProducts: builder.query({
            query: (data) => ({
                
                url: 'get-single-product',
                method: 'POST',
                headers: {
                    "content-type": "application/json",
                },
                body:data

            }),
        }),
        getProductCategory: builder.query({
            query: (category) => `products/category/${category}`,
        })
    })
})

export const { useGetAllProductsQuery, useGetSingleProductsQuery, useGetProductCategoryQuery } = productsApi





// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// export const productsApi  = createApi({
//     reducerPath: "productsApi",
//     baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com" }),
//     endpoints: (builder) => ({
//         getAllProducts: builder.query({
//             query: () => "products",
//         }),
//         getSingleProducts: builder.query({
//             query: (id) => `products/${id}`,
//         }),
//         getProductCategory: builder.query({
//             query: (category) => `products/category/${category}`,
//         })
//     })
// })

// export const { useGetAllProductsQuery, useGetSingleProductsQuery, useGetProductCategoryQuery } = productsApi

