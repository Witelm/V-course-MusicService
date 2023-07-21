import axios from 'axios'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiContent = createApi({
  reducerPath: 'apiContent',
  baseQuery: fetchBaseQuery({
    baseURL: 'https://painassasin.online/catalog',
  }),
  endpoints: (builder) => ({
    getAllTracks: builder.query({
      query: () => 'https://painassasin.online/catalog/track/all/',
    }),
  }),
})

export const { useGetAllTracksQuery } = apiContent
