import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { startRegisterData } from '../../actions/usersAction'

const Register = (props) => {

    const [registerUser, setRegisterUser] = useState({
        username : "",
        email : "",
        password : ""
    })

    const dispatch = useDispatch()

    const handleChange = (e) => {

        if(e.target.name === "username"){
            setRegisterUser({...registerUser, username: e.target.value})
        }
        else if(e.target.name === "email"){
            setRegisterUser({...registerUser, email : e.target.value})
        }
        else if(e.target.name === "password"){
            setRegisterUser({...registerUser, password:e.target.value})
        }
        console.log("user", registerUser)
    }

    const resetForm = () =>{
        setRegisterUser({})
    }
    const redirect = () =>{
        props.history.push("/login")
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        const { username, email, password } = registerUser
        const formData = {
            username,
            email,
            password
        }
        dispatch(startRegisterData(formData, resetForm, redirect))
    }

    return (
        <div className="container-fluid">
            <div className="jumbotron">
                <h2> Register With Us</h2>
            </div>
            
            <form className="form-group" onSubmit={ handleSubmit }>
                <input class="form-control"
                    type="text" 
                    placeholder="Enter username" 
                    value={ registerUser.username }
                    onChange = { handleChange }  
                    name="username"  
                /><br/>
                <input class="form-control"
                    type="text" 
                    placeholder="Enter email" 
                    value={ registerUser.email }
                    onChange = { handleChange }    
                    name="email"
                /><br/>
                <input class="form-control"
                    type="password" 
                    placeholder="Enter password" 
                    value={ registerUser.password }
                    onChange = { handleChange }
                    name="password" 
                /><br/>
                <input  class="btn btn-info" type="submit" value="Register" /> 
                <input  class="btn btn-danger" type="submit" value="Cancel" />
            </form>
        </div>
    )
}

export default Register

