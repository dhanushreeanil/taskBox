import React , { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { startGetUser } from '../../actions/usersAction'

const Account = (props) => {

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(startGetUser())
    },[])
    

    const user = useSelector((state)=>{
        return state.user
    })

    return (
        <div className="container-fluid">
            { user ? <div className="container-fluid p-3">
                <h2 className="text-muted p-3"> User Account </h2>
                <h4> Username - { user.username } </h4>
                <h4> Email - { user.email } </h4>
            </div> : null 
            }
        </div>
    )
}

export default Account
