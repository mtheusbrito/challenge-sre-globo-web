import { Link, useParams } from "@tanstack/react-router";
import Button from "../../../components/ui/button";
import { FaCheck } from "react-icons/fa";
interface ModalSuccessProps {
    onCloseModal: () => void
}
export default function ModalSuccess({onCloseModal}: ModalSuccessProps){
    const { pollId } = useParams({from: '/$pollId/create-new-vote'})
    return <div className="w-full max-w-[600px] bg-amber-50 p-8 rounded-[20px] text-xl font-bold flex items-center flex-col space-y-6">
        <FaCheck size={40} className="text-green-600"/>
        <div className="text-center">
    
        <p>Seu voto está sendo processado!</p> 
        <p>Você pode votar quantas vezes quiser ou acompanhar o resultado parcial em tempo real.</p>
        </div>
        <div className="ml-auto space-x-2">
            <Button onClick={() => onCloseModal()}>Votar Novamente</Button>
            <Button><Link to={'/$pollId'} params={{ pollId }}> Acompanhar o resultado</Link></Button>
        </div>
    </div>
}