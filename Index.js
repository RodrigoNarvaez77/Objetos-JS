function capturar(){

    function Persona(nombre,apellido,edad,genero,nivel_educacional){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.genero = genero;
        this.nivel_educacional = nivel_educacional;

    }
    const nombreCapturar = document.getElementById("nombre").value;
    const apellidoCapturar = document.getElementById("apellido").value;
    const edadCapturar = document.getElementById("edad").value;
    const generoCapturar = document.querySelector('input[name="genero"]:checked').value;
    const niveleducacionalCapturar = document.getElementById("nivel_educacional").value;
    //alert(niveleducacionalCapturar);

    nuevaPersona = new Persona(nombreCapturar,apellidoCapturar,edadCapturar,generoCapturar,niveleducacionalCapturar);//variable global
    agregar()
}
    function agregar(){
        document.getElementById("tabla").innerHTML += '<tbody><td>'+nuevaPersona.nombre+'</td><td>'+nuevaPersona.apellido+'</td><td>'+nuevaPersona.edad+'</td><td>'+nuevaPersona.genero+'</td><td>'+nuevaPersona.nivel_educacional+'</td></tbody>';
    };

document.getElementById("boton").addEventListener("click",capturar);