import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import ServiceEmpleados from '../services/ServiceEmpleados'

export default class MenuComponent extends Component {
    service = new ServiceEmpleados();

    state = {
        oficios: []
    }

    loadOficios = () => {
        this.service.getOficios().then((result) => {
            this.setState({
                oficios: result
            })
        })
    }

    componentDidMount = () => {
        this.loadOficios();
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">Empleados</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarEmpleados" aria-controls="navbarEmpleados"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarEmpleados">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="dropdownOficios"
                                    role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Oficios
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="dropdownOficios">
                                    {
                                        this.state.oficios.map((oficio) => (
                                            <li key={oficio}>
                                                <NavLink className="dropdown-item" to={"/empleados/" + oficio}>
                                                    {oficio}
                                                </NavLink>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}