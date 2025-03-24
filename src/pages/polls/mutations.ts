import { useMutation } from "@tanstack/react-query"
import { createVote, CreateVoteRequest,  CreateVoteResponse } from "../../http/create-vote"
import { AxiosError } from "axios"
import { ApiErrorResponse } from "../../errors/api-error-response"

export const useCreateNewVote = () => {
    return useMutation<CreateVoteResponse, AxiosError<ApiErrorResponse>, CreateVoteRequest>({ mutationFn: createVote })
  }