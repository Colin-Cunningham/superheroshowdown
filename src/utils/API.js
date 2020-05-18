import Axios from "axios"
const baseURL = "https://superheroapi.com/api/"


export default {
    findByID: function(id){
        return Axios.get(baseURL + APIkey + id)
},
    findByName: function(name){
    return Axios.get(baseURL + APIkey + "/search/" + name)
}
}