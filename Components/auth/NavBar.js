import React from 'react'
import { Link, Route, withRouter } from 'react-router-dom'

import Register from './Register'
import Login from './Login'
import Account from './Account'
import MynotesContainer from "../my-notes/MynotesContainer"

const NavBar = (props) => {

    const { isLoggedIn, handleAuth } = props

    return (
        <div className="container-fluid">
            <ul className="list-group list-group-horizontal">
                { isLoggedIn ? 
                    ( <React.Fragment> 
                        <li className="list-group-item "> <Link to="/account"> Account </Link> </li>
                        <li className="list-group-item "> <Link to="/my-notes"> My Notes </Link> </li>
                        <li className="list-group-item "> <Link onClick = {(e)=>{ 
                                e.preventDefault()
                                localStorage.removeItem('token')
                                alert(`successfully logged-out.`)
                                handleAuth() 
                                props.history.push('/login')
                            }}> Logout </Link> </li>
                    </React.Fragment> ) 
                    : 
                    ( <React.Fragment>
                        <li className="list-group-item "> <Link to="/register" > Register </Link> </li>
                        <li className="list-group-item "> <Link to="/login"> Login </Link> </li>
                    </React.Fragment> )
                }
           </ul>
                <Route exact path="/register" component = { Register } />
                <Route exact path="/login" 
                    render = { (props) => {
                        return <Login { ...props } handleAuth = { handleAuth } /> 
                    }} 
                />
                <Route exact path="/account" component = { Account } />
                <Route exact path="/my-notes" component = { MynotesContainer } />
        </div>
    )
}

export default withRouter(NavBar)
