const axios = require('axios')

const apiUrl = 'https://boiling-oasis-18540.herokuapp.com'

export const axiosGetRestrooms = () => {
  return axios.get(apiUrl + '/movies')
}

export const axiosGetRestroomsAuthenticated = (user) => {
  return axios.get(apiUrl + '/restrooms', {
    headers: {
      'Authorization': `Token token=${user.token}`
    }
  })
}

export const axiosPostRestroom = (data, user) => {
  return axios.post(apiUrl + '/restrooms', { restroom: { ...data } }, {
    headers: {
      'Authorization': `Token token=${user.token}`,
    }
  })
}

export const axiosPatchRestroom = (data, user) => {
  const { id } = data
  delete data.id
  return axios.patch(apiUrl + '/restrooms/' + id, { movie: { ...data } }, {
    headers: {
      'Authorization': `Token token=${user.token}`,
    }
  })
}