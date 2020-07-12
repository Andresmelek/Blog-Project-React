const defaultState = {
    user: {},
    token: null
}

// action has the object type and payload
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


