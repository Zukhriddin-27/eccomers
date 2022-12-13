export const useRequest = () => {
  const request = async ({ url, method = 'GET', headers = {}, body }) => {
    const options = {
      method,
      headers: { ...headers, 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    }
    return fetch(`https://api.escuelajs.co/api/v1${url}`, options).then((res) =>
      res.json()
    )
  }
  return request
}

export default useRequest
