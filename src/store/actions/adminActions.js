import API from '../../utils/api';


//Actions for the admin user

export const  getUsers = token => {

    return (dispatch) => {
    API.getUsers(token, res => {
         dispatch({
             type: 'USER',
             payload: res.data
         })
    })
}
}


export const getPosts = token => {

    return(dispatch) => {
        API.getPosts(token, res => {
            dispatch({
                type: 'POSTS',
                payload: res.data
            })
        })
    }

}

export const addPost = (post, token) => {
    return (dispatch) => {
        API.addPost(post, token, res => {
            dispatch({
                type: 'ADD_POST',
                payload: res.data
            })
        })
    }
}

export const getSinglePost = (id, token) => {
    return (dispatch) => {
        API.getSinglePost(id, token, res => {
            dispatch({
                type: 'EDIT_POST',
                payload: res.data
            })
        })
    }
}