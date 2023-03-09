import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const userAuthApi = createApi({
  reducerPath: 'userAuthApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/api/user/' }),
  endpoints: (builder) => ({
    registerUser:builder.mutation({
      query:(user)=>{
        return{
          url:'register/',
          method:'POST',
          body:user,
          headers:{
            'Content-type':'application/json'
          }
        }
      }
    }),
    loginUser:builder.mutation({
      query:(user)=>{
        return{
          url:'login/',
          method:'POST',
          body:user,
          headers:{
            'Content-type':'application/json'
          }
        }
      }
    }),
    getLoggedUser:builder.query({
      query:(access_token)=>{
        return{
          url:'profile/',
          method:'GET',
          headers:{
            'authorization':`Bearer ${access_token}`
          }
        }
      }
    }),
    changeUserPassword:builder.mutation({
      query:({actualData,access_token})=>{
        return{
          url:'changepassword/',
          method:'POST',
          body:actualData,
          headers:{
            'authorization':`Bearer ${access_token}`
          }
        }
      }
    }),
    sendPasswordResetMail:builder.mutation({
      query:(actualData)=>{
        return{
          url:'password_reset_email/',
          method:'POST',
          body:actualData,
          headers:{
            'Content-type':'application/json'
          }
        }
      }
    }),
    resetPassword:builder.mutation({
      query:({actualData,id,token})=>{
        return{
          url:`passwordreset/${id}/${token}/`,
          method:'POST',
          body:actualData,
          headers:{
            'Content-type':'application/json'
          }
        }
      }
    })
  }),
})

export const { useRegisterUserMutation,useLoginUserMutation,useGetLoggedUserQuery,useChangeUserPasswordMutation,useSendPasswordResetMailMutation,useResetPasswordMutation} = userAuthApi