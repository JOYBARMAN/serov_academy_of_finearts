import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const seroveAcademyApi = createApi({
  reducerPath: 'seroveAcademyApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/api/academy/' }),
  endpoints: (builder) => ({
    getAllStudent:builder.query({
      query:()=>{
        return{
          url:'student/',
          method:'GET',
        }
      }
    }),
    detailStudent:builder.query({
      query:(id)=>{
        return{
          url:`student/${id}/`,
          method:'GET',
        }
      }
    }),
    addStudent: builder.mutation({
      query: (data) => {
        return {
          url: 'student/',
          method: 'POST',
          body: data,
          headers: {
            'content-type': 'multipart/form-data'
          }
        }
      }
    }),
    deleteStudent: builder.mutation({
      query: (id) => {
        console.log("delete id ",id)
        return {
          url: `student/${id}/`,
          method: 'DELETE',
        }
      }
    }),
    getAllSection:builder.query({
      query:()=>{
        return{
          url:'section/',
          method:'GET',
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

export const { useGetAllStudentQuery,useDetailStudentQuery,useAddStudentMutation,useDeleteStudentMutation, useAddSectionMutation,useGetAllSectionQuery } = seroveAcademyApi


// set a base url for axios
export const domain = "http://localhost:8000/api/academy"