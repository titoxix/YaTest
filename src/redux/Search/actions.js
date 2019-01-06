import * as ApiService from "../../services/PedidoYaApi";

export const updateSearchInformation = (latLng) => (dispatch, getState) => {
    return ApiService.searchRestaurant(latLng)
        .then(payload => {
            const mapData = payload.data.map(item => {
                return {
                    name: item.name,
                    topCategories: item.topCategories,
                    rating: item.rating,
                    logo: `https://d1v73nxuzaqxgd.cloudfront.net/restaurants/${item.logo}`,
                    deliveryTimeMaxMinutes: item.deliveryTimeMaxMinutes,
                    link: `http://www.pedidosya.com.uy/restaurantes/montevideo/${item.link}-menu `
                }
            })
            dispatch({
                type: 'UPDATE_SEARCH_INFORMATION',
                payload: {
                    data: mapData,
                }
            })
            return payload.status
        });
};