import * as ApiService from "../../services/PedidoYaApi";

export const getAccountInformation = () => (dispatch, getState) => {
    return ApiService.getAccountInformation()
        .then(payload => {
            sessionStorage.setItem('userName', payload.data.name);
            dispatch({
                type: 'UPDATE_USER_INFORMATION',
                payload: {
                    data: payload.data,
                }
            })
            return payload.status
        });
};