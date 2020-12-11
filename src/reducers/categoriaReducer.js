import {GET_CATEGORIAS, DELETE_CATEGORIAS} from "../actions/types";

const initialState = {
    categorias: []
}

export default function(state=initialState, action){
    switch(action.type){
        case GET_CATEGORIAS:
            return{
                ...state,
                categorias: action.payload
            };
        case DELETE_CATEGORIAS:
            return{
                ...state,
                categorias: state.categorias.filter(categoria => categoria.id !== action.payload)
            };
        default:
            return state;
    }
}