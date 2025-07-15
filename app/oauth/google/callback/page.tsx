'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { api } from '@/lib/api'
import { useAuthStore } from '@/store'

export default function GoogleCallback() {
  const router = useRouter()
  const setToken = useAuthStore((state) => state.setToken)

  useEffect(() => {
    const url = new URL(window.location.href)
    const code = url.searchParams.get('code')
    console.log(code)
    if (code) {
      api
        .post('/v1/users/sign-in/google', { code })
        .then((res) => {
          if (res?.accessToken) {
            setToken(res.accessToken)
            router.push('/')
          } else throw new Error()
        })
        .catch((err) => {
          console.log(err, 'err')
        })
    }
  }, [router])

  return <div>구글 로그인 처리 중...</div>
}
