import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {deleteCategoria} from "../../actions/categoriaActions";

class CategoriaItem extends Component {

    onDeleteClick(ct_id){
        this.props.deleteCategoria(ct_id);
    }

    render() {
        const { categoria } = this.props;
        return (
            <div className="card mb-1 bg-light">

                <div className="card-header text-primary">
                    ID: {categoria.id}
                </div>
                <div className="card-body bg-light">
                    <h5 className="card-title">{categoria.nombre}</h5>
                    <p className="card-text text-truncate ">
                    {categoria.descripcion}
                    </p>
                    <a href="" className="btn btn-primary">
                        Ver / Actualizar
                    </a>

                    <button className="btn btn-danger ml-4" onClick={this.onDeleteClick.bind(this, categoria.id)}>
                        Eliminar
                    </button>
                </div>
            </div>
        )
    }
}

CategoriaItem.propTypes = {
    deleteCategoria: PropTypes.func.isRequired
};

export default connect(null, {deleteCategoria}) (CategoriaItem);