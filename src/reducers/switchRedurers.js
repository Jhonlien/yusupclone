const initialState = false

export const switchReducers = (state=initialState, action) => {
    if(action.type == "darkMode"){
        return action.payload
    }
    return state
}