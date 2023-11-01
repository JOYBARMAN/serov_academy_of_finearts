export const storeToken = (value) => {
    if (value) {
        const { access, refresh } = value
        localStorage.setItem('access_token', access)
        localStorage.setItem('refresh_token', refresh)
    }
}

export const getToken = () => {
    let access_token = localStorage.getItem('access_token')
    let refresh_token = localStorage.getItem('refresh_token')
    return { access_token, refresh_token }
}


export const removeToken = () => {
    localStorage.removeItem('access_token')
    localStorage.removeItem('refresh_token')
}


export const storeUserIsAdmin = (value) => {
    if (value) {
        localStorage.setItem('is_admin', value)
    }
}

export const getUserIsAdmin = () => {
    let is_admin = localStorage.getItem('is_admin')
    return is_admin
}


export const removeUserIsAdmin = () => {
    localStorage.removeItem('is_admin')
}