import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from "prop-types"
import {connect} from "react-redux"
import {agregarEmpresa} from "../../actions/empresaActions"
import classnames from "classnames"

class AgregarEmpresa extends Component {
    constructor(){
        super();
        this.state = {
            nombre: "",
            errors:{}
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.errors){
            this.setState({errors:nextProps.errors});
        }
    }
    onChange(e){
        this.setState({[e.target.name]:e.target.value})
    }
    onSubmit(e){
        e.preventDefault()
        const nuevaEmpresa = {
            nombre: this.state.nombre
        };
        this.props.agregarEmpresa(nuevaEmpresa, this.props.history);
    }
    render() {
        const {errors} = this.state;
        return (
            <div className="agregarEmpresa">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <Link to="/" className="btn btn-light">
                                Regresar al listado
                            </Link>
                            <h4 className="display-4 text-center">Agregar Empresa</h4>
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input type="text" className={classnames("form-control form-control-lg", {"is-invalid":errors.nombre})} name="nombre" value={this.state.nombre} placeholder="Nombre de empresa" onChange={this.onChange}/>
                                    {errors.nombre && (
                                        <div className="invalid-feedback" > {errors.nombre} </div>
                                    )}
                                </div>
                                <input type="submit" className="btn btn-primary btn-block mt-4" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

AgregarEmpresa.propTypes = {
    agregarEmpresa: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    errors: state.errors
})

export default connect(mapStateToProps, {agregarEmpresa}) (AgregarEmpresa);