



function cargar() {
	let datos = JSON.parse(window.localStorage.getItem("datos"));
	if(datos == null)
	{
	let datos = {
		sesion: false,
		usuarios: [
			{ clave: 1, nombre: "x", contraseña: "x", tipo: "maestro" },
			{ clave: 2, nombre: "y", contraseña: "y", tipo: "aprendiz" },
			{ clave: 3, nombre: "z", contraseña: "z", tipo: "aprendiz" },
		]
		
	}

	window.localStorage.setItem("datos", JSON.stringify(datos));
	}
	else{
		let datos = JSON.parse(window.localStorage.getItem("datos"));
		if(datos.sesion == true)
		{
			log(true);
		}
	}
}
function create_localStore()
{
	
	let bdd = {
		product : [
			{ key: 0, name: "HTML", birth: "1993", death: "" ,wiki:"https://en.wikipedia.org/wiki/HTML"},
		],
		entity:[
			{ key: 0, name: "WHATWG", birth: "2004", death: "" ,wiki:"https://en.wikipedia.org/wiki/WHATWG"},
		],
		person: [
			{ key: 0, name: "Tim Berners-Lee", birth: "1955", death: "" ,wiki:"https://en.wikipedia.org/wiki/Tim_Berners-Lee"},
		],
		relation : [
			{pkey:0 ,ekey: 0,pkey: 0}
		]

	}
}

function getUsuario(datos, nombre, contraseña) {
	for (usuario of datos.usuarios) {
		if (usuario.nombre == nombre &&
			usuario.contraseña == contraseña) {
			return usuario;
		}
	}
	return null;
}

function log(int) {
	if (int == true) {
		let log = document.getElementById('log')
		let log_in = document.getElementById('log_in');
		let log_out = document.createElement('button');
		log_out.id = 'log_out';
		log_out.textContent = 'Log Out';
		log_out.setAttribute('class', 'btn_log');
		log_out.setAttribute('onclick', 'log_out()');
		log.replaceChild(log_out, log_in)
	}
}



function log_out()
{
	let datos = JSON.parse(window.localStorage.getItem("datos"));
	datos.sesion = false;
	window.localStorage.setItem("datos", JSON.stringify(datos));
	location.reload();
}

function validacion() {
	let datos = JSON.parse(window.localStorage.getItem("datos"));
	let nombre = document.getElementById("name").value;
	let contraseña = document.getElementById("password").value;
	let usuario = getUsuario(datos, nombre, contraseña);
	if (usuario == null) {
		nombre.value = "";
		contraseña.value = "";
		login.action = "./login.html";
	} else {
		window.localStorage.setItem("usuarioRegistrado", JSON.stringify(usuario));
		if (usuario.tipo == "maestro") {
			
			datos.sesion = true;
			window.localStorage.setItem("datos", JSON.stringify(datos));
			log(true);
		} else {
			prueba();
		}
	}
	return usuario != null;
}
function esconder(){
	
	
}


function outterFunction() {
	console.log(3);
}
$(document).ready(function () {
	$(".menu_toggle").on("click", function () {
		if ($(".menu_item").hasClass("active"))
			$(".menu_item").removeClass("active");
		else
			$(".menu_item").addClass("active");
	});

	$("main").click(function () {
		if ($(".menu_item").hasClass("active"))
			$(".menu_item").removeClass("active");

	});
	$("footer").click(function () {
		if ($(".menu_item").hasClass("active"))
			$(".menu_item").removeClass("active");

	});

	$(window).scroll(function () {
		$(".nav_p").removeClass("menu");
	});
});
