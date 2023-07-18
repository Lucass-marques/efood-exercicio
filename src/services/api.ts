import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Food, Restaurant } from '../pages/Home'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getRestaurantsList: builder.query<Restaurant[], void>({
      query: () => 'restaurantes'
    }),
    getFoodsList: builder.query<Food[], string>({
      query: (id) => `restaurantes/${id}`
    }),
    getBanner: builder.query<Restaurant, string>({
      query: (id) => `restaurantes/${id}`
    })
  })
})

export const {
  useGetRestaurantsListQuery,
  useGetFoodsListQuery,
  useGetBannerQuery
} = api

export default api
