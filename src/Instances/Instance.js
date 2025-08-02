import axios from "axios";

const baseURL = `https://password-reset-nodejs-fb4t.onrender.com/api/v1/users`;
// const baseURL = `http://localhost:3003/api/v1/users`;

let Instance = axios.create({
    baseURL,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    timeout: 5000 
})

export default Instance;