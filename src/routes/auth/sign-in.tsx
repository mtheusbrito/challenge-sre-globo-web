import { createFileRoute, redirect } from "@tanstack/react-router";
import SignInPage from "../../pages/auth/sign-in/page";

export const Route = createFileRoute('/auth/sign-in')({
    beforeLoad: ({ context }) => {
       const { isAuthenticated }  = context.auth ;
    
       if(isAuthenticated()){
          throw redirect({
            to: '/'
          })
       }
      },
    component: SignInPage
})