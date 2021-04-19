
function main(){
	create_localStore_index();
	create_index();
	create_user();

}

function create_user(){
	let dates = JSON.parse(window.localStorage.getItem('dates'));
	if (dates == null) {
		let dates = {
			sesion: false,
			users: [
				{ key: 1, name: 'x', password: 'x', type: 'writer' },
				{ key: 2, name: 'y', password: 'y', type: 'reader' },
				{ key: 3, name: 'z', password: 'z', type: 'reader' },
			]
		}
		window.localStorage.setItem('dates', JSON.stringify(dates));
	}
	else {
		if (dates.sesion == true) {
			log(true);
		}
	}
}

function getUser(dates, name, password) {
	for (user of dates.users) {
		if (user.name == name &&
			user.password == password) {
			return user;
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

function log_out() {
	let dates = JSON.parse(window.localStorage.getItem('dates'));
	dates.sesion = false;
	window.localStorage.setItem('dates', JSON.stringify(dates));
	location.reload();
}

function validation() {
	let dates = JSON.parse(window.localStorage.getItem('dates'));
	let name = document.getElementById('name').value;
	let password = document.getElementById('password').value;
	let user = getUser(dates, name, password);
	if (user == null) {
		name.value = '';
		password.value = '';
	} else {
		if (user.type == 'writer'){
			dates.sesion = true;
			window.localStorage.setItem('dates', JSON.stringify(dates));
			log(true);
		}
	}
	return user != null;
}


function create_localStore_index() {
	if (JSON.parse(window.localStorage.getItem('bdd')) == null) {
		let bdd = {
			product: [
				{ key: 0, name: 'HTML', birth: '1993', death: '', wiki: 'https://en.wikipedia.org/wiki/HTML', img: './images/js_logo.png' },
			],
			entity: [
				{ key: 0, name: 'WHATWG', birth: '2004', death: '', wiki: 'https://en.wikipedia.org/wiki/WHATWG', img: './images/js_logo.png' },
			],
			person: [
				{ key: 0, name: 'Tim Berners-Lee', birth: '1955', death: '', wiki: 'https://en.wikipedia.org/wiki/Tim_Berners-Lee', img: './images/js_logo.png'},
			],
			relation: [
				{ pkey: 0, ekey: 0, pkey: 0 }
			]
		}
		window.localStorage.setItem('bdd', JSON.stringify(bdd));
	}
}

function create_index(){

	let entity = document.getElementById('main_index')
	let bdd = JSON.parse(window.localStorage.getItem('bdd'));

	entity.appendChild(create_container(bdd.product, 'Productos'));
	entity.appendChild(create_container(bdd.person, 'Personas'));
	entity.appendChild(create_container(bdd.entity, 'Entidades'));
}

function create_container(bdd, name_container) {
	let container_info = document.createElement('div');
	let name = document.createElement('h2');
	let type_info = document.createElement('div');

	container_info.id = 'entity';
	container_info.setAttribute('class', 'container_info');

	if (bdd) {
		name.textContent = name_container;
		container_info.appendChild(name);
		type_info.className = 'type_info';
		for (info of bdd) {
			type_info.appendChild(create_card(info.name, info.img));
		}
		container_info.appendChild(type_info);
	}
	return container_info;
}

function create_card(name_info, img_src) {
	let type = document.createElement('div');
	let a = document.createElement('a');
	let img = document.createElement('img')
	let name = document.createElement('h2');

	type.className = 'type';
	img.setAttribute('oneclick', 'alert(33)');

	//a.setAttribute('href', './html/details.html');
	img.className = 'img';
	img.src = img_src;
	name.textContent = name_info
	a.appendChild(img);
	type.appendChild(a);
	type.appendChild(name);

	return type;
}

function prueba()
{
	alert('sasas');

}

