import API from '../../utils/api';

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