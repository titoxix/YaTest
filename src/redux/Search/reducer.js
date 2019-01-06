const initialState = {
    searchInformation: []
}

const user = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_SEARCH_INFORMATION':
            const newState = {
                ...state,
                searchInformation: [...state.searchInformation, ...action.payload.data]
            };
            return newState;
        default:
            return state
    }
}

export default user;