import axios from 'axios';
const devURL = "http://localhost:8000"
// const devURL = "http://192.168.228.1:8000"
const accessURL = "http://127.0.0.1:8000/"
const record =  axios.create({
    baseURL:devURL
})
const authRecord =(token) => axios.create({
    baseURL: devURL,
    headers: {'Authorization': 'Token '+ token}
  });
export {authRecord, record, accessURL}