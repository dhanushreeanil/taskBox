import axios from "axios"

// register

export const startRegisterData = (formData, resetForm, redirect) =>{
    return (dispatch)=>{
        axios.post(`http://dct-user-auth.herokuapp.com/users/register`,formData)
        .then((response)=>{
            const result = response.data
            if(result.hasOwnProperty("errors")){
                alert(result.message)
            }
            else{
                alert(`successfully created account`)
                redirect()
                resetForm()
            }
        })
        .catch((err)=>{
            const error = err.message
            console.log(error) 
        })
    }
}

// login

export const startLoginData = (formData,resetForm,redirect) =>{
    return (dispatch) =>{
        axios.post(`http://dct-user-auth.herokuapp.com/users/login`, formData)
            .then((response)=>{
                const result = response.data
                if(result.hasOwnProperty("errors")){ 
                    alert(result.errors)
                }
                else{
                    dispatch(startGetUser())
                    resetForm()
                    localStorage.setItem('token', result.token)
                    redirect()
                    // console.log("login-action - result", result)
                }
            })
            .catch((err)=>{
                const error = err.message
                console.log(error) 
            })
    }
}

export const startGetUser = () =>{
    return (dispatch) => {
        axios.get(`http://dct-user-auth.herokuapp.com/users/account`, {
                headers: {
                    "x-auth" : localStorage.getItem("token")
                }
            })
            .then((response)=>{
                const result = response.data
                if(result.hasOwnProperty("errors")){ 
                    alert(result.errors)
                }
                else{
                    // alert(`successfully Logged-In`)
                    dispatch(setUser(result))
                    console.log("account-action", result)
                }  
            })
            .catch((err)=>{
                const error = err.message
                console.log(error)
            })
    } 
}

export const setUser = (user) => {
    return {
        type : "SET_USER",
        payload : user
    }
}
