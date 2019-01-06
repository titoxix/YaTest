
export const getCurrentLocation = () => (dispatch, getState) => {
    if (!navigator.geolocation) {
        console.log('Not authorized');
    } else {
        navigator.geolocation.getCurrentPosition((position) => {
            dispatch({
                type: 'UPDATE_CURRENT_LOCATION',
                payload: {
                    data: { lat: position.coords.latitude, lng: position.coords.longitude },
                }
            })
        }, (err) => {
            console.log(err);
        });
    }
}