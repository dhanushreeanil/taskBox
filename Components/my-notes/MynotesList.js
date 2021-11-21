import React from 'react'
import { useSelector } from 'react-redux'

import MynotesItem from './MynotesItem'

const MynotesList = (props) => {  

    const notes = useSelector((state)=>{
        return state.mynotes
    })

    return (
        <div className="container-fluid">
            <h2> Notes - { notes.length } </h2>
            { notes.length === 0 ? <div>
                <h4> No notes found </h4>
                <p> Add your first note </p>
            </div> : <div>
                    { notes.map((mynote)=>{
                        return <MynotesItem key = { mynote._id } {...mynote} />
                    }) }
            </div> }
        </div>
    )
}

export default MynotesList
