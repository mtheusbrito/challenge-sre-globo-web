import { createFileRoute, redirect } from "@tanstack/react-router";
import CreateNewVotePage from "../../pages/polls/create-new-vote/page";


export const Route = createFileRoute("/$pollId/create-new-vote")({
  beforeLoad: async ({ context }) => {
   const { isAuthenticated }  = context.auth  ;
   if(!isAuthenticated()){
      throw redirect({
        to: '/auth/sign-in'
      })
   }
  },
  
  component: CreateNewVotePage,
});
