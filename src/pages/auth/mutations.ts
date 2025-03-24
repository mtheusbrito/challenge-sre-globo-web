import { useMutation } from "@tanstack/react-query"
import { signIn, type SignInCredentialsRequest, type SignInResponse } from "../../http/sign-in"
import type { AxiosError } from "axios"
import type { ApiErrorResponse } from "../../errors/api-error-response"
import { signUp, type SignUpRequest, type SignUpResponse } from "../../http/sign-up"

export const useSignIn = () => {
    return useMutation<SignInResponse, AxiosError<ApiErrorResponse>, SignInCredentialsRequest>({ mutationFn: signIn })
  }
  
  export const useSignUp = () => {
    return useMutation<SignUpResponse, AxiosError<ApiErrorResponse>, SignUpRequest>({mutationFn: signUp})
  }