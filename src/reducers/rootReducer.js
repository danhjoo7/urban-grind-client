const initialState = {
    currentUser: {},
    users: [],
    search: '',
    places: [],
    reviews: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_USER':
            return {...state, currentUser: action.payload}
        case 'SET_ALL_USERS':
            return { ...state, users: action.users }
        case 'SEARCH':
            return { ...state, search: action.search }
        default:
            return state
    }
}

export default rootReducer