const axios = require('axios')

const apiUrl = 'http://localhost:4741'

export const axiosGetRestrooms = () => {
  return axios.get(apiUrl + '/movies')
}

export const axiosGetRestroomsAuthenticated = (user) => {
  return axios.get(apiUrl + '/movies', {
    headers: {
      'Authorization': `Token token=${user.token}`
    }
  })
}

export const axiosPostRestroom = (data, user) => {
  return axios.post(apiUrl + '/movies', { movie: { ...data } }, {
    headers: {
      'Authorization': `Token token=${user.token}`,
    }
  })
}

export const axiosPatchRestroom = (data, user) => {
  const { id } = data
  delete data.id
  return axios.patch(apiUrl + '/movies/' + id, { movie: { ...data } }, {
    headers: {
      'Authorization': `Token token=${user.token}`,
    }
  })
}