var nombre;
var apellidos;
var fechaDeNacimiento;
var cursosDeProgramacionRealizados;

nombre = prompt("Introduce tu nombre");
apellidos = prompt("Introduce tus apellidos");
fechaDeNacimiento = prompt("Introduce tu año de nacimiento")
cursosDeProgramacionRealizados = prompt("Introduce el número de cursos de programación realizados")


cursosDeProgramacionRealizados = cursosDeProgramacionRealizados + 1

if(fechaDeNacimiento <2000){
    alert("¿Estás seguro de que eres un programador Junior?" )
}