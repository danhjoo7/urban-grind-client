const initialState = {
    currentUser: {},
    users: [],
    search: '',
    places: [],
    reviews: []
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

export default rootReducer