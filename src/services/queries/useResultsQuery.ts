import { instance } from '@/apis/instance'
import {  useQuery } from '@tanstack/react-query'

const useResultsQuery = ({ userId = 1 }) => {
  const { data: results, isLoading: resultsLoading, error: resultsError, refetch: resultsRefetch } = useQuery({ queryKey: ['results'], queryFn: async () => await instance.get(`v2/api/result/${userId}`)})

  return { results, resultsLoading, resultsError, resultsRefetch }
}

export default useResultsQuery