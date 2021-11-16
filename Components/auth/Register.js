import React from 'react'
import { useDispatch } from 'react-redux'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

import { startRegisterData } from '../../actions/usersAction'

const Register = (props) => {

    const dispatch = useDispatch()

    const resetForm = () =>{
        return initialValues
        // props.form.values({})
    }

    console.log()

    const redirect = () =>{
        props.history.push("/login")
    }

    const initialValues = {
        username : "",
        email : "dhanu",
        password : ""
    }

    const onSubmit = values =>{
        dispatch(startRegisterData(values, resetForm, redirect))
        console.log("formdata-values", values)
    }

    const validationSchema = Yup.object({
        username : Yup.string().required("Required*"),
        email : Yup.string().email("Invalid email format").required("Required*"),
        password : Yup.string().required("Required*")
    })

    return (
        <div className="container-fluid">
            <div className="jumbotron">
                <h2> Register With Us</h2>
            </div>
            <Formik initialValues = { initialValues }
                validationSchema = { validationSchema }
                onSubmit = { onSubmit } 
            >
            <Form>
                {/* automatically links handleSubmit event to method passed into formik */}
                <Field className="form-control"
                    type="text" 
                    name="username"  
                    placeholder="Enter username" 
                />
                <ErrorMessage name="username" />
                <br/>
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
                <Field  className="btn btn-info" type="submit" value="Register" /> 
                <Field  className="btn btn-danger" type="submit" value="Cancel" />
            </Form>
            </Formik>
        </div>
    )
}

export default Register


// using redux

// import React, { useState } from 'react'
// import { useDispatch } from 'react-redux'

// import { startRegisterData } from '../../actions/usersAction'

// const Register = (props) => {

//     const [registerUser, setRegisterUser] = useState({
//         username : "",
//         email : "",
//         password : ""
//     })

//     const dispatch = useDispatch()

//     const handleChange = (e) => {

//         if(e.target.name === "username"){
//             setRegisterUser({...registerUser, username: e.target.value})
//         }
//         else if(e.target.name === "email"){
//             setRegisterUser({...registerUser, email : e.target.value})
//         }
//         else if(e.target.name === "password"){
//             setRegisterUser({...registerUser, password:e.target.value})
//         }
//         console.log("user", registerUser)
//     }

//     const resetForm = () =>{
//         setRegisterUser({})
//     }
//     const redirect = () =>{
//         props.history.push("/login")
//     }
//     const handleSubmit = (e) =>{
//         e.preventDefault()
//         const { username, email, password } = registerUser
//         const formData = {
//             username,
//             email,
//             password
//         }
//         dispatch(startRegisterData(formData, resetForm, redirect))
//     }

//     return (
//         <div className="container-fluid">
//             <div className="jumbotron">
//                 <h2> Register With Us</h2>
//             </div>
            
//             <form className="form-group" onSubmit={ handleSubmit }>
//                 <Field class="form-control"
//                     type="text" 
//                     placeholder="Enter username" 
//                     value={ registerUser.username }
//                     onChange = { handleChange }  
//                     name="username"  
//                 /><br/>
//                 <Field class="form-control"
//                     type="text" 
//                     placeholder="Enter email" 
//                     value={ registerUser.email }
//                     onChange = { handleChange }    
//                     name="email"
//                 /><br/>
//                 <Field class="form-control"
//                     type="password" 
//                     placeholder="Enter password" 
//                     value={ registerUser.password }
//                     onChange = { handleChange }
//                     name="password" 
//                 /><br/>
//                 <Field  class="btn btn-info" type="submit" value="Register" /> 
//                 <Field  class="btn btn-danger" type="submit" value="Cancel" />
//             </form>
//         </div>
//     )
// }

// export default Register