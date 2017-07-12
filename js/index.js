//esto para poder incluir archivos dentro del workspace
const remote = require("electron").remote

//para incluir el archivo main.js
//para poder usar la funcion abrirVentana que se 
//está exportando desde main.js
const main = remote.require("./main.js")

let boton = document.createElement('button');
boton.textContent = 'Abrir'


//cuando halla cargado entonces!
//para no poner el script al final
/*
window.onload = function(){

	console.log(" listo el pollo!")

	document.body.appendChild(boton)

	console.log(document)

	boton.addEventListener("click", function(){
		main.abrirVentana()
	})
}*/

$(function(){
	console.log("jquery!")

	var path_canciones = main.getPathCanciones();

	console.log(path_canciones)

	var artistas = main.getArtistas(path_canciones);

	artistas.on('artistsLoad', function(){
		console.log("Cargando Artistas...")
	})

	artistas.on('artistsReady', function(artists) {
		console.log("los artistas son:--> ")
		console.log(artists)
		//res.render('home.ejs', {"artists":artists,"lista_canciones":false});
	});
})



