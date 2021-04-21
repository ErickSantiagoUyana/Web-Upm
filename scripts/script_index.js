
function main() {
	create_localStore_user();
	create_localStore_index();
	create_index();

}

function create_localStore_user() {
	let dates = JSON.parse(window.localStorage.getItem('dates'));
	if (dates == null) {
		let dates = {
			sesion: false,
			users: [
				{ key: 1, name: 'x', password: 'x', type: 'writer' },
				{ key: 2, name: 'y', password: 'y', type: 'writer' },
				{ key: 3, name: 'z', password: 'z', type: 'writer' },
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
		if (user.type == 'writer') {
			dates.sesion = true;
			window.localStorage.setItem('dates', JSON.stringify(dates));
			log(true);

			location.reload();
		}
	}
	return user != null;
}

function create_localStore_index() {
	if (JSON.parse(window.localStorage.getItem('bdd')) == null) {
		let bdd = {
			product: [
				{ key: 0, key_e: 0, key_person: 0, name: 'HTML', birth: '1993', death: '', wiki: 'https://en.wikipedia.org/wiki/HTML', img: '../images/HTML_logo.png' },
			],
			entity: [
				{ key: 0, key_person: 0, name: 'WHATWG', birth: '2004', death: '', wiki: 'https://en.wikipedia.org/wiki/WHATWG', img: '../images/WHATWG_logo.png' },
			],
			person: [
				{ key: 0, name: 'Tim Berners-Lee', birth: '1955', death: '', wiki: 'https://en.wikipedia.org/wiki/Tim_Berners-Lee', img: '../images/tim.jpg' },
				{ key: 1, name: 'Vannevar Bush', birth: '1890', death: '1974', wiki: 'https://en.wikipedia.org/wiki/Vannevar_Bush', img: '../images/v_bush.jpg' },
			],
		}
		window.localStorage.setItem('bdd', JSON.stringify(bdd));
	}
}

function create_index() {

	let entity = document.getElementById('main_index')
	let bdd = JSON.parse(window.localStorage.getItem('bdd'));
	let dates = JSON.parse(window.localStorage.getItem('dates'));

	entity.appendChild(create_container(bdd.product, 'PRODUCTOS', 'product', dates.sesion));
	entity.appendChild(create_container(bdd.person, 'PERSONAS', 'person', dates.sesion));
	entity.appendChild(create_container(bdd.entity, 'ENTIDADES', 'entity', dates.sesion));
}

function create_container(bdd, name_container, type_list, sesion) {
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
			type_info.appendChild(create_card(info.name, info.img, info.key, type_list, sesion));
		}
		if (sesion == true) {
			let type = document.createElement('div');
			let a = document.createElement('a');
			let img = document.createElement('img')
			let name = document.createElement('h2');
			type.className = 'type';
			img.className = 'img';
			a.setAttribute('onclick', 'add_info("' + String(type_list) + '")');
			img.src = '../images/create.png';
			name.textContent = 'AÑADIR'
			a.appendChild(img);
			type.appendChild(a);
			type.appendChild(name);
			type_info.appendChild(type)
		}
		container_info.appendChild(type_info);
	}
	return container_info;
}

function add_info(tyle_list) {

	let list = tyle_list;
	window.localStorage.setItem('list', JSON.stringify(list));
	window.location.href = "./form.html";
}

