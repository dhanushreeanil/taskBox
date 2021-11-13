import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { startAddNote } from "../../actions/notesAction"

const NotesForm = (props) => {

    const dispatch = useDispatch()
    
    const [formData, setFormData] = useState({
        title : "",
        body : ""
    })
    const [formErrors, setFormErrors] = useState({})
    const findErrors = {}

    const handleTitle = (e) =>{
        setFormData({...formData,title: e.target.value})
    }
    const handleBody = (e) =>{
        setFormData({...formData, body : e.target.value})
    }
    const formVaidation = () =>{
        if((formData.title).trim().length === 0){
            findErrors["title"] = "title cannot be blank"
        }
    }

    const resetForm = () =>{
        setFormData({
            title : "",
            body : ""
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        formVaidation()
        const { title, body } = formData
        if(Object.keys(findErrors).length === 0){
            setFormErrors({})
            const formData = {
                title,
                body 
            }
            dispatch(startAddNote(formData, resetForm))
        }
        else{
            setFormErrors(findErrors)
        }
    }

    return (
        <div>
            <h2> Add Note </h2>
            <form class="form-group" onSubmit = { handleSubmit }>
                <input class="form-control"
                    type = "text" 
                    placeholder="Title" 
                    onChange = { handleTitle } 
                    value = { formData.title }   
                    required = { true } 
                /><br/>
                { formErrors.title && <p> { formErrors.title } </p> }
                <textarea class="form-control"
                    placeholder="body" 
                    onChange = { handleBody }
                    value = { formData.body }    
                ></textarea><br/>
                <input className="btn btn-success" type="submit" value="save" />
            </form>
        </div>
    )
}

export default NotesForm
