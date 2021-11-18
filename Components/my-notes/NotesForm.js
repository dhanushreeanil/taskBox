import React from 'react'
import { useDispatch } from 'react-redux'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

import { startAddNote } from "../../actions/notesAction"

const NotesForm = (props) => {

    const dispatch = useDispatch()

    const initialValues = {
        title : "",
        body : ""
    }

    const onSubmit = (values, onSubmitProps) =>{
        dispatch(startAddNote(values))
        console.log("values",values)
        onSubmitProps.resetForm()
        props.handleAuth()
    }

    const validationSchema = Yup.object({
        title : Yup.string().required("Required*"),
    })

    return (
        <div>
            <h2> Add Note </h2>
            <Formik initialValues = { initialValues }
                validationSchema = { validationSchema }
                onSubmit = { onSubmit } 
            >
            <Form>
                <Field className="form-control"
                    type = "text" 
                    name="title"
                    placeholder="Title" 
                />
                <ErrorMessage name="title" />
                <br/>
                <Field class="form-control"
                    name="body"
                    placeholder="body" 
                    as="textarea" 
                />
                <br/>
                <Field className="btn btn-success" type="submit" value="save" />
            </Form>
            </Formik>
        </div>
    )
}

export default NotesForm
