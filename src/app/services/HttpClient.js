export const HttpClient = (fetchClient) => {
  return { get }

  async function get (url) {
    const response = await fetchClient(url)
    const json = await response.json()
    return json.response
  }
}
