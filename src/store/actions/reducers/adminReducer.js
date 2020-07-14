const defaultState = {
    users: [],
    posts: []
}


// function that states changes when the admins performs an action
const admin = (state = defaultState, action) => {
    if (action.type === 'USER') {
        return {
            ...state,
            users: action.payload
        }
    } else if (action.type === 'POSTS'){
        return {
            ...state,
            posts: action.payload
        }
    
    } else if (action.type === 'ADD_POST'){
        return {
            ...state,
            posts: state.posts.concat(action.payload)
        }

    } else {
        return state
    }
}

export default admin;