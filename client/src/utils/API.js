import axios from 'axios';


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
    checkUserData: function(data){
        console.log(data);
        return axios
        .get('/api/signup')
    }
}