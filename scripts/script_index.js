
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
		if (user.type == 'reader') {
			dates.sesion = true;
			window.localStorage.setItem('dates', JSON.stringify(dates));
			log(true);
			create_index();
			location.reload();

		}
	}
	return user != null;
}

function create_localStore_index() {
	if (JSON.parse(window.localStorage.getItem('bdd')) == null) {
		let bdd = {
			product: [
				{ key: 0, name: 'HTML', birth: '1993', death: '', wiki: 'https://en.wikipedia.org/wiki/HTML', img: '../images/HTML_logo.png' },
			],
			entity: [
				{ key: 0, name: 'WHATWG', birth: '2004', death: '', wiki: 'https://en.wikipedia.org/wiki/WHATWG', img: '../images/WHATWG_logo.png' },
			],
			person: [
				{ key: 0, name: 'Tim Berners-Lee', birth: '1955', death: '', wiki: 'https://en.wikipedia.org/wiki/Tim_Berners-Lee', img: '../images/tim.jpg' },
			],
			relation: [
				{ pkey: 0, ekey: 0, pkey: 0 }
			]
		}
		window.localStorage.setItem('bdd', JSON.stringify(bdd));
	}
}

function create_index() {

	let entity = document.getElementById('main_index')
	let bdd = JSON.parse(window.localStorage.getItem('bdd'));

	entity.appendChild(create_container(bdd.product, 'PRODUCTOS', 'product'));
	entity.appendChild(create_container(bdd.person, 'PERSONAS', 'person'));
	entity.appendChild(create_container(bdd.entity, 'ENTIDADES', 'entity'));
}

function create_container(bdd, name_container, type_list) {
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
			type_info.appendChild(create_card(info.name, info.img, info.key, type_list,));
		}
		container_info.appendChild(type_info);
	}
	return container_info;
}

function create_card(name_info, img_src, key_info, type_list) {
	let type = document.createElement('div');
	let a = document.createElement('a');
	let img = document.createElement('img')
	let name = document.createElement('h2');
	let dates = JSON.parse(window.localStorage.getItem('dates'));

	type.className = 'type';
	if(dates.sesion == true)
	{
		a.setAttribute('onclick', 'save_details("' + String(type_list) + '","' + String(key_info) + '")');
	}
	img.className = 'img';
	img.src = img_src;
	name.textContent = name_info
	a.appendChild(img);
	type.appendChild(a);
	type.appendChild(name);

	return type;
}

function save_details(list, key) {
	let info_details = {
		type_list: list,
		key_info: key,
	}
	window.localStorage.setItem('info_details', JSON.stringify(info_details));
	window.location.href = "../html/details.html";
}

function create_details() {
	let info_details = JSON.parse(window.localStorage.getItem('info_details'));

	let bdd = get_details(info_details.type_list, info_details.key_info);

	let name_details = document.getElementById('name_details');
	let img = document.getElementById('img');

	name_details.textContent = bdd.name;
	img.src = bdd.img;
}

function get_details(list, key) {
	let bdd = JSON.parse(window.localStorage.getItem('bdd'));

	if(list == 'product'){
		for (bdd of bdd.product) {
			if (bdd.key == key) {
				return bdd;
			}
		}
	}
	if(list == 'person'){
		for (bdd of bdd.person) {
			if (bdd.key == key) {
				return bdd;
			}
		}
	}
	if(list == 'entity'){
		for (bdd of bdd.entity) {
			if (bdd.key == key) {
				return bdd;
			}
		}
	}


}
