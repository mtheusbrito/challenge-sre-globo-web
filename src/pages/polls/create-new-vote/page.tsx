import { useEffect, useState } from "react";
import { useCreateNewVote } from "../mutations";
import { usePoll } from "../queries";
import CreateNewVoteForm, { type formData } from "./create-new-vote-form";
import { Link, useNavigate, useParams } from '@tanstack/react-router'
import Modal from "../../../components/ui/modal";
import ModalSuccess from "./modal-success";
import { currentDateIsBeforeAt, formatToDate } from "../../../lib/date-utils";

export default function CreateNewVotePage() {
    const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)
    const navigate = useNavigate();
    const { pollId } = useParams({ from: "/$pollId/create-new-vote" });
    const { isPending, data, isError, error } = usePoll(pollId);
    const { mutate, data: dataCreated, isPending: isPendingCreated, isError: isErrorOnCreated, error: errorOnCreated, isSuccess: isSuccessOnCreated } = useCreateNewVote();

    const handlerCreateNewVote = (data: formData) => {
        mutate({ participantId: data.participantId, pollId });
    };

    const toggleModal = () => {
        setModalIsOpen(!modalIsOpen)
    }

    useEffect(() => {
        if (isSuccessOnCreated && dataCreated) {
           setModalIsOpen(!modalIsOpen)
        }
    }, [isSuccessOnCreated, dataCreated, navigate, pollId]);
    const isAvailableToVotes = data?.endDate ? currentDateIsBeforeAt(formatToDate(data?.endDate)) : false;
    return (
        <div className="w-full flex flex-1 space-y-6 flex-col">
        <div className="flex w-full">
            <nav><ul className="flex space-x-2"><li className="font-medium text-blue-400"><Link to="/">Paredões</Link></li><li className="font-medium text-blue-400">/ <Link to="/$pollId" params={{pollId}}>{pollId}</Link></li><li className="font-medium">/ Enviar um voto</li></ul></nav>
        </div>
        <div className="w-full flex-1 flex flex-col items-center justify-center pt-3">
            
            {isPending && <p>Aguarde...</p>}
            {isError && <p className="text-red-600">
                {error?.response?.data.message || "Error ao carregar paredão!"}
            </p>}
            {!isAvailableToVotes && <p className="text-red-600">Votação já encerrada!</p> }
            {(data && isAvailableToVotes) && <CreateNewVoteForm
                optionsValues={data.participants.map(p =>{
                    return {
                        id: p.id,
                        title: p.name
                    }
                })}
                error={errorOnCreated}
                isError={isErrorOnCreated}
                isPending={isPendingCreated}
                handlerCreateNewVote={handlerCreateNewVote}
            />}
            {modalIsOpen && <Modal isOpen={modalIsOpen} setIsOpen={setModalIsOpen} closeOnClickOutside={false}><ModalSuccess onCloseModal={toggleModal}/></Modal>}
        </div>
        </div>
    );
}