import React, { Component } from 'react'
import ServiceEmpleados from '../services/ServiceEmpleados'
export default class EmpleadosOficioComponent extends Component {
    service = new ServiceEmpleados();

    state = {
        empleados: [],
        status: false
    }

    loadEmpleados = () => {
        this.service.getEmpleadosOficio(this.props.oficio).then((result) => {
            this.setState({
                empleados: result,
                status: true
            })
        })
    }

    componentDidMount = () => {
        this.loadEmpleados();
    }

    componentDidUpdate = (oldProps) => {
        if (oldProps.oficio !== this.props.oficio) {
            this.loadEmpleados();
        }
    }

    render() {
        return (
            <div className="container mt-4">
                <h1>Empleados: {this.props.oficio}</h1>
                {!this.state.status ? (
                    <p>Cargando empleados...</p>
                ) : (
                    <table className="table table-info table-hover">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Apellido</th>
                                <th>Salario</th>
                                <th>Departamento</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.empleados.map((empleado) => (
                                <tr key={empleado.idEmpleado}>
                                    <td>{empleado.idEmpleado}</td>
                                    <td>{empleado.apellido}</td>
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