import axios from 'axios' 

export default async function (type, code, email, password){
    try {
        return await axios({
            method: 'post',
            url: `http://localhost:3001/user/login`,
            data: {
                type: type,
                code: code,
                email: email,
                password: password
            }
        })
    } catch (e) {
        console.log(e)
    }
}