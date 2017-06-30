function Saludar(){
					
	alert("Hola, gracias por usar 5ntar");
}

function Saludar_a_confirmar(nombre, apellido){

	var nombreCompleto= nombre +" " + apellido;
					
	alert("Hola " + nombreCompleto);
}


function RevisarInformacion(nombre, apellido,tipoDeAcoso,edad,descripcion){

	var nombreCompleto= nombre + " " + apellido;
	var confirmar = "El nombre completo es: " + nombreCompleto 
					+ "\nLa edad es " + edad 
					+ "\nEl mail es: " +  tipoDeAcoso
					+ "\nEl mensaje es: " + descripcion;

	alert(confirmar);
}
