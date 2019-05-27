import { ADD_USER } from '../actionTypes';

const initialState = { }

const addUser = (state = initialState, action) => {
    // debugger
    switch (action.type) {
        case ADD_USER:
            return Object.assign({}, state, action.obj)
        default:
            return state
    }
}

export default addUser;