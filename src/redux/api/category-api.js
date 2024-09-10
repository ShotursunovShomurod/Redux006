import { api } from './index'

export const categoryApi = api.injectEndpoints({
  endpoints: (build) => ({
    getCategory: build.query({
      query: (params) => ({ 
        url: '/category',
        params 
      }),
      providesTags:["Category"]
    }),
    getPageCreate: build.query({
      query: ({limit, page}) => ({ 
        url: `category/?limit=${limit}&page=${page}`,
      }),
      providesTags:["Category"]
    }),
 


    createCategory: build.mutation({
      query: (body)=> ({
        url:"/category",
        method: "POST",
        body
      }),
      invalidatesTags: ["Category"]
    }),
    deleteCategory:build.mutation({
        query: (id)=> ({
            url: `/category/${id}`,
            method: "DELETE"
        }),
        invalidatesTags: ["Category"]
    }),
    updateCategory: build.mutation({
      query: ({id, body}) => ({
        url: `category/${id}`,
        method: "PUT",
        body
      }),
      invalidatesTags: ["Category"]
    })
  }),
});

export const {useCreateCategoryMutation, useUpdateCategoryMutation, useDeleteCategoryMutation, useGetCategoryQuery, useGetPageCreateQuery} = categoryApi