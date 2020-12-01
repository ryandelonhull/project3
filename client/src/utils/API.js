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
<<<<<<< HEAD
=======
    checkUserData: function(data){
        console.log(data);
        return axios
        .get('/api/signup')
    },

>>>>>>> 43d5780fdfd353d9cb84d01dafc4639fa4463040

    saveWinner: function(data){
        return axios.get('./api/user', data)
        .then(function(response){
            console.log(response)
        })
        .catch(function(err){
            console.log(err)
        })
<<<<<<< HEAD
    },
    checkUserData: function(data){
        console.log(data);
        return axios
        .get('/api/signup')
=======
>>>>>>> 43d5780fdfd353d9cb84d01dafc4639fa4463040
    }
}