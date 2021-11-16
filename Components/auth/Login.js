import React from 'react'
import { useDispatch } from 'react-redux'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

import { startLoginData } from '../../actions/usersAction'

const Login = (props) => {

    const dispatch = useDispatch()

    const resetForm = () =>{
        return initialValues
        // props.form.values({})
    }

    const redirect = () =>{
        props.history.push("/")
    }

    const initialValues = {
        email : "",
        password : ""
    }

    const onSubmit = values =>{
        dispatch(startLoginData(values, resetForm, redirect))
        console.log("formdata-values", values)
        alert(`successfully Logged-In`)
        props.handleAuth()
    }

    const validationSchema = Yup.object({
        email : Yup.string().email("Invalid email format").required("Required*"),
        password : Yup.string().required("Required*")
    })

    return (
        <div className="container-fluid">
            <div className="jumbotron">
                <h2> Login With Us</h2>
            </div>
            <Formik initialValues = { initialValues }
                validationSchema = { validationSchema }
                onSubmit = { onSubmit } 
            >
            <Form>
                {/* automatically links handleSubmit event to method passed into formik */}
                <Field className="form-control"
                    type="text" 
                    name="email"
                    placeholder="Enter email" 
                />
                <ErrorMessage name="email" />
                <br/>
                <Field className="form-control"
                    type="password" 
                    name="password" 
                    placeholder="Enter password" 
                />
                <ErrorMessage name="password" /> 
                <br/>
                <Field  className="btn btn-info" type="submit" value="Login" /> 
                <Field  className="btn btn-danger" type="submit" value="Cancel" />
            </Form>
            </Formik>
        </div>
    )
}

export default Login


// import React, { useState } from 'react'
// import { useDispatch } from 'react-redux'

// import { startLoginData } from '../../actions/usersAction'

// const Login = (props) => {

//     const [loginUser, setLoginUser] = useState({
//         email : "",
//         password : ""
//     })

//     const dispatch = useDispatch()

//     // const handleChange = (e) => {
//     //     if(e.target.name === "email"){
//     //         setLoginUser({...loginUser , email : e.target.value })
//     //     }
//     //     else if(e.target.name === "password"){
//     //         setLoginUser({...loginUser, password : e.target.value })
//     //     }
//     // }
//     const resetForm = () =>{
//         setLoginUser({})
//     }
//     const redirect = () =>{
//         props.history.push("/")
//     }
//     // const handleSubmit = (e) =>{
//     //     e.preventDefault()
//     //     const { email, password } = loginUser
//     //     const formData = {
//     //         email,
//     //         password
//     //     }
//     //     console.log("login-data", formData)
//     //     dispatch(startLoginData(formData,resetForm,redirect))
//     //     alert(`successfully Logged-In`)
//     //     props.handleAuth()
//     // }

//     return (
//         <div className="container-fluid">
//             <div className="jumbotron">
//                 <h2>Login to your Account</h2>
//             </div>
//             <form className="form-group" onSubmit={ handleSubmit }>
//                 <input class="form-control"
//                     type="text" 
//                     placeholder="Enter email" 
//                     value={ loginUser.email }
//                     onChange = { handleChange }
//                     name="email"    
//                 /><br/>
//                 <input class="form-control"
//                     type="password" 
//                     placeholder="Enter password" 
//                     value={ loginUser.password }
//                     onChange = { handleChange } 
//                     name="password"
//                 /><br/>
//                 <input class="btn btn-info" type="submit" value="Login" />
//                 <input class="btn btn-danger" type="submit" value="Cancel" />
//             </form>
//         </div>
//     )
// }

// export default Login
