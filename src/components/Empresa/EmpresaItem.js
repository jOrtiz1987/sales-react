import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {deleteEmpresa} from "../../actions/empresaActions";

class EmpresaItem extends Component {

    onDeleteClick(ep_id){
        this.props.deleteEmpresa(ep_id);
    }

    render() {
        const { empresa } = this.props;
        return (
            <div className="card mb-1 bg-light">

                <div className="card-header text-primary">
                    ID: {empresa.id}
                </div>
                <div className="card-body bg-light">
                    <h5 className="card-title">{empresa.nombre}</h5>
                    <a href="" className="btn btn-primary">
                        Ver / Actualizar
                    </a>

                    <button className="btn btn-danger ml-4" onClick={this.onDeleteClick.bind(this, empresa.id)}>
                        Eliminar
                    </button>
                </div>
            </div>
        )
    }
}

EmpresaItem.propTypes = {
    deleteEmpresa: PropTypes.func.isRequired
};

export default connect(null, {deleteEmpresa}) (EmpresaItem);