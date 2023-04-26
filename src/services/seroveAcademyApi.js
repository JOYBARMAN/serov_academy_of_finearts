import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const seroveAcademyApi = createApi({
  reducerPath: 'seroveAcademyApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/api/academy/' }),
  endpoints: (builder) => ({
    addStudent: builder.mutation({
      query: (data) => {
        return {
          url: 'student/',
          method: 'POST',
          body: data,
          headers: {
            // 'Accept': 'application/json',
            // 'Content-Type': 'multipart/form-data',
            'Content-type': 'application/json'
          }
        }
      }
    }),
    addSection: builder.mutation({
      query: (data) => {
        return {
          url: 'section/',
          method: 'POST',
          body: data,
          headers: {
            'Content-type': 'application/json'
          }
        }
      }
    }),
  }),
})

export const { useAddStudentMutation, useAddSectionMutation } = seroveAcademyApi