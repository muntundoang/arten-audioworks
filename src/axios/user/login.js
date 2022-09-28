const axios = require('axios') 

module.exports = async function (email, password){
    try {
        return await axios({
            method: 'post',
            url: `${process.env.baseUrl}/user/login`,
            data: {
                email: email,
                password: password
            }
        })
    } catch (e) {
        console.log(e)
    }
}