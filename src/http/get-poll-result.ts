import api from "./api-client"

interface VotesPerHourResultResponse {
     hour: string
     totalVotes: number
}

interface ParticipantResultResponse {
    id: string
    name: string
    totalVotes: number
}

export interface PollResultResponse {
    result: {
        pollId: string,
        overallTotalVotes: number,
        participants: ParticipantResultResponse[],
        votesPerHour: VotesPerHourResultResponse[]
    }
}

export const getPollResult = async (id: string) : Promise<PollResultResponse> => {
    const { data } = await api.get<PollResultResponse>(`/polls/${id}/results`)
    return data;
}