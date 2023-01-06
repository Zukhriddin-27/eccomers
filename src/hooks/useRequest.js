export const useRequest = () => {
  const request = async ({
    method = 'GET',
    headers = {},
    body,
    url,
    token,
  }) => {
    if (token) headers.Authorization = `Bearer ${localStorage.getItem('token')}`

    const options = {
      method,
      headers: { ...headers, 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    }
    return fetch(`http://localhost:5000${url}`, options).then((res) =>
      res.json()
    )
  }
  return request
}

export default useRequest
