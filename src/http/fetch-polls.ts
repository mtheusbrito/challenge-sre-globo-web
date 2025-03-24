import api from "./api-client"

interface ParticipantResponse {
    id: string
    name: string
}

export interface PollResponse {
    id: string
    startDate: string
    endDate: string
    participants: ParticipantResponse []
}

export type PollsResponse = {
    polls: PollResponse []
}

export const fetchPolls = async () : Promise<PollResponse[]> => {
    const { data } = await api.get<PollsResponse>('/polls')
    return data?.polls;
}