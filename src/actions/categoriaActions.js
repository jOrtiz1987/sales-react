import axios from "axios";
import { GET_ERRORS, GET_CATEGORIAS, DELETE_CATEGORIAS } from "./types";

export const agregarCategoria = (categoria, history) => async dispatch => {
    try{
        await axios.post("http://localhost:8080/api/categoria", categoria);
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

export const getCategorias = () => async dispatch => {
    const res = await axios.get("http://localhost:8080/api/categoria/all");
    dispatch({
        type:GET_CATEGORIAS,
        payload:res.data
    });
};

export const deleteCategoria = ct_id => async dispatch => {
    if(window.confirm(`¿Esta seguro que desea eliminar este categoria ${ct_id}?, esta accion no se puede deshacer`)){
        await axios.delete(`http://localhost:8080/api/categoria/${ct_id}`);
        dispatch({
            type:DELETE_CATEGORIAS,
            payload:ct_id
        });
    }
    
};