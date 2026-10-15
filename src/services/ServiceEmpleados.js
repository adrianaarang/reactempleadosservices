import axios from 'axios'
import Global from '../Global'

export default class ServiceEmpleados {
    getOficios() {
        return new Promise(function (resolve, reject) {
            let url = Global.urlApiEmpleados;
            let request = "api/Empleados/oficios";
            axios.get(url + request)
                .then((response) => {
                    console.log("Leyendo oficios");
                    resolve(response.data);
                })
                .catch((error) => reject(error))
        })
    }

    getEmpleados() {
        return new Promise(function (resolve, reject) {
            let url = Global.urlApiEmpleados;
            let request = "api/Empleados";
            axios.get(url + request)
                .then((response) => {
                    console.log("Leyendo empleados");
                    resolve(response.data);
                })
                .catch((error) => reject(error))
        })
    }

    getEmpleadosOficio(oficio) {
        return new Promise(function (resolve, reject) {
            let url = Global.urlApiEmpleados;
            let request = "api/Empleados/EmpleadosOficio/" + oficio;
            axios.get(url + request)
                .then((response) => {
                    console.log("Leyendo empleados de " + oficio);
                    resolve(response.data);
                })
                .catch((error) => reject(error))
        })
    }
}