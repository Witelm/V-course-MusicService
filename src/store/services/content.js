import axios from 'axios'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const ALL = 'https://painassasin.online/catalog/track/all/'

// export const getContent = async () => {
//   try {
//     const { data } = await axios.get(ALL)
//     console.log({ data })
//     return { data }
//   } catch (error) {
//     console.log(error)
//   }
// }

export const apiContent = createApi({
  reducerPath: 'content',
  baseQuery: fetchBaseQuery({
    baseURL: 'https://painassasin.online',
  }),
  endpoints: (builder) => ({
    getAllTracks: builder.query({
      query: () =>
        baseQuery({
          url: '/catalog/track/all/',
          method: 'GET',
        }),
    }),
  }),
})

export const { useGetAllTracksQuery } = apiContent
