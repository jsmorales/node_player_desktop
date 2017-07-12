/*
La instalación de electron se hizo por pacman
pacman -S electron
se arreglaron conflictos entre dependencias.
*/

//se importa el objeto electron
const electron = require("electron")
//para cargar constatntes dinamicamente
const {app, BrowserWindow} = electron

//del core de node se utiliza path y url
const path = require("path")
const url = require("url")

var manage_files = require("./manage_files")

var path_biblioteca = "/home/johan/Descargas/Metal"

var getMapaBiblioteca = require("./manage_tags.js")

function nuevaVentanaFile(width,height,path_src){
	//variable global win seguramente para la ventana?
	let win

	//crea la ventana con sus caracteristicas
	win = new BrowserWindow({
		width:width, 
		height:height
	});

	//carga un archivo en dicha ventana
	win.loadURL(url.format({
		pathname: path.join(__dirname, path_src),
		protocol: "file",
		slashes: true
	}))

	//maximiza la ventana para que quede en pantalla completa
	//win.maximize()
}


//se exporta un proceso para abrir otra ventana
exports.abrirVentana = function(){
	nuevaVentanaFile(400,200,"otra.html")
}

exports.getPathCanciones = function(){

	return manage_files.getPathsSongs(path_biblioteca);
}

exports.getArtistas = function(paths){
	return new getMapaBiblioteca(paths);
};

/*
		artistas.on('artistsLoad', function(){
			console.log("Cargando Artistas...")
		})

		artistas.on('artistsReady', function(artists) {
			console.log("los artistas son:--> ")
			console.log(artists)
			res.render('home.ejs', {"artists":artists,"lista_canciones":false});
		});*/
//---------------------------------------------


//iniciamos con app con el evento onready
app.on('ready', function() {

	nuevaVentanaFile(800,600,"index.html")
});