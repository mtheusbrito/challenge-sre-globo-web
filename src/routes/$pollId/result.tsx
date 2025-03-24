import { createFileRoute, redirect } from '@tanstack/react-router'
import ResultPage from '../../pages/polls/result/page'
import api from '../../http/api-client'

export const Route = createFileRoute('/$pollId/result')({
  beforeLoad: async ({params}) =>{
    const { pollId}  = params
    try{
      await api.get(`/polls/${pollId}/results`)
    }catch{
      throw redirect({to: '/'})
    }
  },
  component: ResultPage,
})