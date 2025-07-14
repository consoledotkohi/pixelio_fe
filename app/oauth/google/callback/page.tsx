'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { api } from '@/lib/api' // 기존 api 유틸 사용

export default function GoogleCallback() {
  const router = useRouter()

  useEffect(() => {
    const url = new URL(window.location.href)
    const code = url.searchParams.get('code')
    console.log(code)
    // if (code) {
    //   api
    //     .post('/v1/users/sign-in/google', { code })
    //     .then((res) => {
    //       console.log(res, 'res')
    //       // 토큰/유저정보 저장 (zustand 등)
    //       // 예: localStorage.setItem("token", res.data.token);
    //       // router.push('/') // 메인으로 이동
    //     })
    //     .catch((err) => {
    //       console.log(err, 'err')
    //     })
    // }
  }, [router])

  return <div>구글 로그인 처리 중...</div>
}
