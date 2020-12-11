import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProductoItem from './Producto/ProductoItem';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {getCategorias} from "../actions/categoriaActions"
import {getProductos} from "../actions/productoActions";
import CategoriaItem from './Categoria/CategoriaItem';

class Producto extends Component {

    componentDidMount(){
        this.props.getCategorias();
        this.props.getProductos();
    }

    render() {
        const{categorias} = this.props.categorias;
        const{productos} = this.props.productos;

        let listadoContent;
        let categoriasItems = [];
        let jugetesItems = [];
        let electronicosItems = [];
        let otrosItems = [];

        const AlgoritmoListado = productos => {
            if(categorias.length < 1){
                return (
                    <div className="alert alert-info text-center" role="alert">
                        No hay categorias en el listado
                    </div>
                )
            }
            else if(productos.length < 0){
                return (
                    <div className="alert alert-info text-center" role="alert">
                        No hay productos en el listado
                    </div>
                )
            }else{
                const cats = categorias.map(categoria =>(
                    <CategoriaItem key={categoria.id} categoria={categoria} />
                ))
                
                for(let j=0; j<cats.length; j++){
                    categoriasItems.push(cats[j]);
                }

                const prods = productos.map(producto => (
                    <ProductoItem key={producto.id} producto={producto} />
                ))

                for(let i=0; i<prods.length; i++){
                    if(prods[i].props.producto.categoria.id === 1){
                        jugetesItems.push(prods[i]);
                    }
                    else if(prods[i].props.producto.categoria.id === 2){
                        electronicosItems.push(prods[i]);  
                    }
                    else{
                        otrosItems.push(prods[i]);
                    }
                }
            }

            return(
                <React.Fragment>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="card text-center mb-2">
                                    <div className="card-header bg-secondary text-white">
                                        <h3>Categorias</h3>
                                    </div>
                                </div>
                                {categoriasItems}
                            </div>
                            <div className="col-md-4">
                                <div className="card text-center mb-2">
                                    <div className="card-header bg-secondary text-white">
                                        <h3>Jugetes</h3>
                                    </div>
                                </div>
                                {jugetesItems}
                            </div>
                            <div className="col-md-4">
                                <div className="card text-center mb-2">
                                    <div className="card-header bg-primary text-white">
                                        <h3>Electronicos</h3>
                                    </div>
                                </div>
                                {electronicosItems}
                            </div>
                            <div className="col-md-4">
                                <div className="card text-center mb-2">
                                    <div className="card-header bg-success text-white">
                                        <h3>Otros</h3>
                                    </div>
                                </div>
                                {otrosItems}
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            )
        };

        listadoContent = AlgoritmoListado(productos);

        return (
            <div className="container">
                <Link to="/agregarProducto" className="btn btn-primary mb-3">
                    <i className="fas fa-plus-circle"> Crear Producto</i>
                </Link>
                <br />
                <hr />
                <Link to="/agregarCategoria" className="btn btn-primary mb-3">
                    <i className="fas fa-plus-circle"> Crear Categoria</i>
                </Link>
                <br />
                <hr />
                {listadoContent}
            </div>
        )
    }
}

Producto.propTypes = {
    getCategorias: PropTypes.func.isRequired,
    getProductos: PropTypes.func.isRequired,
    productos: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    categorias: state.categoria,
    productos: state.producto
});

export default connect(mapStateToProps, {getCategorias, getProductos}) (Producto);