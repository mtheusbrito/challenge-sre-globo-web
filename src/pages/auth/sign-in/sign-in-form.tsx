import { z } from "zod";
import { ApiErrorResponse } from "../../../errors/api-error-response";
import { AxiosError } from "axios";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "@tanstack/react-router";
import Label from "../../../components/ui/label";
import Input from "../../../components/ui/input";
import Button from "../../../components/ui/button";

const formSchema = z.object({
    email: z.string().email("E-mail é obrigatório!"),
    password: z.string().nonempty("Senha é obrigatória!"),
  });

export type formData = z.infer<typeof formSchema>;
interface SignUpFormProps {
    isError: boolean;
    error: AxiosError<ApiErrorResponse> | null;
    isPending: boolean;
    handlerSignIn: (data: formData) => void;
  }

export default function SignInForm({
  isError,
  error,
  isPending,
  handlerSignIn,
}: SignUpFormProps) {
  const onSubmit = (data: formData) => {
    handlerSignIn(data);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formData>({ resolver: zodResolver(formSchema) });

  return <div className="space-y-4 p-4"> 
    <p className="text-center font-bold">Acessar sua conta</p>
    {isError && <p className="text-red-600">{error?.response?.data.message || "Ocorreu um erro ao acessar sua conta!"}</p>}
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
    <div className="space-y-1">
        <Label htmlFor="email">E-mail:</Label>
        <Input id="email" type="text" error={!!errors.email} className="w-full"
        disabled={isPending} {...register('email', {required: true})}/>
         {errors?.email && (
            <p className="text-xs font-medium text-red-500 dark:text-red-400">
              {errors.email.message}
            </p>
          )}
    </div>
    <div className="space-y-1">
        <Label htmlFor="password">Senha:</Label>
        <Input id="password" type="password"error={!!errors.password} className="w-full"
        disabled={isPending} {...register('password', {required: true})}/>
        {errors?.password && (
            <p className="text-xs font-medium text-red-500 dark:text-red-400">
              {errors.password.message}
            </p>
          )}
    </div>
    <div className="space-y-1">
        <Button type="submit" className="w-full" disabled={isPending}>
            {isPending ? "Aguarde..." : "Acessar"}
        </Button>
        <Button className="w-full" asChild={true} variant="secondary">
          <Link to="/auth/sign-up">Ainda não é registrado? Clique aqui para se registrar</Link>
        </Button>
    </div>
    </form>
  </div>
}