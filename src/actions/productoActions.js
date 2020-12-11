import axios from "axios";
import { GET_ERRORS, GET_PRODUCTOS, DELETE_PRODUCTOS } from "./types";

export const agregarProducto = (producto, history) => async dispatch => {
    try{
        await axios.post("http://localhost:8080/api/producto", producto);
        history.push("/");
        dispatch({
            type:GET_ERRORS,
            payload:{}
        });
    } catch (error){
        dispatch({
            type:GET_ERRORS,
            payload:error.response.data
        });
    }
    
};

export const getProductos = () => async dispatch => {
    const res = await axios.get("http://localhost:8080/api/producto/all");
    dispatch({
        type:GET_PRODUCTOS,
        payload:res.data
    });
};

export const deleteProducto = pt_id => async dispatch => {
    if(window.confirm(`¿Esta seguro que desea eliminar este producto ${pt_id}?, esta accion no se puede deshacer`)){
        await axios.delete(`http://localhost:8080/api/producto/${pt_id}`);
        dispatch({
            type:DELETE_PRODUCTOS,
            payload:pt_id
        });
    }
    
};