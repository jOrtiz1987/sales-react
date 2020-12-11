import {combineReducers} from "redux";
import errorsReducer from "./errorsReducer";
import productoReducer from "./productoReducer";
import categoriaReducer from "./categoriaReducer";

export default combineReducers({
    errors: errorsReducer,
    producto: productoReducer,
    categoria: categoriaReducer
});