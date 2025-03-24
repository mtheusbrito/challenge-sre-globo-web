import api from "./api-client"

export type CreateVoteRequest = {
   participantId: string
   pollId: string
}

export type CreateVoteResponse = {}

export const createVote = async ({participantId, pollId}: CreateVoteRequest) : Promise<CreateVoteResponse> => {
    const {data} = await api.post<CreateVoteResponse>(`/polls/${pollId}/vote`, {
        participantId
    })
    return data;
}