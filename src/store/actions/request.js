import axios from 'axios'

export const request = axios.create({
  baseURL: 'https://frontend.recruiting.credy.com/'
})
