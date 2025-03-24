import { Link, useParams } from "@tanstack/react-router";
import { usePollResult } from "../queries";
import ResultMetrics from "./metrics";

export default function ResultPage() {
    const { pollId } = useParams({ from: '/$pollId/result' })
    const { data, isError, error, isPending } = usePollResult(pollId);
    return (
        <div className="w-full flex-1 space-y-6">
            <div className="flex w-full">
                <nav><ul className="flex space-x-2"><li className="font-medium text-blue-400"><Link to="/">Paredões</Link></li><li className="font-medium">/ {pollId} Resultado dos votos</li></ul></nav>
            </div>
            {isPending && <p>Aguarde...</p>}
            {isError && <p className="text-red-600">
                {error?.response?.data.message || "Error ao carregar paredão!"}
            </p>}
            {data && (
                <div className="w-full flex flex-col space-y-4">
                    {data.result.participants.map((p) => (
                        <div key={p.id} className="flex items-center gap-4 p-3 border border-gray-200 rounded-xl shadow-sm bg-white">
                            <div className="w-[80px] h-[80px] bg-gray-900 rounded-xl flex items-center justify-center text-white text-lg font-semibold">
                                {p.name.charAt(0).toUpperCase()} {/* Exibe a inicial do nome */}
                            </div>
                            <div className="flex flex-col w-full">
                                <p className="text-lg font-medium text-gray-800">{p.name}</p>
                                <p className="text-sm text-gray-500">
                                    <span className="font-semibold text-blue-600">{p.totalVotes}</span> votos
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            {data && <ResultMetrics data={data.result.votesPerHour.map(v => { return { dateTime: v.hour, total: v.totalVotes } })} />}
            <p>{data?.result.overallTotalVotes} votos no total.</p>
        </div>
    );
}