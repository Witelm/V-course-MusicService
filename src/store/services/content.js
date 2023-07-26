import axios from 'axios'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { useSelector } from 'react-redux'

const getToken = () => {
  const TOKEN = useSelector((state) => state.user.token)
  return TOKEN
}

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
      query: (trackId) => `track/${trackId}/`,
    }),
    getTrackDyName: builder.query({
      query: (trackName) => `track/${trackName}/`,
    }),
    getFavoriteAllTrack: builder.query({
      query: () => `track/favorite/all/`,
    }),
    addTrackToFavorite: builder.mutation({
      query: (trackId, TOKEN) => ({
        url: `track/${trackId}/favorite/`,
        method: 'POST',
        body: trackId,
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      }),
    }),
    deleteTrackFromFavorite: builder.mutation({
      query: (trackId) => ({
        url: `track/${trackId}/favorite/`,
        method: 'DELETE',
      }),
    }),
  }),
})

export const {
  useGetAllTracksQuery,
  useAddTrackToFavoriteMutation,
  useDeleteTrackFromFavoriteMutation,
  useGetFavoriteAllTrackQuery,
} = apiContent
