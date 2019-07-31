import Axios from "axios";

export const CustomApi = (route, data) => {
    return new Promise((resolve, reject) => {
        Axios.post(route, data).then(
            response => {
                let data = response.data
                resolve(data)
            }
        ).catch(
            err => {
                reject(err.response.data)
            }
        )
    })
}