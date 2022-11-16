// las funciones internamente tambien son objetos.
// callbacks

// escribo una funcion que reciba como parametro un callback, ese callback puede tener o no algun parametro, si lo tiene hará algo con eso si no solo ejecutara lo que tiene de codigo ejemplo 

// newDate da la hora en formato GTM y con el metodo ToDateString() resume a dia mes año

// entonce los callback funciones que se pasan como parametro a otras funciones.

// promesas / promise

const dividir  = (params1, params2) =>{
return new Promise((res , rej) => {
    params1 === 0 || params2 === 0 ? rej(console.log('error')) : res(console.log(params1 / params2))
})
}
dividir(1, 1)   
.then() // ===> el then() siemrpe resuelve la promesa, siempre si sale bien cae el en .then()
.catch(err => {return err}) // ==> el catch() ejecuta el error que se prefijó de antemano en el cuerpo de la promesa, de manera que si hay un error caerá en el .catch() y se ejecutará el error 
