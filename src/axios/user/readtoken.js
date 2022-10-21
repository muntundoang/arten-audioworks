import axios from 'axios' 

export default async function (payload){
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