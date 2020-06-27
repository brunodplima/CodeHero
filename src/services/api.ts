import axios from 'axios'
import md5 from 'md5'

const api = axios.create({
  baseURL: 'http://gateway.marvel.com/v1/public',
  // baseURL: 'https://run.mocky.io/v3/9ec24865-a4a3-4db1-a2d7-b63dfc07eeed',
})

api.interceptors.request.use((config) => {
  const publicKey = process.env.REACT_APP_PUBLIC_KEY
  const privateKey = process.env.REACT_APP_PRIVATE_KEY
  const timestamp = Math.floor(Date.now() / 1000)

  const defaultParams = {
    apikey: publicKey,
    ts: timestamp,
    hash: md5(`${timestamp}${privateKey}${publicKey}`)
  }

  const newConfig = { ...config }
  newConfig.params = { ...defaultParams, ...newConfig.params }

  return newConfig
})

export default api
