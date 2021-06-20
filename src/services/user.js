const { default: axios } = require("axios")
/*
* Fetches users with given id
*@params {Number} id the id of user 
*@returns {Promise} promise of user details  
*/
const fetchUser =async(userId)=>{
    return axios.get('/dsfdf');
}