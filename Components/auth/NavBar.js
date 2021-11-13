import React from 'react'
import { Link, Route, withRouter } from 'react-router-dom'

import Home from './Home'
import Register from './Register'
import Login from './Login'
import Account from './Account'
import MynotesContainer from "../my-notes/MynotesContainer"

const NavBar = (props) => {

    const { isLoggedIn, handleAuth } = props

    return (
        <div className="container-fluid">
            <ul className="list-group list-group-horizontal">
                <li className="list-group-item "> <Link to="/" > Home </Link> </li>
                { isLoggedIn ? 
                    ( <React.Fragment> 
                        <li className="list-group-item list-group-item-dark text-dark"> <Link to="/account"> Account </Link> </li>
                        <li className="list-group-item list-group-item-dark"> <Link to="/my-notes"> My Notes </Link> </li>
                        <li className="list-group-item list-group-item-dark"> <Link onClick = {(e)=>{ 
                                e.preventDefault()
                                localStorage.removeItem('token')
                                alert(`successfully logged-out.`)
                                handleAuth() 
                                props.history.push('/')
                            }}> Logout </Link> </li>
                    </React.Fragment> ) 
                    : 
                    ( <React.Fragment>
                        <li className="list-group-item list-group-item-dark"> <Link to="/register" > Register </Link> </li>
                        <li className="list-group-item list-group-item-dark"> <Link to="/login"> Login </Link> </li>
                    </React.Fragment> )
                }
           </ul>
                <Route exact path="/" component = { Home } />
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
