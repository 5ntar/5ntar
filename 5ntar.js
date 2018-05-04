function Saludar(){
					
	alert("Hola, gracias por usar 5ntar");
}

function Saludar_a_confirmar(nombre, apellido){

	var nombreCompleto= nombre +" " + apellido;
					
	alert("Hola " + nombreCompleto);
}


function EnviarInformacionACarto(nombre, lugar, hora, edad, tipo, descripcion){
	var valores = "%27" +nombre+"%27,%20%27"+lugar+"%27,%20%27"+hora+"%27,%20"+edad+",%20%27"+tipo+"%27,%20%27"+descripcion+"%27";

	var url ="https://lulitaamartin.carto.com/api/v2/sql?q=INSERT%20INTO%20table_5ntar%20(nombre,%20lugar,%20hora,%20edad,%20tipo,%20descripcion)%20VALUES%20("+ valores + ")&api_key=1WPttJtAhT1jXlrblvE1hg"

	alert(url);

}

