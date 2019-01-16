const axios = require('axios')

const apiUrl = 'http://localhost:4741'

export const axiosPostLocation = (data, user) => {
  return axios.post(apiUrl + '/locations', { location: { ...data } }, {
    headers: {
      'Authorization': `Token token=${user.token}`,
    }
  })
}

