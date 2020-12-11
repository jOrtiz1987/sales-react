import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {deleteProducto} from "../../actions/productoActions";

class ProductoItem extends Component {

    onDeleteClick(pt_id){
        this.props.deleteProducto(pt_id);
    }

    render() {
        const { producto } = this.props;
        return (
            <div className="card mb-1 bg-light">

                <div className="card-header text-primary">
                    ID: {producto.id}
                </div>
                <div className="card-body bg-light">
                    <h5 className="card-title">{producto.nombre}</h5>
                    <p className="card-text text-truncate ">
                    {producto.descripcion}
                    </p>
                    <a href="" className="btn btn-primary">
                        Ver / Actualizar
                    </a>

                    <button className="btn btn-danger ml-4" onClick={this.onDeleteClick.bind(this, producto.id)}>
                        Eliminar
                    </button>
                </div>
            </div>
        )
    }
}

ProductoItem.propTypes = {
    deleteProducto: PropTypes.func.isRequired
};

export default connect(null, {deleteProducto}) (ProductoItem);