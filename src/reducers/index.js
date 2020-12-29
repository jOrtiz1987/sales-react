import {combineReducers} from "redux";
import errorsReducer from "./errorsReducer";
import productoReducer from "./productoReducer";
import categoriaReducer from "./categoriaReducer";
import empresaReducer from "./empresaReducer";

export default combineReducers({
    errors: errorsReducer,
    producto: productoReducer,
    categoria: categoriaReducer,
    empresa: empresaReducer
});