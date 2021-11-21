import React from 'react'
import { useDispatch } from 'react-redux'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

import { startRegisterData } from '../../actions/usersAction'

const Register = (props) => {

    const dispatch = useDispatch()

    const redirect = () =>{
        props.history.push("/login")
    }

    const initialValues = {
        username : "",
        email : "",
        password : ""
    }

    const onSubmit = (values, onSubmitProps) =>{
        dispatch(startRegisterData(values, redirect))
        onSubmitProps.resetForm()
    }

    const validationSchema = Yup.object({
        username : Yup.string().required("Required*"),
        email : Yup.string().email("Invalid email format").required("Required*"),
        password : Yup.string().required("Required*")
    })

    return (
        <div className="container-fluid p-3">
            <Formik initialValues = { initialValues }
                validationSchema = { validationSchema }
                onSubmit = { onSubmit } 
            >
            <Form>
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