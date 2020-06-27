import axios from 'axios'

const api = axios.create({
  // baseURL: 'http://gateway.marvel.com/v1/public',
  baseURL: 'https://run.mocky.io/v3/9ec24865-a4a3-4db1-a2d7-b63dfc07eeed',
})

export default api
