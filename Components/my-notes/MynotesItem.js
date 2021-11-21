import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { startRemoveNote, startSingleUser } from "../../actions/notesAction"

const MynotesItem = (props) => {

    const { _id, title, body } = props
    const dispatch = useDispatch()

    const handleRemove = () => {
        const confirm = window.confirm('are you sure to remove ?')
        if(confirm){
            dispatch(startRemoveNote(_id))
        }
    }
    const handleShow = ()=>{
        dispatch(startSingleUser(_id))
    }

    return (<div>
            <h4 onClick = { handleShow }> { title } </h4>
            <button class="btn btn-danger" onClick = { handleRemove } > remove </button>
        </div>
    )
}

export default MynotesItem