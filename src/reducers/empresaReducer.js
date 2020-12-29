import {GET_EMPRESAS, DELETE_EMPRESAS} from "../actions/types";

const initialState = {
    empresas: []
}

export default function(state=initialState, action){
    switch(action.type){
        case GET_EMPRESAS:
            return{
                ...state,
                empresas: action.payload
            };
        case DELETE_EMPRESAS:
            return{
                ...state,
                empresas: state.empresas.filter(empresa => empresa.id !== action.payload)
            };
        default:
            return state;
    }
}