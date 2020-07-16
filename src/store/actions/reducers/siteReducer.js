const defaultState = {
    user: {},
    token: null,
    post: {}
}


// function that changes state when an action action is performed on the site
const site = (state = defaultState, action) => {
    if(action.type === 'SITE_POST') {
        return {
            ...state,
            posts: action.skip ? state.posts.concat(action.payload) : action.payload
        }

    } else if (action.type === 'SINGLE_POST') {
        return {
            ...state,
            post: action.payload

        }
    }else if (action.type === 'FULL_POST'){
        return {
            ...state,
            post: {
                ...state.post,
                ...action.payload

            }
        }
    } else {
        return state
    }
}

export default site;