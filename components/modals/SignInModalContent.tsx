import Image from 'next/image'
import Button from '../common/Button'
import IcoGoogle from '../common/icon/IcoGoogle'
import IcoKakao from '../common/icon/IcoKakao'

export default function SignInModalContent() {
  const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID
  const REDIRECT_URI = process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI ?? ''

  const googleAuthUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${encodeURIComponent(
    REDIRECT_URI
  )}&response_type=code&scope=openid%20email%20profile`

  const handleGoogleLogin = () => {
    window.location.href = googleAuthUrl
  }

  return (
    <div className="flex flex-col items-center w-full max-w-md mx-auto py-16 px-8">
      <div className="flex items-center mb-20">
        <Image src="/pixelio_logo.png" alt="Pixelio Logo" width={36} height={36} />
        <h2 className="text-4xl font-extrabold flex items-center ml-4">Sign In</h2>
      </div>

      {/* 구글 로그인 버튼 */}
      <Button
        variant="default"
        size="lg"
        className="flex items-center justify-center border border-gray-300 rounded-lg mb-4 hover:bg-gray-50 transition"
        onClick={handleGoogleLogin}
      >
        <IcoGoogle />
        <span className="text-md ml-2">구글 계정으로 로그인</span>
      </Button>

      {/* 카카오 로그인 버튼 */}
      <Button
        variant="default"
        size="lg"
        className="flex items-center justify-center rounded-lg py-3 mb-6 bg-[#FEE500] hover:bg-yellow-300 transition"
      >
        <IcoKakao />
        <span className="text-md ml-2">카카오 로그인</span>
      </Button>

      {/* 약관 안내 */}
      <p className="text-xs text-gray-500 mb-6 text-center">
        픽셀리오의{' '}
        <a href="#" className="underline">
          이용약관
        </a>{' '}
        및{' '}
        <a href="#" className="underline font-semibold">
          개인정보 처리방침
        </a>
        에 동의합니다.
      </p>

      <div className="w-full border-t border-gray-200 mb-12" />

      {/* 비회원 버튼 */}
      <Button variant="outline" rounded className="">
        <span>비회원으로 계속하기</span>
      </Button>
    </div>
  )
}
