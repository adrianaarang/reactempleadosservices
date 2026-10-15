import React, { Component } from 'react'
import ServiceEmpleados from '../services/ServiceEmpleados'

export default class HomeComponent extends Component {
    service = new ServiceEmpleados();

    state = {
        empleados: [],
        status: false
    }

    loadEmpleados = () => {
        this.service.getEmpleados().then((result) => {
            this.setState({
                empleados: result,
                status: true
            })
        })
    }

    componentDidMount = () => {
        this.loadEmpleados();
    }

    render() {
        return (
            <div className="container mt-4">
                <h1>Todos los empleados</h1>
                {!this.state.status ? (
                    <p>Cargando empleados...</p>
                ) : (
                    <table className="table table-striped table-hover">
                        <thead className="table-dark">
                            <tr>
                                <th>Id</th>
                                <th>Apellido</th>
                                <th>Oficio</th>
                                <th>Salario</th>
                                <th>Departamento</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.empleados.map((empleado) => (
                                <tr key={empleado.idEmpleado}>
                                    <td>{empleado.idEmpleado}</td>
                                    <td>{empleado.apellido}</td>
                                    <td>{empleado.oficio}</td>
                                    <td>{empleado.salario}</td>
                                    <td>{empleado.departamento}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        )
    }
}