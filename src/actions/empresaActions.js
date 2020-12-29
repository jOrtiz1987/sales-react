import axios from "axios";
import { GET_ERRORS, GET_EMPRESAS, DELETE_EMPRESAS } from "./types";

export const agregarEmpresa = (empresa, history) => async dispatch => {
    try{
        await axios.post("http://localhost:8080/api/empresa", empresa);
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

export const getEmpresas = () => async dispatch => {
    const res = await axios.get("http://localhost:8080/api/empresa/all");
    dispatch({
        type:GET_EMPRESAS,
        payload:res.data
    });
};

export const deleteEmpresa = ep_id => async dispatch => {
    if(window.confirm(`¿Esta seguro que desea eliminar esta empresa ${ep_id}?, esta accion no se puede deshacer`)){
        await axios.delete(`http://localhost:8080/api/empresa/${ep_id}`);
        dispatch({
            type:DELETE_EMPRESAS,
            payload:ep_id
        });
    }
    
};