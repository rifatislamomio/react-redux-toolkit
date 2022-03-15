import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const postsApi = createApi({
    reducerPath: 'posts',
    baseQuery: fetchBaseQuery({
        baseUrl: "https://jsonplaceholder.typicode.com/"
    }),
    endpoints: (builder) => ({
        getPosts: builder.query({
            query: () => 'posts'
        }),
        getComments: builder.query({
            query: (postId) => `posts/${postId}/comments`
        })
    })
})

export const { useGetPostsQuery, useGetCommentsQuery } = postsApi  //functions to fetch posts and comments