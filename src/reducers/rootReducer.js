const initialState = {
    currentUser: {},
    users: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN_USER":
            return {
                
            }
        default:
            return state
    }
}