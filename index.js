import demoResponse from './src/demoResponse'

addEventListener('fetch', (event) => {
  event.respondWith(handleRequest(event.request))
})
/**
 * Respond with hello worker text
 * @param {Request} request
 */
async function handleRequest(request) {
  return new Response(demoResponse.data, {
    headers: { 'content-type': 'application/json' },
  })
}
