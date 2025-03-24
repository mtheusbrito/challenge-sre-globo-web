import api from "./api-client";

interface PollParticipantSummaryResponse {
  id: string;
  name: string;
  percentage: number;
}
export interface PollSummaryResponse {
  summary: {
    pollId: string;
    overallTotalVotes: number;
    participants: PollParticipantSummaryResponse[];
  };
}

export const getPollSummary = async (
  id: string
): Promise<PollSummaryResponse> => {
  const { data } = await api.get<PollSummaryResponse>(`/polls/${id}/summary`);
  return data;
};
