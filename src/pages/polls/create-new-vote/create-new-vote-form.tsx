import { AxiosError } from "axios";
import { z } from "zod";
import { ApiErrorResponse } from "../../../errors/api-error-response";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../../../components/ui/button";
import Input from "../../../components/ui/input";
import Label from "../../../components/ui/label";
import { useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const formSchema = z.object({
    participantId: z.string({message: "Selecione um participante!"}),
    recaptcha: z.string().nullable()
});
export type formData = z.infer<typeof formSchema>;

interface OptionsValues {
    id: string,
    title: string
}

interface CreateNewVoteFormProps {
    isError: boolean;
    error: AxiosError<ApiErrorResponse> | null;
    isPending: boolean;
    handlerCreateNewVote: (data: formData) => void;
    optionsValues: OptionsValues[]
}
const key = "6Ldz-_0qAAAAADcm-pmOq3iVy6TlcDswlEL2_cS7";
export default function CreateNewVoteForm({ error, isError, isPending, handlerCreateNewVote, optionsValues }: CreateNewVoteFormProps) {
    const recaptchaRef = useRef<ReCAPTCHA>(null)
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
        setValue,
        reset
    } = useForm<formData>({ resolver: zodResolver(formSchema) });

    const { recaptcha, participantId } = watch()

    const onSubmit = (data: formData) => {
        handlerCreateNewVote(data);
        reset()
        recaptchaRef.current?.reset();
    };

    return <div className="space-y-4 p-4 w-full max-w-[500px]">
        {isError && <p className="text-red-600">{error?.response?.data.message || "Ocorreu um erro ao enviar o voto!"}</p>}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <p className="text-md font-medium">Selecione um participante:</p>
            {optionsValues.map(o => {
                return <div className="space-y-1" key={o.id}>
                    <Label>
                        <div className="flex flex-row w-full gap-3 items-center">
                            <Input type="radio" value={o.id} {...register('participantId')} className="w-fit" error={!!errors.participantId}/>
                            <span className="text-sm font-medium"> {o.title}</span>
                        </div>
                    </Label>
                </div>
            })}
            <div className="space-y-1">
            {errors?.participantId && (
               <p className="text-xs font-medium text-red-500 dark:text-red-400">
                 {errors.participantId.message}
               </p>
             )}
            </div>
            <div className="space-y-1">
                <ReCAPTCHA sitekey={key} onChange={(token) => setValue("recaptcha", token)} ref={recaptchaRef} />
            </div>
            <div className="space-y-1">
                <Button type="submit" className="w-full" disabled={isPending || !participantId || !recaptcha}>
                    {isPending ? "Aguarde..." : "Enviar voto"}
                </Button>
            </div>
        </form>
    </div>
}