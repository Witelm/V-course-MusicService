import axios from 'axios'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiContent = createApi({
  reducerPath: 'apiContent',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://painassasin.online/catalog/',
  }),
  endpoints: (builder) => ({
    getAllTracks: builder.query({
      query: () => 'track/all/',
    }),
    getTrackById: builder.query({
      query: (trackId) => `track/${trackId}`,
    }),
    getTrackDyName: builder.query({
      query: (trackName) => `track/${trackName}`,
    }),
    addTrackToFavorite: builder.mutation({
      query: (trackId) => ({
        url: `track/${trackId}/favorite/`,
        method: POST,
        body: trackId,
      }),
      deleteTrackFromFavorite: builder.mutation({
        query: (trackId) => ({
          url: `track/${trackId}/favorite/`,
          method: DELETE,
        }),
      }),
    }),
  }),
})

export const { useGetAllTracksQuery } = apiContent
