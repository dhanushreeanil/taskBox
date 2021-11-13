import axios from 'axios'
import swal from 'sweetalert'

export const startGetNotes = () =>{
    return (dispatch) =>{
        axios.get(`http://dct-user-auth.herokuapp.com/api/notes`, {
            headers: {
                "x-auth" : localStorage.getItem("token")
            }
        })
            .then((response)=>{
                const result = response.data
                dispatch(setMynotes(result))
                console.log("notes-action", result)
            })
            .catch((err)=>{
                const error = err.message
                console.log(error) 
            })
    }
}

export const setMynotes = (mynotes) =>{
    return {
        type : "SET_MYNOTES",
        payload : mynotes
    }
}

// add note

export const startAddNote = (formData, resetForm) =>{
    return (dispatch) =>{
        axios.post(`http://dct-user-auth.herokuapp.com/api/notes`,formData ,{
                    headers:{
                        'x-auth':localStorage.getItem('token')
                    }
                })
    
                .then((response)=>{
                    const result = response.data
                    console.log("addnote - action", result)
                    if(Object.keys(result).includes('errors')){
                        alert(result.errors)
                    }
                    else{
                        resetForm()
                        dispatch(addNotes(result))
                    }
                })
                .catch((error)=>{
                    alert(error.message)
                })
    }
}

export const addNotes = (mynote) =>{
    return {
        type : "ADD_NOTE",
        payload : mynote
    }
}

// remove note

export const startRemoveNote = (_id) =>{
    return (dispatch) =>{
        axios.delete(`http://dct-user-auth.herokuapp.com/api/notes/${_id}`,{
                headers:{
                    "x-auth" : localStorage.getItem('token')
                }
            })
            .then((response) => {
                const result = response.data
               // removeItem(result._id)
               dispatch(removeNote(result._id))
               console.log("remove note - action", result._id)
            //    console.log("result id", result._id)
            })
            .catch((error) => {
                alert(error.message)
            })
    }
}

export const removeNote = (id) =>{
    return {
        type : "REMOVE_NOTE",
        payload : id
    }
}

// show single user

export const startSingleUser = (_id) =>{
    return (dispatch) =>{
        axios.get(`http://dct-user-auth.herokuapp.com/api/notes/${_id}`,{
            headers:{
                'x-auth' : localStorage.getItem('token')
            }
        })
            .then((response)=>{
                const result = response.data
                console.log("swal", result)
                swal({
                    title : result.title,
                    text : result.body,
                    button : "cancel"                       
                    })
                })
            .catch((error)=>{
                const result = error.message
                swal({
                    title : result,
                    button : "cancel"
                })
            })
    }
}