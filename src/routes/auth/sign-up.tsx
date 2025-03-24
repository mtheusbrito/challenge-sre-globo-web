import { createFileRoute, redirect } from "@tanstack/react-router";
import SignUpPage from "../../pages/auth/sign-up/page";

export const Route = createFileRoute('/auth/sign-up')({
    beforeLoad: ({ context }) => {
        const { isAuthenticated }  = context.auth  ;
     
        if(isAuthenticated()){
           throw redirect({
             to: '/'
           })
        }
       },
    component: SignUpPage
})