function create_add() {
	let bdd = JSON.parse(window.localStorage.getItem('bdd'));
	let list = JSON.parse(window.localStorage.getItem('list'));

	let form_name = document.getElementById('form_name').value;
	let form_birth = document.getElementById('form_birth').value;
	let form_death = document.getElementById('form_death').value;
	let form_url = document.getElementById('form_url').value;
	let form_wiki = document.getElementById('form_wiki').value;


	if (list == 'product') {
		let a = bdd.product.length;
		let new_date = { key: a, name: form_name, birth: form_birth, death: form_death, wiki: form_wiki, img: form_url };
		bdd.product.push(new_date)
	}
	if (list == 'person') {
		let a = bdd.person.length;
		let new_date = { key: a, name: form_name, birth: form_birth, death: form_death, wiki: form_wiki, img: form_url };
		bdd.person.push(new_date)
	}
	if (list == 'entity') {
		let a = bdd.entity.length;
		let new_date = { key: a, name: form_name, birth: form_birth, death: form_death, wiki: form_wiki, img: form_url };
		bdd.entity.push(new_date)
	}
	location.reload();
	window.localStorage.setItem('bdd', JSON.stringify(bdd));
	alert('AÑADIDO CORRECTAMENTE');
	window.history.back();
}

function create_card(name_info, img_src, key_info, type_list, sesion) {
	let type = document.createElement('div');
	let a = document.createElement('a');
	let img = document.createElement('img')
	let name = document.createElement('h2');
	let button = document.createElement('button');
	let aux = document.createElement('a');
	a.className = 'link'
	type.className = 'type';
	img.className = 'img';
	a.setAttribute('onclick', 'save_details("' + String(type_list) + '","' + String(key_info) + '")');

	if (img_src == '')
		img.src = '../images/empy.png';
	else
		img.src = img_src;
	name.textContent = name_info;

	a.appendChild(img);
	type.appendChild(a);
	aux.setAttribute('onclick', 'save_details("' + String(type_list) + '","' + String(key_info) + '")');
	aux.appendChild(name);
	type.appendChild(aux);
	if (sesion == true) {
		button.textContent = 'Delete';
		button.setAttribute('onclick', 'confirm_delete("' + String(type_list) + '","' + String(key_info) + '")')
		type.appendChild(button);
	}
	return type;
}

function confirm_delete(list, key) {

	let mensaje = confirm("¿Seguro que deseas borrarlo?");
	if (mensaje) {
		alert("Aceptado!");
		delete_card(list, key)
	}
	else {
		alert("Cancelado");
	}
}


function delete_card(list, key) {

	let bdd = JSON.parse(window.localStorage.getItem('bdd'));

	if (list == 'product') {
		let aux = bdd.product.indexOf(key);
		bdd.product.splice(aux, 1)
	}
	if (list == 'person') {
		let aux = bdd.person.indexOf(key);
		bdd.person.splice(aux, 1)
	}
	if (list == 'entity') {
		let aux = bdd.entity.indexOf(key);
		bdd.entity.splice(aux, 1)
	}

	window.localStorage.setItem('bdd', JSON.stringify(bdd));
	location.reload();
}

function save_details(list, key) {
	let info_details = {
		type_list: list,
		key_info: key,
	}
	window.localStorage.setItem('info_details', JSON.stringify(info_details));
	window.location.href = "./details.html";
}



function create_details() {
	let info_details = JSON.parse(window.localStorage.getItem('info_details'));
	let bdd = get_details(info_details.type_list, info_details.key_info);
	let name_details = document.getElementById('name_details');
	let img = document.getElementById('img');
	let birth = document.getElementById('birth');
	let death = document.getElementById('death');
	let wiki = document.getElementById('wiki');

	birth.textContent = 'Fecha de nacimiento: ' + bdd.birth;
	death.textContent = 'Fecha de muerte: ' + bdd.death;
	wiki.textContent = 'Wiki: ' + bdd.wiki;
	name_details.textContent = bdd.name;
	img.src = bdd.img;

}


function get_details(list, key) {
	let bdd = JSON.parse(window.localStorage.getItem('bdd'));

	if (list == 'product') {
		for (bdd of bdd.product) {
			if (bdd.key == key)
				return bdd;
		}
	}
	if (list == 'person') {
		for (bdd of bdd.person) {
			if (bdd.key == key)
				return bdd;
		}
	}
	if (list == 'entity') {
		for (bdd of bdd.entity) {
			if (bdd.key == key)
				return bdd;
		}
	}
}
