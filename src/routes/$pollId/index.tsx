import { createFileRoute } from '@tanstack/react-router'
import SummaryPage from '../../pages/polls/summary/page'

export const Route = createFileRoute('/$pollId/')({
  component: SummaryPage,
})