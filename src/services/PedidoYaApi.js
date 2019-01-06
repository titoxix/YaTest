import axios from "axios";
import * as CONSTANTS from "../constants";

export const getToken = () => {
    axios({
        method: 'get',
        url: CONSTANTS.URL_API + '/tokens?clientId=' + CONSTANTS.CLIENT_ID
            + '&clientSecret=' + CONSTANTS.CLIENT_SECRET,
    }).then(response => {
        sessionStorage.setItem('token', response.data.access_token);
    }).catch(err => {
        console.log('(getToken) ERROR: ' + err);
    });
}

export const login = (data) => {
    return axios({
        method: 'get',
        url: CONSTANTS.URL_API + '/tokens?userName=' + data.userName
            + '&password=' + data.password,
        headers: { Authorization: sessionStorage.getItem('token') },
    }).then(response => {
        sessionStorage.setItem('userToken', response.data.access_token);
        return response.status;
    }).catch(err => {
        console.log('(login) ERROR: ' + err);
        return err.response
    });
}

export const getAccountInformation = (data) => {
    return axios({
        method: 'get',
        url: CONSTANTS.URL_API + '/myAccount',
        headers: { Authorization: sessionStorage.getItem('userToken') },
    }).then(response => {
        return { data: response.data, status: response.status }
    }).catch(err => {
        console.log('(myAccount) ERROR: ' + err);
        return err
    });
}

export const searchRestaurant = (latLng) => {
    return axios({
        method: 'get',
        url: CONSTANTS.URL_API + '/search/restaurants?country=1&point=' + latLng.lat + "," + latLng.lng,
        headers: { Authorization: sessionStorage.getItem('userToken') },
    }).then(response => {
        return { data: response.data.data, status: response.status }
    }).catch(err => {
        console.log('(searchRestaurant) ERROR: ' + err);
        return err
    });
}