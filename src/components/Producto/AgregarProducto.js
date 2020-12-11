import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from "prop-types"
import {connect} from "react-redux"
import {agregarProducto} from "../../actions/productoActions"
import classnames from "classnames"

class AgregarProducto extends Component {
    constructor(){
        super();
        this.state = {
            nombre: "",
            descripcion: "",
            categoria: {
                id:"",
                descripcion:"",
                nombre:"",
                imagen: ""
            },
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
        const nuevoProducto = {
            nombre: this.state.nombre,
            descripcion: this.state.descripcion,
            categoria: this.state.categoria
        };
        //console.log(nuevoProducto);
        this.props.agregarProducto(nuevoProducto, this.props.history);
    }
    render() {
        const {errors} = this.state;
        return (
            <div className="agregarProducto">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <Link to="/" className="btn btn-light">
                                Regresar al listado
                            </Link>
                            <h4 className="display-4 text-center">Agregar Producto</h4>
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input type="text" className={classnames("form-control form-control-lg", {"is-invalid":errors.nombre})} name="nombre" value={this.state.nombre} placeholder="Nombre del producto" onChange={this.onChange}/>
                                    {errors.nombre && (
                                        <div className="invalid-feedback" > {errors.nombre} </div>
                                    )}
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control form-control-lg" placeholder="Descripcion" name="descripcion" value={this.state.descripcion} onChange={this.onChange}></textarea>
                                </div>
                                <div className="form-group">
                                    <select className="form-control form-control-lg" name="categoria" value={this.state.categoria.id} onChange={this.onChange}>
                                        <option value="">Selecciona Categoria</option>
                                        <option value="1">Juguete</option>
                                        <option value="2">Electronico</option>
                                        <option value="3">Otro</option>
                                    </select>
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

AgregarProducto.propTypes = {
    agregarProducto: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    errors: state.errors
})

export default connect(mapStateToProps, {agregarProducto}) (AgregarProducto);