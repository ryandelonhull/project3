import axios from 'axios';



export default {
    saveUserData: function(data) {
        console.log(data);
        return axios
        .post('/api/users', data)
        .then(function(response){
            console.log(response);
        })
        .catch(function(err){
            console.log(err)
        })
    },
    checkUserData: function(data){
        console.log(data);
        return axios.get('/api/users/',data)
        .then(function(response){
            return response.data
        })
    },
//we need to update user data when they win
//also need it in the backend routes 

    saveWinner: function(data){
        return axios.post('/api/savewinner/', data)
        .then(function(response){
            return response.data;
      
        })
        .catch(function(err){
            console.log(err)
        })
    }
}