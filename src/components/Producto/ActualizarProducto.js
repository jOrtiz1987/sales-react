import React, { Component } from 'react'

class ActualizarProducto extends Component {
    render() {
        return (
            <div className="actualizarProducto">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <a href="/" className="btn btn-light">
                                Regresar al listado
                            </a>
                            <h4 className="display-4 text-center">Actualizar Producto</h4>
                            <form>
                                <div className="form-group">
                                    <input type="text" className="form-control form-control-lg" name="summary" placeholder="Project Task summary" />
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control form-control-lg" placeholder="Acceptance Criteria" name="acceptanceCriteria"></textarea>
                                </div>
                                <div className="form-group">
                                    <select className="form-control form-control-lg" name="status">
                                        <option value="">Select Status</option>
                                        <option value="TO_DO">TO DO</option>
                                        <option value="IN_PROGRESS">IN PROGRESS</option>
                                        <option value="DONE">DONE</option>
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

export default ActualizarProducto;