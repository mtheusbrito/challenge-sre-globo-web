import { useEffect } from "react";
import { useSignIn } from "../mutations";
import SignInForm, { type formData } from "./sign-in-form";
import { useNavigate } from '@tanstack/react-router'
import { useAuth } from "../../../hooks/useAuth";

export default function SignInPage(){
    const navigate = useNavigate()
    const { signIn } = useAuth()
    const { mutate, data, isPending, isError, error, isSuccess, reset } =
    useSignIn();
    const handlerSignIn = (data: formData) => {
        reset();
        mutate(data);
    };

    useEffect(() => {
        if (isSuccess && data) {
          signIn(data.accessToken)
            navigate({to: '/' })
        }
      }, [isSuccess, data]);

    return (
        <SignInForm
          error={error}
          isError={isError}
          isPending={isPending}
          handlerSignIn={handlerSignIn}
        />
      );
}