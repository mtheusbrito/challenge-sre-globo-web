import PollListItem from "../../components/poll-list-item";
import { usePolls } from "./queries";

export default function PollsPage() {

    const { data, isError, error, isPending, isSuccess } = usePolls();

    return (
        <div className="w-full flex-1 space-y-6">
            <div className="flex w-full flex-col">
                <nav><ul><li className="font-medium">Paredões </li></ul></nav>
            </div>
            {isPending && <p className="text-center">Aguarde...</p>}
            {isError && <p className="text-red-600 text-center">{error?.response?.data?.message || "Erro ao carregar Paredões!"}</p>}
            {(isSuccess && data?.length > 0) 
                && data.map(poll => <PollListItem poll={poll} key={poll.id} />) 
            }
            {data?.length == 0 && <p className="text-center">Nada aqui por enquanto...</p>}
        </div>
    );
}