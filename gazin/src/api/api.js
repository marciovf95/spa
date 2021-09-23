import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:3001/api/'
  //baseURL: 'http://mariadbteste:3001/api/'
  //baseURL:'http://172.16.104.109:3001/api'
})

export const busca = async(url, setDado) => { 
await api.get(url,{
  headers: {
    Accept: '*/*'
  }
})
.then(response => {
   setDado(response.data)
 })
.catch(error => {
   console.log(error)
});
}