const initialState = false

export const themeReducers = (state=initialState, action) => {
    if(action.type == "change_theme"){
        return action.payload
    }
    return state
}