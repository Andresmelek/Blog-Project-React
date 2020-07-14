const defaultState = {
    user: {},
    token: null
}

//Function that state changes when the users logs in
const auth = (state = defaultState, action) => {

  if (action.type === 'LOGIN') {
        return {
            ...state,
            user: action.payload,
            token: action.payload.token
        }
    } else {
        return state;
    }
}
export default auth;


