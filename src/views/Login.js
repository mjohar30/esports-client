import React, { Component } from 'react';
const baseURL = `${process.env.REACT_APP_BASE_URL}/users/login`

class Login extends Component {

    render() {
    axios({
        method: 'post',
        baseURL,
        headers: {'Content-Type': 'application/json'},
        withCredentials: true,
        data: doctor
      })
      .then(res => {
        console.log(res.data)
        return res.data
      })
    return (
            <div>
                
            </div>
        );
    }
}

export default Login;