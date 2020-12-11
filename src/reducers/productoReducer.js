import {GET_PRODUCTOS, DELETE_PRODUCTOS} from "../actions/types";

const initialState = {
    productos: []
}

export default function(state=initialState, action){
    switch(action.type){
        case GET_PRODUCTOS:
            return{
                ...state,
                productos: action.payload
            };
        case DELETE_PRODUCTOS:
            return{
                ...state,
                productos: state.productos.filter(producto => producto.id !== action.payload)
            };
        default:
            return state;
    }
}