import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { startLoginData } from '../../actions/usersAction'

const Login = (props) => {

    const [loginUser, setLoginUser] = useState({
        email : "",
        password : ""
    })

    const dispatch = useDispatch()

    const handleChange = (e) => {
        if(e.target.name === "email"){
            setLoginUser({...loginUser , email : e.target.value })
        }
        else if(e.target.name === "password"){
            setLoginUser({...loginUser, password : e.target.value })
        }
    }
    const resetForm = () =>{
        setLoginUser({})
    }
    const redirect = () =>{
        props.history.push("/")
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        const { email, password } = loginUser
        const formData = {
            email,
            password
        }
        console.log("login-data", formData)
        dispatch(startLoginData(formData,resetForm,redirect))
        alert(`successfully Logged-In`)
        props.handleAuth()
    }

    return (
        <div className="container-fluid">
            <div className="jumbotron">
                <h2>Login to your Account</h2>
            </div>
            <form className="form-group" onSubmit={ handleSubmit }>
                <input class="form-control"
                    type="text" 
                    placeholder="Enter email" 
                    value={ loginUser.email }
                    onChange = { handleChange }
                    name="email"    
                /><br/>
                <input class="form-control"
                    type="password" 
                    placeholder="Enter password" 
                    value={ loginUser.password }
                    onChange = { handleChange } 
                    name="password"
                /><br/>
                <input class="btn btn-info" type="submit" value="Login" />
                <input class="btn btn-danger" type="submit" value="Cancel" />
            </form>
        </div>
    )
}

export default Login
