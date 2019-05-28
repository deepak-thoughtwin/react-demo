import { ADD_USER } from '../actionTypes';

const initialState = {
    users: []
}

const addUser = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            const users = state.users
            users.push(action.obj)
            return Object.assign({}, state, {users: users})
        default:
            return state
    }
}

export default addUser;