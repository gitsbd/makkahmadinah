export function GET(request) {
  const url = new URL('/icon.svg', request.url)
  return Response.redirect(url, 307)
}


