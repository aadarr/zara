import axios from "axios";
import * as types from "./actionTypes";
const getProduct = (payload,limit) => (dispatch) => {
    dispatch({ type: types.GET_PRODUCTS_REQUEST });
    return axios
        //.get(`https://zara-9999-default-rtdb.firebaseio.com/${payload}?_limit=${limit}`)
        .get(`https://zara-9999-default-rtdb.firebaseio.com/${payload}.json`)
        .then((r) => {
           return dispatch({ type: types.GET_PRODUCTS_SUCCESS, payload: r.data });
        })
        .catch((e) => {
            dispatch({ type: types.GET_PRODUCTS_FAILURE});
        })
}

const getSingleProduct = (payload,dataa) => (dispatch) => {
    dispatch({ type: types.GET_SINGLE_REQUEST });
    return axios
        //.get(`https://zara-9999-default-rtdb.firebaseio.com/product/${payload}.json`)
        .get(`https://zara-9999-default-rtdb.firebaseio.com/${payload}/${dataa}.json`)
        .then((r) => {
           return dispatch({ type: types.GET_SINGLE_SUCCESS, payload: r.data });
        })
        .catch((e) => {
            dispatch({ type: types.GET_SINGLE_FAILURE});
        })
}

const postCart = (payload) => (dispatch) => {
    dispatch({ type: types.POST_CART_REQUEST });
    const { id, ...rest } = payload;
    const payloadWithQuantity = { ...rest, id, quantity: 1 };
    return axios
        .put(`https://zara-9999-default-rtdb.firebaseio.com/cart/${id}.json`, payloadWithQuantity)
        .then((r) => {
            return dispatch({ type: types.POST_CART_SUCCESS });
        })
        .catch((e) => {
            dispatch({ type: types.POST_CART_FAILURE });
        })
}

const getCart = (payload) => (dispatch) => {
    dispatch({ type: types.GET_CART_REQUEST });
    return axios
        .get("https://zara-9999-default-rtdb.firebaseio.com/cart.json")
        .then((r) => {
            return dispatch({ type: types.GET_CART_SUCCESS, payload: r.data });
        })
        .catch((e) => {
            dispatch({ type: types.GET_CART_FAILURE});
        })
}

const deleteCart = (id) => (dispatch) => {
    dispatch({ type: types.DELETE_CART_REQUEST });

    return axios
        .delete(`https://zara-9999-default-rtdb.firebaseio.com/cart/${id}.json`)
        .then((r) => {
            return dispatch({ type: types.DELETE_CART_SUCCESS });
        })
        .catch((e) => {
            dispatch({ type: types.DELETE_CART_FAILURE });
        })
}
const patchcart = ({qnty,id}) => (dispatch) => {
    dispatch({ type: types.PATCH_CART_REQUEST });

    return axios
        .patch(`https://zara-9999-default-rtdb.firebaseio.com/cart/${id}.json`,{
            quantity : qnty
        })
        .then((r) => {
            return dispatch({ type: types.PATCH_CART_SUCCESS}
            );
        })
        .catch((e) => {
            dispatch({ type: types.PATCH_CART_FAILURE });
        })
}
export { getProduct, getCart, postCart, deleteCart,getSingleProduct,patchcart }
