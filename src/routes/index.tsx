import { createFileRoute } from "@tanstack/react-router";
import PollsPage from "../pages/polls/page";

export const Route = createFileRoute('/')({
    component: PollsPage
})