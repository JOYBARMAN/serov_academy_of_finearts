import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { userAuthApi } from '../services/userAuthApi'
import { seroveAcademyApi } from '../services/seroveAcademyApi'
import authReducer from '../features/authSlice'
import userReducer from '../features/userSlice'
export const store = configureStore({
  reducer: {
    [userAuthApi.reducerPath]: userAuthApi.reducer,
    [seroveAcademyApi.reducerPath]: seroveAcademyApi.reducer,
    auth : authReducer,
    user : userReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userAuthApi.middleware,seroveAcademyApi.middleware),
})
setupListeners(store.dispatch)