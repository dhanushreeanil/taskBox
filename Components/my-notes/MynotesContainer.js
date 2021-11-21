import React, {  useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { startGetNotes } from '../../actions/notesAction'
import MynotesList from './MynotesList'
import NotesForm from './NotesForm'

const MynotesContainer = (props) => {

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(startGetNotes())
    },[])

    return (
        <div className="container-fluid">

            <div className="text-muted p-3">
                <h2> My Notes </h2>
            </div>

            <div class="row">
                <div class="col-sm-6"> 
                    <MynotesList />
                </div>
                <div class="col-sm-6"> 
                    <NotesForm />
                </div>
            </div>
        </div>
    )
}

export default MynotesContainer
