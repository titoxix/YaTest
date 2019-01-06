const initialState = {
    userInformation: {
        country: {},
        id: -1,
        lastName: '',
        name: '',
    }
}

const user = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_USER_INFORMATION':
            const newState = {
                ...state,
                userInformation: { ...state.userInformation, ...action.payload.data }
            };
            return newState;
        default:
            return state
    }
}

export default user;