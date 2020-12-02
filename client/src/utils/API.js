import axios from 'axios';



export default {
    // saveUserGame: function(data) {
    //     console.log(data);
    //     return axios
    //     .post('/api/games', data)
    //     .then(function(response){
    //         console.log(response);
    //     })
    //     .catch(function(err){
    //         console.log(err)
    //     })
    // },


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
        return axios.get('/api/users/', data)
        .then(function(response){
            return response.data;
      
        })
        .catch(function(err){
            console.log(err)
        })
    },
    updateStats: function (data) {
        axios({
          method: "PUT",
          url: "/api/users",
          data: data
        })
          .then(function() {
            console.log(data)
          });
      },
    updateStats: function(id){
        axios.put('/api/users/', id)
        .then(function(response){
            // return response.data;
            console.log(response)
      
        })
        .catch(function(err){
            console.log(err)
        })
    },
    logoutUser: function() {
        return axios.get("/logout");
      }
    
}