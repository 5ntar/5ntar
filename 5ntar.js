


function EnviarInformacionACarto(nombre, lugar, hora, edad, tipo, descripcion){
	var valores = "%27" +nombre+"%27,%20%27"+lugar+"%27,%20%27"+hora+"%27,%20%27"+edad+",%20%27"+tipo+"%27,%20%27"+descripcion+"%27";
	var url ="https://lulitaamartin.carto.com/api/v2/sql?q=INSERT%20INTO%20table_5ntar%20(nombre,lugar,hora,edad,tipo,descripcion)VALUES("+ valores + ")&api_key=1WPttJtAhT1jXlrblvE1hg"
	//var res = encodeURI(url);
        // document.getElementById("valores").innerHTML = res;
	//alert(url);

	var xhttp = new XMLHttpRequest();
	xhttp.open("GET", url , true);
 	xhttp.send();

}


