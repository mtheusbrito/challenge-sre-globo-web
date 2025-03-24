import api from "./api-client"

export type SignInCredentialsRequest = {
    email: string
    password: string
}

export type SignInResponse = {
    accessToken: string
}

export const signIn = async ({email, password}: SignInCredentialsRequest) : Promise<SignInResponse> => {
    const {data} = await api.post<SignInResponse>('/auth/login', {
        email, password
    })
    return data;
}