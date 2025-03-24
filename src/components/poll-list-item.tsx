import { Link } from "@tanstack/react-router"
import type { PollResponse } from "../http/fetch-polls"
import { currentDateIsBeforeAt, formatToDate, formatToDateTimeString } from "../lib/date-utils";
import Button from "./ui/button";

export interface PollListItem {
    poll: PollResponse
}
export default function PollListItem({ poll }: PollListItem) {

    const participants = poll.participants;

    const isAvailableToVotes = currentDateIsBeforeAt(formatToDate(poll.endDate));
    const closesIn = formatToDateTimeString(poll.endDate);

    return <div key={poll.id}
        className="rounded-md min-w-[400px] border-b border-gray-300 pb-4 bg-white shadow-md p-4 space-y-4"
    >
        <div className="space-y-3">
            {participants.map((participant) => (
                <div key={participant.id} className="flex items-center gap-4">
                    {/* Avatar Placeholder */}
                    <div className="w-16 h-16 bg-gray-900 rounded-xl flex items-center justify-center text-white text-lg font-semibold">
                        {participant.name.charAt(0).toUpperCase()} {/* Inicial do nome */}
                    </div>
                    <span className="text-sm font-medium text-gray-700">{participant.name}</span>
                </div>
            ))}
        </div>
        <div className="flex justify-end items-center gap-4">
            {isAvailableToVotes && (
                <p className="text-xs text-red-500 font-semibold">Se encerra em: {closesIn}</p>
            )}
            <Link to="/$pollId" params={{ pollId: poll.id }}>
                <Button className="px-3 py-2 bg-gray-800 text-white rounded-lg text-sm hover:bg-gray-900 transition">
                    {currentDateIsBeforeAt(formatToDate(poll.endDate)) ? "Ver resultado parcial" : "Ver resultado"}
                </Button>
            </Link>
            <Link to="/$pollId/create-new-vote" params={{ pollId: poll.id }}>
                <Button
                    className={`px-3 py-2 text-sm rounded-lg transition ${isAvailableToVotes
                            ? "bg-blue-600 text-white hover:bg-blue-700"
                            : "bg-gray-300 text-gray-500 cursor-not-allowed"
                        }`}
                    disabled={!isAvailableToVotes}
                >
                    {isAvailableToVotes ? "Votar" : "Votação encerrada"}
                </Button>
            </Link>
        </div>
    </div>
}