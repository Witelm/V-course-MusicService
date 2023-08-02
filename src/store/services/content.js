import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://painassasin.online/catalog/',
  prepareHeaders: (headers, { getState }) => {
    const token = getState().user.token
    if (token) {
      headers.set('authorization', `Bearer ${token}`)
    }
  },
})

export const apiContent = createApi({
  reducerPath: 'apiContent',
  baseQuery,
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
    getSelectionTracks: builder.query({
      query: () => `selection/`,
    }),
    getFavoriteAllTrack: builder.query({
      query: () => `track/favorite/all/`,
    }),
    addTrackToFavorite: builder.mutation({
      query: (trackId) => ({
        url: `track/${trackId}/favorite/`,
        method: 'POST',
        body: trackId,
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
  useGetSelectionTracksQuery,
} = apiContent
