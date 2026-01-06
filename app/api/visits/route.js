export const dynamic = 'force-dynamic'

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const hit = searchParams.get('hit') !== '0'

  const namespace = 'makkahmadinah'
  const key = 'homepage'

  const url = hit
    ? `https://api.countapi.xyz/hit/${namespace}/${key}`
    : `https://api.countapi.xyz/get/${namespace}/${key}`

  try {
    const res = await fetch(url, {
      cache: 'no-store',
      headers: { Accept: 'application/json' },
    })

    if (!res.ok) {
      return Response.json({ ok: false }, { status: 200 })
    }

    const data = await res.json()
    const value = typeof data?.value === 'number' ? data.value : null

    return Response.json({ ok: value !== null, value }, { status: 200 })
  } catch {
    return Response.json({ ok: false }, { status: 200 })
  }
}


