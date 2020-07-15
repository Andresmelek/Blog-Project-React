const defaultState = {
    users: [],
    posts: [],
    post: {}
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

    }  else if (action.type === 'EDIT_POST'){
        return {
            ...state,
            post: action.payload
        }

    }else if (action.type === 'UPDATE_POST'){
        return {
            ...state,
            post: action.payload,
            posts: state.posts.map(post => {
                //The existing post in redux that has been updated
                //and is currently in action.payload
                if (post.id === action.payload.id){
                    return {...post,
                    ...action.payload
                    }
                } else {
                    return post
                }
            })
        }
    } else if (action.type === 'UPLOAD_IMAGE') {
        return {
            ...state,
            post: {
                ...state.post,
                postImage: [action.payload]
            }
        }

    } else {
        return state
    }
}

export default admin;