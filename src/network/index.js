import axios from 'axios';

export function getUser(id){
   return axios.get(`https://api.github.com/search/users?q=${id}`)
}
