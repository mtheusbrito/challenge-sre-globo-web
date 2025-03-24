import api from "./api-client"

export type SignUpRequest = {
    name: string
    email: string
    password: string
}

export type SignUpResponse = { }

export const signUp = async ({name, email, password }: SignUpRequest) : Promise<SignUpResponse> => {
    const {data} = await api.post<SignUpResponse>('/account/register', {
        name, email, password
    })
    return data;
}