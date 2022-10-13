const axios = require('axios') 

module.exports = async function (payload){
    try {
        return await axios({
            method: 'post',
            url: `http://localhost:3001/user/tokenRead`,
            data: {
                payload
            }
        })
    } catch (e) {
        console.log(e)
    }
}