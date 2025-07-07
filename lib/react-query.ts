import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'

// API 함수 타입 정의
export type ApiFunction<TData, TVariables = void> = (variables: TVariables) => Promise<TData>

// useQuery 래퍼
export function useApiQuery<TData>(
  queryKey: string[],
  queryFn: () => Promise<TData>,
  options?: {
    enabled?: boolean
    staleTime?: number
    gcTime?: number
  }
) {
  return useQuery({
    queryKey,
    queryFn,
    enabled: options?.enabled ?? true,
    staleTime: options?.staleTime,
    gcTime: options?.gcTime,
  })
}

// useMutation 래퍼
export function useApiMutation<TData, TVariables>(
  mutationFn: ApiFunction<TData, TVariables>,
  options?: {
    onSuccess?: (data: TData, variables: TVariables) => void
    onError?: (error: Error, variables: TVariables) => void
    onSettled?: (data: TData | undefined, error: Error | null, variables: TVariables) => void
  }
) {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn,
    onSuccess: options?.onSuccess,
    onError: options?.onError,
    onSettled: options?.onSettled,
  })
}

// 쿼리 무효화 헬퍼
export function useInvalidateQueries() {
  const queryClient = useQueryClient()

  return {
    invalidateQueries: (queryKey: string[]) => queryClient.invalidateQueries({ queryKey }),
    removeQueries: (queryKey: string[]) => queryClient.removeQueries({ queryKey }),
    resetQueries: (queryKey: string[]) => queryClient.resetQueries({ queryKey }),
  }
}
