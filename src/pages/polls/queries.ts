import  { AxiosError } from "axios"
import { useQuery } from "@tanstack/react-query"
import { fetchPolls,  PollResponse } from "../../http/fetch-polls"
import { getPoll } from "../../http/get-poll"
import  { ApiErrorResponse } from "../../errors/api-error-response"
import { getPollSummary, PollSummaryResponse } from "../../http/get-poll-summary"
import { getPollResult, PollResultResponse } from "../../http/get-poll-result"

export const usePolls = () => {
    return useQuery<PollResponse[], AxiosError<ApiErrorResponse>>({ queryKey: ['polls'], queryFn: fetchPolls })
}

export const usePoll = (id: string) => {
    return useQuery<PollResponse, AxiosError<ApiErrorResponse>>({queryKey: ['poll', id], queryFn: () => getPoll(id)})
}

export const usePollSummary = (id: string) => {
    return useQuery<PollSummaryResponse,AxiosError<ApiErrorResponse>>({queryKey: ['poll-summary',id ], queryFn: ()=> getPollSummary(id)})
}
 
export const usePollResult = (id: string) => {
    return useQuery<PollResultResponse,AxiosError<ApiErrorResponse>>({queryKey: ['poll-result',id ], queryFn: ()=> getPollResult(id)})
} 