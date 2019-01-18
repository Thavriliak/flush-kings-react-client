const axios = require('axios')

const apiUrl = 'http://localhost:4741'

export const axiosGetLocationsAuthenticated = (user) => {
  return axios.get(apiUrl + '/locations', {
    headers: {
      'Authorization': `Token token=${user.token}`
    }
  })
}

export const axiosPostLocation = (data, user) => {
  return axios.post(apiUrl + '/locations', { location: { ...data } }, {
    headers: {
      'Authorization': `Token token=${user.token}`,
    }
  })
}

export const axiosPatchLocation = (data, user) => {
  const { id } = data
  delete data.id
  return axios.patch(apiUrl + '/locations/' + id, { location: { ...data } }, {
    headers: {
      'Authorization': `Token token=${user.token}`,
    }
  })
}

export const axiosDeleteLocation = (data, user) => {
  const { id } = data
  delete data.id
}