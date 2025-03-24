import { useEffect } from "react";
import { useSignUp } from "../mutations";
import { useNavigate } from '@tanstack/react-router'
import { formData } from "./sign-up-form";
import SignUpForm from "./sign-up-form";

export default function SignUpPage(){
    const navigate = useNavigate()
    const { mutate, data, isPending, isError, error, isSuccess, reset } =
    useSignUp();
    const handlerSignUp = (data: formData) => {
        reset();
        mutate(data);
    };

    useEffect(() => {
        if (isSuccess && data) {
            navigate({to: '/auth/sign-in' })
        }
      }, [isSuccess, data]);

    return (
        <SignUpForm
          error={error}
          isError={isError}
          isPending={isPending}
          handlerSignUp={handlerSignUp}
        />
      );
}