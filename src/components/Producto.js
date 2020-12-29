import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProductoItem from './Producto/ProductoItem';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {getCategorias} from "../actions/categoriaActions"
import {getProductos} from "../actions/productoActions";
import CategoriaItem from './Categoria/CategoriaItem';
import EmpresaItem from './Empresa/EmpresaItem';
import {getEmpresas} from "../actions/empresaActions";
import Carousel from 'react-bootstrap/Carousel';

class Producto extends Component {

    componentDidMount(){
        this.props.getCategorias();
        this.props.getProductos();
        this.props.getEmpresas();
    }

    render() {
        const{categorias} = this.props.categorias;
        const{productos} = this.props.productos;
        const{empresas} = this.props.empresas;

        let listadoContent;
        let empresasItems = [];
        let categoriasItems = [];
        let jugetesItems = [];
        let electronicosItems = [];
        let otrosItems = [];

        const AlgoritmoListado = productos => {
            if(empresas.length < 1){
                return (
                    <div className="alert alert-info text-center" role="alert">
                        No hay empresas en el listado
                    </div>
                )
            }else if(categorias.length < 1){
                return (
                    <div className="alert alert-info text-center" role="alert">
                        No hay categorias en el listado
                    </div>
                )
            }else if(productos.length < 0){
                return (
                    <div className="alert alert-info text-center" role="alert">
                        No hay productos en el listado
                    </div>
                )
            }else{

                const emps = empresas.map(empresa =>(
                    <EmpresaItem key={empresa.id} empresa={empresa} />
                ))

                for(let k=0; k<emps.length; k++){
                    empresasItems.push(emps[k]);
                }

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
                                        <h3>Empresas</h3>
                                    </div>
                                </div>
                                {empresasItems}
                            </div>
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
                <Link to="/agregarEmpresa" className="btn btn-primary mb-3">
                    <i className="fas fa-plus-circle"> Crear Empresa</i>
                </Link>

                <br />
                <hr />
                <Carousel>
                    <Carousel.Item interval={10000}>
                        <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=First slide&bg=373940"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={10000}>
                        <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=Second slide&bg=282c34"
                        alt="Second slide"
                        />
                        <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={10000}>
                        <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=Third slide&bg=20232a"
                        alt="Third slide"
                        />
                        <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

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
    getEmpresas: PropTypes.func.isRequired,
    productos: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    categorias: state.categoria,
    productos: state.producto,
    empresas: state.empresa
});

export default connect(mapStateToProps, {getCategorias, getProductos, getEmpresas}) (Producto);