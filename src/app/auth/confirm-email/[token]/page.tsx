export default async function BlogPostPage({
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

  return (
    <div>
      {res.ok ? (
        <p>Email confirmed successfully!</p>
      ) : (
        <p>Failed to confirm email. Please try again.</p>
      )}
    </div>
  )
}
