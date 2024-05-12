// import axios from "axios";
// import * as types from "./actionTypes";
// // const baseURL = "http://localhost:3000/";
// const baseURL = "https://zara-9999-default-rtdb.firebaseio.com/";

// const getProduct = (payload = 'product', limit = '') => async (dispatch) => {
//     dispatch({ type: types.GET_PRODUCTS_REQUEST });
//     try {
//         const r = await axios
//             .get(`${baseURL}${payload}?_limit=${limit}`);
//         return dispatch({ type: types.GET_PRODUCTS_SUCCESS, payload: r.data });
//     } catch (e) {
//         dispatch({ type: types.GET_PRODUCTS_FAILURE });
//     }
// }

// const getSingleProduct = (payload) => async (dispatch) => {
//     dispatch({ type: types.GET_SINGLE_REQUEST });
//     try {
//         const r = await axios
//             .get(`${baseURL}product/${payload}`);
//         return dispatch({ type: types.GET_SINGLE_SUCCESS, payload: r.data });
//     } catch (e) {
//         dispatch({ type: types.GET_SINGLE_FAILURE });
//     }
// }

// const postCart = (payload) => async (dispatch) => {
//     dispatch({ type: types.POST_CART_REQUEST });
//     try {
//         const r = await axios
//             .post(`${baseURL}cart`, payload);
//         return dispatch({ type: types.POST_CART_SUCCESS });
//     } catch (e) {
//         dispatch({ type: types.POST_CART_FAILURE });
//     }
// }

// const getCart = (payload) => async (dispatch) => {
//     dispatch({ type: types.GET_CART_REQUEST });
//     try {
//         const r = await axios
//             .get(`${baseURL}cart`);
//         return dispatch({ type: types.GET_CART_SUCCESS, payload: r.data });
//     } catch (e) {
//         dispatch({ type: types.GET_CART_FAILURE });
//     }
// }

// const deleteCart = (id) => async (dispatch) => {
//     dispatch({ type: types.DELETE_CART_REQUEST });

//     try {
//         const r = await axios
//             .delete(`${baseURL}cart/${id}`);
//         return dispatch({ type: types.DELETE_CART_SUCCESS });
//     } catch (e) {
//         dispatch({ type: types.DELETE_CART_FAILURE });
//     }
// }

// const patchcart = ({ qnty, id }) => async (dispatch) => {
//     dispatch({ type: types.PATCH_CART_REQUEST });

//     try {
//         const r = await axios
//             .patch(`${baseURL}cart/${id}`, {
//                 quantity: qnty
//             });
//         return dispatch({ type: types.PATCH_CART_SUCCESS });
//     } catch (e) {
//         dispatch({ type: types.PATCH_CART_FAILURE });
//     }
// }

// export {
//     getProduct,
//     getCart,
//     postCart,
//     deleteCart,
//     getSingleProduct,
//     patchcart
// }


// import admin from 'firebase-admin';
// import * as types from './actionTypes';
// import { firebaseConfig } from '../../firebase/config';

// // Initialize Firebase Admin SDK
// if (!admin.apps.length) {
//   admin.initializeApp({
//     credential: admin.credential.cert(firebaseConfig),
//     databaseURL: firebaseConfig.databaseURL
//   });
// }

// // Action creators
// const getProduct = async (limit = '') => async (dispatch) => {
//     dispatch({ type: types.GET_PRODUCTS_REQUEST });
//     try {
//         // Fetch products from Firebase Realtime Database
//         const productsSnapshot = await admin.database().ref('product').limitToLast(limit).once('value');
//         const products = [];
//         productsSnapshot.forEach((childSnapshot) => {
//             products.push({ id: childSnapshot.key, ...childSnapshot.val() });
//         });
//         dispatch({ type: types.GET_PRODUCTS_SUCCESS, payload: products });
//     } catch (error) {
//         dispatch({ type: types.GET_PRODUCTS_FAILURE, payload: error.message });
//     }
// };

// const getSingleProduct = async (id) => async (dispatch) => {
//     dispatch({ type: types.GET_SINGLE_REQUEST });
//     try {
//         // Fetch single product from Firebase Realtime Database
//         const productSnapshot = await admin.database().ref(`product/${id}`).once('value');
//         const product = { id: productSnapshot.key, ...productSnapshot.val() };
//         dispatch({ type: types.GET_SINGLE_SUCCESS, payload: product });
//     } catch (error) {
//         dispatch({ type: types.GET_SINGLE_FAILURE, payload: error.message });
//     }
// };

// const postCart = async (payload) => async (dispatch) => {
//     dispatch({ type: types.POST_CART_REQUEST });
//     try {
//         // Add item to Firebase Realtime Database
//         await admin.database().ref('cart').push(payload);
//         dispatch({ type: types.POST_CART_SUCCESS });
//     } catch (error) {
//         dispatch({ type: types.POST_CART_FAILURE, payload: error.message });
//     }
// };

// const getCart = async () => async (dispatch) => {
//     dispatch({ type: types.GET_CART_REQUEST });
//     try {
//         // Fetch cart items from Firebase Realtime Database
//         const cartSnapshot = await admin.database().ref('cart').once('value');
//         const cartItems = [];
//         cartSnapshot.forEach((childSnapshot) => {
//             cartItems.push({ id: childSnapshot.key, ...childSnapshot.val() });
//         });
//         dispatch({ type: types.GET_CART_SUCCESS, payload: cartItems });
//     } catch (error) {
//         dispatch({ type: types.GET_CART_FAILURE, payload: error.message });
//     }
// };

// const deleteCart = async (id) => async (dispatch) => {
//     dispatch({ type: types.DELETE_CART_REQUEST });
//     try {
//         // Delete item from Firebase Realtime Database
//         await admin.database().ref(`cart/${id}`).remove();
//         dispatch({ type: types.DELETE_CART_SUCCESS });
//     } catch (error) {
//         dispatch({ type: types.DELETE_CART_FAILURE, payload: error.message });
//     }
// };

// const patchCart = async ({ quantity, id }) => async (dispatch) => {
//     dispatch({ type: types.PATCH_CART_REQUEST });
//     try {
//         // Update quantity of item in Firebase Realtime Database
//         await admin.database().ref(`cart/${id}`).update({ quantity });
//         dispatch({ type: types.PATCH_CART_SUCCESS });
//     } catch (error) {
//         dispatch({ type: types.PATCH_CART_FAILURE, payload: error.message });
//     }
// };

// export {
//     getProduct,
//     getCart,
//     postCart,
//     deleteCart,
//     getSingleProduct,
//     patchCart
// };



import axios from "axios";
import * as types from "./actionTypes";
const getProduct = (payload = 'product.json',limit='') => (dispatch) => {
    dispatch({ type: types.GET_PRODUCTS_REQUEST });
    return axios
        .get(`https://zara-9999-default-rtdb.firebaseio.com/${payload}?_limit=${limit}`)
        .then((r) => {
           return dispatch({ type: types.GET_PRODUCTS_SUCCESS, payload: r.data });
        })
        .catch((e) => {
            dispatch({ type: types.GET_PRODUCTS_FAILURE});
        })
}

const getSingleProduct = (payload) => (dispatch) => {
    dispatch({ type: types.GET_SINGLE_REQUEST });
    return axios
        .get(`https://zara-9999-default-rtdb.firebaseio.com/product/${payload}.json`)
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
