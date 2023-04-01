import axios from 'axios';
import * as type from '../constants/productConstant'


const URL = 'http://localhost:5000'


export const getProducts =() => async(dispatch) =>
{
    try {
       let {data} = await axios.get(`${URL}/products`);
       //console.log("response",response)
       dispatch({type:type.GET_PRODUCTS_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:type.GET_PRODUCTS_FAIL,payload:error.message})
        console.log("error while calling getProducts", error.message)
    }
}

export const getProductsDetails =(id) => async(dispatch) =>
{
    try {
      
       //console.log("response",response)
       dispatch({type:type.GET_PRODUCT_DETAILS_REQUEST})
       let {data} = await axios.get(`${URL}/product/${id}`);
       dispatch({type:type.GET_PRODUCT_DETAILS_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:type.GET_PRODUCT_DETAILS_FAIL,payload:error.message})
        console.log("error while calling getProducts", error.message)
    }
}