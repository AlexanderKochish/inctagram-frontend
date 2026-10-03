import Congratulations from '@/src/components/ui/congratulations/congratulations'
import { ResendVerificationLink } from '@/src/components/ui/resend-verification-link/resend-verification-link'

export default async function ConfirmEmailPage({
  params,
}: {
  params: Promise<{ token: string }>
}) {
  const { token } = await params

  const res = await fetch(`http://localhost:3000/auth/confirm`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ token }),
    cache: 'no-store',
  })

  return <>{res.ok ? <Congratulations /> : <ResendVerificationLink />}</>
}
