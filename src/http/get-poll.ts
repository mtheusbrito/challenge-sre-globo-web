import api from "./api-client"
import type { PollResponse } from "./fetch-polls";



export const getPoll = async (id: string) : Promise<PollResponse> => {
    const { data } = await api.get<PollResponse>(`/polls/${id}`)
    return data;
}