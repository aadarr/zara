import axios from "axios";
import * as types from "./actionTypes";

const baseURL = "http://localhost:3000/";

const getProduct = (payload = 'products', limit = '') => async (dispatch) => {
    dispatch({ type: types.GET_PRODUCTS_REQUEST });
    try {
        const r = await axios
            .get(`${baseURL}${payload}?_limit=${limit}`);
        return dispatch({ type: types.GET_PRODUCTS_SUCCESS, payload: r.data });
    } catch (e) {
        dispatch({ type: types.GET_PRODUCTS_FAILURE });
    }
}

const getSingleProduct = (payload) => async (dispatch) => {
    dispatch({ type: types.GET_SINGLE_REQUEST });
    try {
        const r = await axios
            .get(`${baseURL}products/${payload}`);
        return dispatch({ type: types.GET_SINGLE_SUCCESS, payload: r.data });
    } catch (e) {
        dispatch({ type: types.GET_SINGLE_FAILURE });
    }
}

const postCart = (payload) => async (dispatch) => {
    dispatch({ type: types.POST_CART_REQUEST });
    try {
        const r = await axios
            .post(`${baseURL}cart`, payload);
        return dispatch({ type: types.POST_CART_SUCCESS });
    } catch (e) {
        dispatch({ type: types.POST_CART_FAILURE });
    }
}

const getCart = (payload) => async (dispatch) => {
    dispatch({ type: types.GET_CART_REQUEST });
    try {
        const r = await axios
            .get(`${baseURL}cart`);
        return dispatch({ type: types.GET_CART_SUCCESS, payload: r.data });
    } catch (e) {
        dispatch({ type: types.GET_CART_FAILURE });
    }
}

const deleteCart = (id) => async (dispatch) => {
    dispatch({ type: types.DELETE_CART_REQUEST });

    try {
        const r = await axios
            .delete(`${baseURL}cart/${id}`);
        return dispatch({ type: types.DELETE_CART_SUCCESS });
    } catch (e) {
        dispatch({ type: types.DELETE_CART_FAILURE });
    }
}

const patchcart = ({ qnty, id }) => async (dispatch) => {
    dispatch({ type: types.PATCH_CART_REQUEST });

    try {
        const r = await axios
            .patch(`${baseURL}cart/${id}`, {
                quantity: qnty
            });
        return dispatch({ type: types.PATCH_CART_SUCCESS });
    } catch (e) {
        dispatch({ type: types.PATCH_CART_FAILURE });
    }
}

export {
    getProduct,
    getCart,
    postCart,
    deleteCart,
    getSingleProduct,
    patchcart
}
