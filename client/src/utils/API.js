import axios from 'axios';
import Userdata from '../components/Userdata/Userdata';


export default {
    saveUserData: function(data) {
        console.log(data);
        return axios
        .post('/api/signup', data)
        .then(function(response){
            console.log(response)
        })
        .catch(function(err){
            console.log(err)
        })
    },

    saveWinner: function(data){
        return axios.get('./api/user', data)
        .then(function(response){
            console.log(response)
        })
        .catch(function(err){
            console.log(err)
        })
    }
}