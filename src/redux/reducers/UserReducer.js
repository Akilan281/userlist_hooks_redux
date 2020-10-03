import {ADD_USER} from '../actions/Action'

const initialstate = { userlist: [] }


 function UserReducer(state = initialstate, action) {
    switch (action.type) {
        case ADD_USER:
            return Object.assign({}, state, { userlist: action.payload })
        default:
            return state
    }
}

export default UserReducer;