import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { startRemoveNote, startSingleUser } from "../../actions/notesAction"

const MynotesItem = (props) => {

    const { _id, title, body } = props

    const dispatch = useDispatch()

    const [toggle, setToggle] = useState(false)

    const handleRemove = (e) => {
        const confirm = window.confirm('are you sure to remove ?')
        if(confirm){
            dispatch(startRemoveNote(_id))
        }
    }
    const handleShow = ()=>{
        dispatch(startSingleUser(_id))
    }

    return (<div>
      {
          toggle ? 
          <div>
                <h3> { title } </h3> 
                <h4> { body } </h4>
          </div> : 
          <div>
                <h5 onClick = { handleShow }> 
                    { title } <button class="btn btn-danger" onClick = { handleRemove } > remove </button>
                </h5>
          </div>
      }
        </div>
    )
}

export default MynotesItem