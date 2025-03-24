import { Link, useParams } from "@tanstack/react-router";
import { usePollSummary } from "../queries";
import Button from "../../../components/ui/button";


export default function SummaryPage() {
    const { pollId } = useParams({ from: '/$pollId/' })
    const { data, isError, error, isPending } = usePollSummary(pollId);

    return (
        <div className="w-full flex-1 space-y-6">
            <div className="flex w-full">
                <nav><ul className="flex space-x-2"><li className="font-medium text-blue-400"><Link to="/">Paredões</Link></li><li className="font-medium">/ {pollId} Resultado parcial dos votos</li></ul></nav>
            </div>
            {isPending && <p>Aguarde...</p>}
            {isError && <p className="text-red-600">
                {error?.response?.data.message || "Error ao carregar paredão!"}
            </p>}
            {data && (
                <div className="w-full flex flex-col space-y-6">
                    {data.summary.participants.map((p) => (
                        <div
                            key={p.id}
                            className="flex items-center gap-4 p-4 border border-gray-200 rounded-xl shadow-sm bg-white"
                        >
                            <div className="w-[80px] h-[80px] bg-gray-900 rounded-xl flex items-center justify-center text-white text-lg font-semibold">
                                {p.name.charAt(0).toUpperCase()}
                            </div>
                            <div className="flex flex-col w-full">
                                <p className="text-lg font-medium text-gray-800">{p.name}</p>
                                <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden mt-2">
                                    <div
                                        className="h-4 bg-blue-500 rounded-full transition-all duration-500"
                                        style={{ width: `${Math.floor(p.percentage)}%` }}
                                    ></div>
                                </div>

                                <p className="text-sm text-gray-500 mt-1">{p.percentage}%</p>
                            </div>
                        </div>
                    ))}

                    <div className="flex justify-end">
                        <Link to={'/$pollId/create-new-vote'} params={{pollId}}>
                            <Button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                                Enviar um voto
                            </Button>
                        </Link>
                    </div>
                </div>
            )}

        </div>
    );
}