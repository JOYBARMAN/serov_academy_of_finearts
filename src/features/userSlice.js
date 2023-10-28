import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    email: "",
    name: "",
    is_admin: false
}

export const userSlice = createSlice({
    name: 'user_info',
    initialState,
    reducers: {
        setUserInfo: (state, action) => {
            state.email = action.payload.email
            state.name = action.payload.name
            state.is_admin = action.payload.is_admin
        },
        unSetUserInfo: (state, action) => {
            state.email = action.payload.email
            state.name = action.payload.name
            state.is_admin = action.payload.is_admin
        },
    },
})

export const { setUserInfo, unSetUserInfo } = userSlice.actions

export default userSlice.reducer