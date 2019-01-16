export const apiUrl = 'http://localhost:4741/'

export const axiosGetLocationApi = (data, user) => {
  return axios.get(apiUrl + 'locations', {
    headers: {
      'Authorization':`Token token=${user.token}`
    }
  })
}