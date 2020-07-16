import API from '../../utils/api';

export const getPosts = skip => {
     return dispatch => {
         API.getSitePosts(skip, res => {
             dispatch({
                 type : 'SITE_POST',
                 payload: res.data,
                 skip

             })
         })
     }
}

export const setPostData = post => {
    return dispatch => {
            dispatch({
                type: 'SINGLE_POST',
                payload: post
            })
    }
}
