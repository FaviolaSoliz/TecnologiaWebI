//current date dynamically in the following date format: Monday, 6 April 2020

var month = new Array ("Enero","Febrero","Marzo","Abril","Mayo",
"Junio","Julio","Agosto","Septiembre","Octobre","Novimbre","Diciembre");
var dayofweek = new Array("Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado");
var d=new Date();
var dia_sem=dayofweek[d.getDay()];
var dia=d.getDay();
var mes=month[d.getMonth()];
var anio=d.getFullYear();

document.write(dia_sem+"  "+dia+"  "+mes+"del"+anio);
