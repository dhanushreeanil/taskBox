const notesInitialState = []

const notesReducer = (state = notesInitialState, action) =>{
    switch(action.type){
        case "SET_MYNOTES" : {
            return [...action.payload]
        }
        case "ADD_NOTE" : {
            return [...state,{...action.payload}]
        }
        case "REMOVE_NOTE" : {
            return state.filter((note) => {
                return action.payload !== note._id
            }) 
           
        }
        default : {
            return [...state]
        }
    }
}

export default notesReducer