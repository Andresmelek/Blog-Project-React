const defaultState = {
    users: [],
    posts: []
}

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
    
    }else {
        return state
    }
}

export default admin;