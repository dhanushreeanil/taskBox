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
            { user && <div className="container-fluid">
            <div className="jumbotron">
                <h2> User Account </h2>
            </div>
                <h4> Username - { user.username } </h4>
                <h4> Email - { user.email } </h4>
            </div> }
        </div>
    )
}

export default Account
