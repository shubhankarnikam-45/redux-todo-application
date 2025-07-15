

const initiaState  = {
    darkTheme : false
}

export const themeReducer = (state = initiaState, action)=>{
    switch (action.type) {
        case "TOOGLE_THEME":
            return{
                darkTheme : !state.darkTheme
            }
        default:
            return state;
    }
}