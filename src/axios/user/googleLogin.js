const axios = require('axios') 

module.exports = async function (code){
    try {
        return await axios({
            method: 'post',
            url: `http://localhost:3001/user/google`,
            data: {
                code: code
            }
        })
    } catch (e) {
        console.log(e)
    }
}