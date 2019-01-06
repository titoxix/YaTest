const initialState = {
    geolocation: {
        lat: 0,
        lng: 0,

    },
}

const general = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_CURRENT_LOCATION':
            const newState = {
                ...state,
                geolocation: { ...state.geolocation, ...action.payload.data }
            };
            return newState;
        default:
            return state
    }
}

export default general;