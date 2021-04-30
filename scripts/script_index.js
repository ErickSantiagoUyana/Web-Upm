function main() {
	create_localStore_user();
	create_localStore_bdd();
	create_index();
	localStorage.removeItem('info_details');
	localStorage.removeItem('list');
	localStorage.removeItem('new_entity');

}

function create_localStore_user() {
	let dates = JSON.parse(window.localStorage.getItem('dates'));
	if (dates == null) {
		let dates = {
			sesion: false,
			users: [
				{ key: 1, name: 'x', password: 'x' },
				{ key: 2, name: 'y', password: 'y' },
				{ key: 3, name: 'z', password: 'z' },
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
		dates.sesion = true;
		window.localStorage.setItem('dates', JSON.stringify(dates));
		log(true);
		location.reload();
	}
	return user != null;
}

function create_localStore_bdd() {
	if (JSON.parse(window.localStorage.getItem('bdd')) == null) {
		let bdd = {
			product: [
				{ key: 1, name: 'HTML', birth: '1993', death: '', wiki: 'https://en.wikipedia.org/wiki/HTML', img: '../images/HTML_logo.png', entity: [1], person: [1] },
				{ key: 2, name: 'iPhone', birth: '2007', death: '', wiki: 'https://en.wikipedia.org/wiki/IPhone', img: 'https://i.blogs.es/abe23f/650_1000_iphone_2-1/1366_2000.jpg', entity: [2], person: [3] },

			],
			entity: [
				{ key: 1, name: 'WHATWG', birth: '2004', death: '', wiki: 'https://en.wikipedia.org/wiki/WHATWG', img: '../images/WHATWG_logo.png', person: [1, 2] },
				{ key: 2, name: 'AppleInc', birth: '1976', death: '', wiki: 'https://en.wikipedia.org/wiki/Apple_Inc.', img: 'https://i.blogs.es/5c509d/appleinc/1366_2000.jpg', person: [3] },

			],
			person: [
				{ key: 1, name: 'Tim Berners-Lee', birth: '1955', death: '', wiki: 'https://en.wikipedia.org/wiki/Tim_Berners-Lee', img: '../images/tim.jpg' },
				{ key: 2, name: 'Vannevar Bush', birth: '1890', death: '1974', wiki: 'https://en.wikipedia.org/wiki/Vannevar_Bush', img: '../images/v_bush.jpg' },
				{ key: 3, name: 'Steve Jobs', birth: '1955', death: '2011', wiki: 'https://en.wikipedia.org/wiki/Steve_Jobs', img: 'https://imagessl1.casadellibro.com/a/l/t7/81/9788499921181.jpg' },
			],
			number_product: 2,
			number_entity: 2,
			number_person: 3,
		}
		window.localStorage.setItem('bdd', JSON.stringify(bdd));
	}
}
////////////////////                              INDEX                              //////////////////////////

function create_index() {

	let main_index = document.getElementById('main_index')
	let bdd = JSON.parse(window.localStorage.getItem('bdd'));
	let dates = JSON.parse(window.localStorage.getItem('dates'));

	main_index.appendChild(create_container(bdd.person, 'PERSONAS', 'person', dates.sesion));
	main_index.appendChild(create_container(bdd.product, 'PRODUCTOS', 'product', dates.sesion));
	main_index.appendChild(create_container(bdd.entity, 'ENTIDADES', 'entity', dates.sesion));
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
			type_info.appendChild(create_card(info, type_list, sesion));
		}
		if (sesion == true) {
			let type = document.createElement('div');
			let a = document.createElement('a');
			let img = document.createElement('img')
			let name = document.createElement('h2');
			type.className = 'type';
			img.className = 'img';
			a.setAttribute('onclick', 'create_form("create","' + String(type_list) + '")');
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

function create_card(info, type_list, sesion) {
	let type = document.createElement('div');
	let a = document.createElement('a');
	let img = document.createElement('img')
	let name = document.createElement('h2');
	let button = document.createElement('button');
	let aux = document.createElement('a');
	a.className = 'link'
	type.className = 'type';
	img.className = 'img';
	a.setAttribute('onclick', 'save_details("' + String(type_list) + '","' + String(info.key) + '")');

	if (info.img == '')
		img.src = '../images/empy.png';
	else
		img.src = info.img;
	name.textContent = info.name;

	a.appendChild(img);
	type.appendChild(a);
	aux.setAttribute('onclick', 'save_details("' + String(type_list) + '","' + String(info.key) + '")');
	aux.appendChild(name);
	type.appendChild(aux);
	if (sesion == true) {
		button.textContent = 'Delete';
		button.setAttribute('onclick', 'confirm_delete("' + String(type_list) + '","' + String(info.key) + '")')
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
	let aux = JSON.parse(window.localStorage.getItem('bdd'));
	let i = 0;

	for (aux of aux[list]) {
		if (aux.key == key) {
			bdd[list].splice(i, 1);
			console.log(bdd['product'][1]);
			window.localStorage.setItem('bdd', JSON.stringify(bdd));
			delete_relation(list, key);

			break;
		}
		i++;
	}

	//window.localStorage.setItem('bdd', JSON.stringify(bdd));
	location.reload();
}

function delete_relation(list, key) {
	let bdd = JSON.parse(window.localStorage.getItem('bdd'));
	let i = 0;
	let aux = 0;

	if (list == 'person') {

		for (i = 0; i < bdd.entity.length; i++) {
			aux = bdd.entity[i].person.indexOf(parseInt(key));
			if ((aux != -1)) {
				bdd.entity[i].person.splice(aux, 1);
			}
		}
		i = 0;
		for (i = 0; i < bdd.product.length; i++) {
			aux = bdd.product[i].person.indexOf(parseInt(key));
			if ((aux != -1)) {
				bdd.product[i].person.splice(aux, 1);
			}
		}
	}

	if (list == 'entity') {
		for (i = 0; i < bdd.product.length; i++) {
			aux = bdd.product[i].entity.indexOf(parseInt(key));
			if ((aux != -1)) {
				bdd.product[i].entity.splice(aux, 1);
			}
		}
	}

	window.localStorage.setItem('bdd', JSON.stringify(bdd));
}

////////////////////                              FORM                              //////////////////////////

function create_form(type_form, info) {


	if (type_form == 'create') {
		let list = [type_form, info]
		let bdd = JSON.parse(window.localStorage.getItem('bdd'));
		let new_entity = 0;
		if (info == 'person')
			new_entity = { key: bdd.number_person + 1, name: ' ', birth: '', death: '', wiki: '', img: '' };
		if (info == 'entity')
			new_entity = { key: bdd.number_entity + 1, name: ' ', birth: '', death: '', wiki: '', img: '', person: [] };
		if (info == 'product')
			new_entity = { key: bdd.number_product + 1, name: ' ', birth: '', death: '', wiki: '', img: '', entity: [], person: [] };


		window.localStorage.setItem('new_entity', JSON.stringify(new_entity));

		window.localStorage.setItem('list', JSON.stringify(list));
	}
	else {
		let list = [type_form, info]
		window.localStorage.setItem('list', JSON.stringify(list));
	}

	window.location.href = "./form.html";
}

function edit_info() {
	let list = JSON.parse(window.localStorage.getItem('list'));
	let form = document.getElementById('form_id');
	let button = document.getElementById('button_form');
	let name_details = document.getElementById('name_details');

	if (list[1] == 'person') {
		button.setAttribute('onclick', 'create_edit_dates_person();');

		if (list[0] == 'edit') {
			name_details.textContent = 'MODIFICAR PERSONA';
			button.textContent = 'MODIFICAR'
			let info_details = JSON.parse(window.localStorage.getItem('info_details'));
			let info = get_details(info_details.type_list, info_details.key_info);
			edit_form_person(info);
		}
		else {
			let new_entity = JSON.parse(window.localStorage.getItem('new_entity'));
			name_details.textContent = 'AÑADIR PERSONA';
			button.textContent = 'AÑADIR';
			edit_form_person(new_entity);
		}

	}

	if (list[1] == 'product') {
		button.setAttribute('onclick', 'create_edit_dates_product();');

		let list_person = document.getElementById('list_person');
		let list_entity = document.getElementById('list_entity');
		let add_person = document.getElementById('add_person');
		let delete_person = document.getElementById('delete_person');
		let add_entity = document.getElementById('add_entity');
		let delete_entity = document.getElementById('delete_entity');

		add_person.setAttribute('onclick', 'add_person_list();');
		delete_person.setAttribute('onclick', 'delete_person_list();');
		add_entity.setAttribute('onclick', 'add_entity_list();');
		delete_entity.setAttribute('onclick', 'delete_entity_list();');

		list_person.style.display = 'flex';
		list_entity.style.display = 'flex';

		if (list[0] == 'edit') {
			let name_details = document.getElementById('name_details');
			name_details.textContent = 'MODIFICAR PRODUCTO';
			button.textContent = 'MODIFICAR';
			let info_details = JSON.parse(window.localStorage.getItem('info_details'));
			let info = get_details(info_details.type_list, info_details.key_info);
			edit_form_product(info);
		}
		else {
			let new_entity = JSON.parse(window.localStorage.getItem('new_entity'));
			name_details.textContent = 'AÑADIR PRODUCTO';
			button.textContent = 'AÑADIR';
			edit_form_product(new_entity);
		}
	}

	if (list[1] == 'entity') {
		button.setAttribute('onclick', 'create_edit_dates_entity();');
		let list_person = document.getElementById('list_person');
		let add_person = document.getElementById('add_person');
		let delete_person = document.getElementById('delete_person');
		add_person.setAttribute('onclick', 'add_person_list();');
		delete_person.setAttribute('onclick', 'delete_person_list();');
		list_person.style.display = 'flex';


		if (list[0] == 'edit') {
			let name_details = document.getElementById('name_details');
			name_details.textContent = 'MODIFICAR ENTIDAD';
			button.textContent = 'MODIFICAR'
			let info_details = JSON.parse(window.localStorage.getItem('info_details'));
			let info = get_details(info_details.type_list, info_details.key_info);
			edit_form_entity(info);
		}
		else {
			let new_entity = JSON.parse(window.localStorage.getItem('new_entity'));
			name_details.textContent = 'AÑADIR ENTIDAD';
			button.textContent = 'AÑADIR';
			edit_form_entity(new_entity);
		}

	}

}

function add_entity_list() {

	let select_entity_add = document.getElementById('select_entity_add');
	let info_details = JSON.parse(window.localStorage.getItem('info_details'));
	//let info = get_details(info_details.type_list, info_details.key_info);
	let bdd = JSON.parse(window.localStorage.getItem('bdd'));
	let list = JSON.parse(window.localStorage.getItem('list'));

	if (list[0] == 'edit') {
		let info = get_details(info_details.type_list, info_details.key_info);

		info.entity.push(parseInt(select_entity_add.value));
		for (let i = 0; i < bdd[info_details.type_list].length; i++) {
			if (bdd[info_details.type_list][i].key == info.key) {
				bdd[info_details.type_list][i].entity = info.entity;

			}
		}

		window.localStorage.setItem('bdd', JSON.stringify(bdd));
	}
	else {
		let new_entity = JSON.parse(window.localStorage.getItem('new_entity'));
		new_entity.entity.push(parseInt(select_entity_add.value));
		window.localStorage.setItem('new_entity', JSON.stringify(new_entity));
	}
	location.reload();

}

function delete_entity_list() {
	let select_entity_delete = document.getElementById('select_entity_delete');
	let info_details = JSON.parse(window.localStorage.getItem('info_details'));
	let bdd = JSON.parse(window.localStorage.getItem('bdd'));
	let list = JSON.parse(window.localStorage.getItem('list'));

	if (list[0] == 'edit') {
		let info = get_details(info_details.type_list, info_details.key_info);

		for (let j = 0; j < info.entity.length; j++) {
			if (info.entity[j] == select_entity_delete.value) {
				info.entity.splice(j, 1);
				break;
			}
		}

		for (let i = 0; i < bdd[info_details.type_list].length; i++) {
			if (bdd[info_details.type_list][i].key == info.key) {
				bdd[info_details.type_list][i].entity = info.entity;
			}
		}

		window.localStorage.setItem('bdd', JSON.stringify(bdd));
	}
	else {
		let new_entity = JSON.parse(window.localStorage.getItem('new_entity'));
		let aux = new_entity.entity.indexOf(parseInt(select_entity_delete.value));
		if (aux != -1)
			new_entity.entity.splice(aux, 1);
		window.localStorage.setItem('new_entity', JSON.stringify(new_entity));
	}
	location.reload();
}

function add_person_list() {
	let info_details = JSON.parse(window.localStorage.getItem('info_details'));
	let list = JSON.parse(window.localStorage.getItem('list'));
	let select_person_add = document.getElementById('select_person_add');
	let bdd = JSON.parse(window.localStorage.getItem('bdd'));
	let new_entity = JSON.parse(window.localStorage.getItem('new_entity'));

	if (list[0] == 'edit') {

		let info = get_details(info_details.type_list, info_details.key_info);

		info.person.push(parseInt(select_person_add.value));
		for (let i = 0; i < bdd[info_details.type_list].length; i++) {
			if (bdd[info_details.type_list][i].key == info.key) {
				bdd[info_details.type_list][i].person = info.person;

			}
		}
		window.localStorage.setItem('bdd', JSON.stringify(bdd));
	}
	else {
		new_entity.person.push(parseInt(select_person_add.value));
		window.localStorage.setItem('new_entity', JSON.stringify(new_entity));
	}


	location.reload();

}

function delete_person_list() {
	let list = JSON.parse(window.localStorage.getItem('list'));
	let select_person_delete = document.getElementById('select_person_delete');
	//let info_details = JSON.parse(window.localStorage.getItem('info_details'));
	//let info = get_details(info_details.type_list, info_details.key_info);
	let bdd = JSON.parse(window.localStorage.getItem('bdd'));
	let new_entity = JSON.parse(window.localStorage.getItem('new_entity'));


	if (list[0] == 'edit') {
		let info_details = JSON.parse(window.localStorage.getItem('info_details'));
		let info = get_details(info_details.type_list, info_details.key_info);

		for (let j = 0; j < info.person.length; j++) {
			if (info.person[j] == select_person_delete.value) {
				info.person.splice(j, 1);
				break;
			}
		}

		for (let i = 0; i < bdd[info_details.type_list].length; i++) {
			if (bdd[info_details.type_list][i].key == info.key) {
				bdd[info_details.type_list][i].person = info.person;
			}
		}

		window.localStorage.setItem('bdd', JSON.stringify(bdd));
	}
	else {
		let aux = new_entity.person.indexOf(parseInt(select_person_delete.value));
		if (aux != -1)
			new_entity.person.splice(aux, 1);
		window.localStorage.setItem('new_entity', JSON.stringify(new_entity));
	}
	location.reload();
}

function edit_form_person(info) {

	let form_name = document.getElementById('form_name');
	let form_birth = document.getElementById('form_birth');
	let form_death = document.getElementById('form_death');
	let form_url = document.getElementById('form_url');
	let form_wiki = document.getElementById('form_wiki');

	form_name.value = info.name;
	form_birth.value = info.birth;
	form_death.value = info.death;
	form_url.value = info.img;
	form_wiki.value = info.wiki;
}

function create_edit_dates_person() {

	let bdd = JSON.parse(window.localStorage.getItem('bdd'));
	let list = JSON.parse(window.localStorage.getItem('list'));
	let form_name = document.getElementById('form_name').value;
	let form_birth = document.getElementById('form_birth').value;
	let form_death = document.getElementById('form_death').value;
	let form_url = document.getElementById('form_url').value;
	let form_wiki = document.getElementById('form_wiki').value;

	if (list[0] == 'create') {
		let new_entity = JSON.parse(window.localStorage.getItem('new_entity'));
		let list = JSON.parse(window.localStorage.getItem('list'));
		new_entity.name = form_name;
		new_entity.birth = form_name;
		new_entity.wiki = form_wiki;
		new_entity.img = form_url;
		bdd.number_person += 1;
		bdd['person'].push(new_entity);
		list[0] = 'edit';
		list[1] = 'person';
		window.localStorage.setItem('list', JSON.stringify(list));
		localStorage.removeItem('new_entity');
		let info_details = {
			type_list: 'person',
			key_info: String(new_entity.key),
		}
		window.localStorage.setItem('info_details', JSON.stringify(info_details));
		alert('AÑADIDO CORRECTAMENTE');
	}
	else {

		let info_details = JSON.parse(window.localStorage.getItem('info_details'));
		let info = get_details(info_details.type_list, info_details.key_info);
		let new_date = { key: info.key, name: form_name, birth: form_birth, death: form_death, wiki: form_wiki, img: form_url };
		let i = 0;
		for (i = 0; i < bdd.person.length; i++) {
			if (bdd.person[i].key == info.key)
				break;
		}
		bdd.person[i] = new_date;
		alert('MODIFICADO CORRECTAMENTE');
	}
	alert('Masdasdasd');

	window.localStorage.setItem('bdd', JSON.stringify(bdd));
	location.reload();

}


function edit_form_product(info) {

	let select_person_add = document.getElementById('select_person_add');
	let select_person_delete = document.getElementById('select_person_delete');
	let select_entity_add = document.getElementById('select_entity_add');
	let select_entity_delete = document.getElementById('select_entity_delete');

	let bdd = JSON.parse(window.localStorage.getItem('bdd'));

	let form_name = document.getElementById('form_name');
	let form_birth = document.getElementById('form_birth');
	let form_death = document.getElementById('form_death');
	let form_url = document.getElementById('form_url');
	let form_wiki = document.getElementById('form_wiki');

	form_name.value = info.name;
	form_birth.value = info.birth;
	form_death.value = info.death;
	form_url.value = info.img;
	form_wiki.value = info.wiki;


	if (bdd.person.length != 0) {

		for (let j = 0; j < bdd.person.length; j++) {

			if (info.person.indexOf(bdd.person[j].key) != -1)
				select_person_delete.insertAdjacentHTML('afterbegin', '<option value="' + bdd.person[j].key + '"> ' + bdd.person[j].name + '</option>');
			else
				select_person_add.insertAdjacentHTML('afterbegin', '<option value="' + bdd.person[j].key + '"> ' + bdd.person[j].name + '</option>');

		}
	}

	if (bdd.entity.length != 0) {

		for (let i = 0; i < bdd.entity.length; i++) {

			if (info.entity.indexOf(bdd.entity[i].key) != -1)
				select_entity_delete.insertAdjacentHTML('afterbegin', '<option value="' + bdd.entity[i].key + '"> ' + bdd.entity[i].name + '</option>');
			else
				select_entity_add.insertAdjacentHTML('afterbegin', '<option value="' + bdd.entity[i].key + '"> ' + bdd.entity[i].name + '</option>');

		}
	}

}

function create_edit_dates_product() {

	let bdd = JSON.parse(window.localStorage.getItem('bdd'));
	let list = JSON.parse(window.localStorage.getItem('list'));
	let form_name = document.getElementById('form_name').value;
	let form_birth = document.getElementById('form_birth').value;
	let form_death = document.getElementById('form_death').value;
	let form_url = document.getElementById('form_url').value;
	let form_wiki = document.getElementById('form_wiki').value;

	if (list[0] == 'create') {
		let new_entity = JSON.parse(window.localStorage.getItem('new_entity'));
		let list = JSON.parse(window.localStorage.getItem('list'));
		new_entity.name = form_name;
		new_entity.birth = form_name;
		new_entity.wiki = form_wiki;
		new_entity.img = form_url;

		bdd.number_product += 1;
		bdd['product'].push(new_entity);
		list[0] = 'edit';
		list[1] = 'product';
		window.localStorage.setItem('list', JSON.stringify(list));
		localStorage.removeItem('new_entity');
		let info_details = {
			type_list: 'product',
			key_info: String(new_entity.key),
		}
		window.localStorage.setItem('info_details', JSON.stringify(info_details));
		alert('AÑADIDO CORRECTAMENTE');
	}
	else {

		let info_details = JSON.parse(window.localStorage.getItem('info_details'));
		let info = get_details(info_details.type_list, info_details.key_info);
		let new_date = { key: info.key, name: form_name, birth: form_birth, death: form_death, wiki: form_wiki, img: form_url, entity: info.entity, person: info.person };
		let i = 0;
		for (i = 0; i < bdd.product.length; i++) {
			if (bdd.product[i].key == info.key)
				break;
		}
		bdd.product[i] = new_date;
		alert('MODIFICADO CORRECTAMENTE');
	}

	location.reload();
	window.localStorage.setItem('bdd', JSON.stringify(bdd));

}

function edit_form_entity(info) {

	let select_person_add = document.getElementById('select_person_add');
	let select_person_delete = document.getElementById('select_person_delete');
	let bdd = JSON.parse(window.localStorage.getItem('bdd'));

	let form_name = document.getElementById('form_name');
	let form_birth = document.getElementById('form_birth');
	let form_death = document.getElementById('form_death');
	let form_url = document.getElementById('form_url');
	let form_wiki = document.getElementById('form_wiki');

	form_name.value = info.name;
	form_birth.value = info.birth;
	form_death.value = info.death;
	form_url.value = info.img;
	form_wiki.value = info.wiki;


	if (bdd.person.length != 0) {

		for (let j = 0; j < bdd.person.length; j++) {

			if (info.person.indexOf(bdd.person[j].key) != -1)
				select_person_delete.insertAdjacentHTML('afterbegin', '<option value="' + bdd.person[j].key + '"> ' + bdd.person[j].name + '</option>');
			else
				select_person_add.insertAdjacentHTML('afterbegin', '<option value="' + bdd.person[j].key + '"> ' + bdd.person[j].name + '</option>');

		}
	}

}

function create_edit_dates_entity() {

	let bdd = JSON.parse(window.localStorage.getItem('bdd'));
	let list = JSON.parse(window.localStorage.getItem('list'));
	let form_name = document.getElementById('form_name').value;
	let form_birth = document.getElementById('form_birth').value;
	let form_death = document.getElementById('form_death').value;
	let form_url = document.getElementById('form_url').value;
	let form_wiki = document.getElementById('form_wiki').value;



	if (list[0] == 'create') {
		let new_entity = JSON.parse(window.localStorage.getItem('new_entity'));
		let list = JSON.parse(window.localStorage.getItem('list'));
		new_entity.name = form_name;
		new_entity.birth = form_name;
		new_entity.wiki = form_wiki;
		new_entity.img = form_url;

		bdd.number_entity += 1;
		bdd['entity'].push(new_entity);
		list[0] = 'edit';
		list[1] = 'entity';
		window.localStorage.setItem('list', JSON.stringify(list));
		localStorage.removeItem('new_entity');
		let info_details = {
			type_list: 'entity',
			key_info: String(new_entity.key),
		}
		window.localStorage.setItem('info_details', JSON.stringify(info_details));
		alert('AÑADIDO CORRECTAMENTE');
	}
	else {

		let info_details = JSON.parse(window.localStorage.getItem('info_details'));
		let info = get_details(info_details.type_list, info_details.key_info);
		let new_date = { key: info.key, name: form_name, birth: form_birth, death: form_death, wiki: form_wiki, img: form_url, person: info.person };
		let i = 0;
		for (i = 0; i < bdd.entity.length; i++) {
			if (bdd.entity[i].key == info.key)
				break;
		}
		bdd.entity[i] = new_date;
		alert('MODIFICADO CORRECTAMENTE');
	}

	location.reload();
	window.localStorage.setItem('bdd', JSON.stringify(bdd));

}


////////////////////                              DETAILS                              //////////////////////////

function create_details() {

	let info_details = JSON.parse(window.localStorage.getItem('info_details'));
	let dates = JSON.parse(window.localStorage.getItem('dates'));
	let bdd = get_details(info_details.type_list, info_details.key_info);
	let name_details = document.getElementById('name_details');
	let name = document.getElementById('name');
	let img = document.getElementById('img');
	let birth = document.getElementById('birth');
	let death = document.getElementById('death');
	let wiki = document.getElementById('wiki');
	let list_relation = document.getElementById('list_relation');
	name.textContent = 'Nombre: ' + bdd.name;
	birth.textContent = 'Fecha de nacimiento: ' + bdd.birth;
	if (bdd.death != '')
		death.textContent = 'Fecha de muerte: ' + bdd.death;
	wiki.textContent = 'Wiki: ' + bdd.wiki;
	img.src = bdd.img;

	if (info_details.type_list == 'product') {
		name_details.textContent = 'PRODUCTO';
		set_relations_product(bdd, list_relation);
	}
	if (info_details.type_list == 'person') {
		name_details.textContent = 'PERSONA';
		set_relations_person(bdd, list_relation);
	}
	if (info_details.type_list == 'entity') {
		name_details.textContent = 'ENTIDAD';
		set_relations_entity(bdd, list_relation);
	}
	if (dates.sesion == true) {
		let cont_dates = document.getElementById('cont_dates');
		let button = document.createElement('button');
		button.className = 'button_edit';
		button.textContent = 'EDITAR';

		button.setAttribute('onclick', 'create_form("edit","' + info_details.type_list + '")');

		cont_dates.appendChild(button);
	}
}

function save_details(list, key) {
	let info_details = {
		type_list: list,
		key_info: key,
	}
	window.localStorage.setItem('info_details', JSON.stringify(info_details));
	window.location.href = "./details.html";
}


function set_relations_person(info, list_relation) {
	let bdd = JSON.parse(window.localStorage.getItem('bdd'));

	let entity = [];
	let product = [];

	for (bdd of bdd['entity']) {
		if (bdd.person.indexOf(info.key) != -1)
			entity.push(bdd.name);
	}

	if (entity.length != 0) {
		let list = document.createElement('ul');
		list_relation.insertAdjacentHTML('beforeend', '<h3>ENTIDADES:</h3>')
		list_relation.appendChild(list);
		for (entity of entity) {
			list.insertAdjacentHTML('afterbegin', '<li>' + entity + '</li>')
		}
	}

	bdd = JSON.parse(window.localStorage.getItem('bdd'));

	for (bdd of bdd['product']) {
		if (bdd.person.indexOf(info.key) != -1)
			product.push(bdd.name);
	}

	if (product.length != 0) {
		let list = document.createElement('ul');
		list_relation.insertAdjacentHTML('beforeend', '<h3>PRODUCTOS:</h3>')
		list_relation.appendChild(list);

		for (product of product) {
			list.insertAdjacentHTML('beforeend', '<li>' + product + '</li>')
		}
	}
}

function set_relations_product(info, list_relation) {
	let bdd = JSON.parse(window.localStorage.getItem('bdd'));

	if (info.person.length != 0) {
		let list = document.createElement('ul');
		list_relation.insertAdjacentHTML('beforeend', '<h3>PERSONAS:</h3>')
		list_relation.appendChild(list);
		for (let i = 0; i < info.person.length; i++) {
			for (let j = 0; j < bdd.person.length; j++) {

				if (info.person[i] == bdd.person[j].key)
					list.insertAdjacentHTML('afterbegin', '<li>' + bdd.person[j].name + '</li>')
			}

		}
	}

	if (info.entity.length != 0) {
		let list = document.createElement('ul');
		list_relation.insertAdjacentHTML('beforeend', '<h3>ENTIDADES:</h3>')
		list_relation.appendChild(list);
		for (let i = 0; i < info.entity.length; i++) {
			for (let j = 0; j < bdd.entity.length; j++) {

				if (info.entity[i] == bdd.entity[j].key)
					list.insertAdjacentHTML('afterbegin', '<li>' + bdd.entity[j].name + '</li>')
			}
		}
	}
}

function set_relations_entity(info, list_relation) {
	let bdd = JSON.parse(window.localStorage.getItem('bdd'));
	let product = [];

	if (info.person.length != 0) {
		let list = document.createElement('ul');
		list_relation.insertAdjacentHTML('beforeend', '<h3>PERSONAS:</h3>')
		list_relation.appendChild(list);
		for (let i = 0; i < info.person.length; i++) {
			for (let j = 0; j < bdd.person.length; j++) {

				if (info.person[i] == bdd.person[j].key)
					list.insertAdjacentHTML('afterbegin', '<li>' + bdd.person[j].name + '</li>')
			}

		}
	}

	for (bdd of bdd['product']) {
		if (bdd.entity.indexOf(info.key) != -1)
			product.push(bdd.name);
	}

	if (product.length != 0) {
		let list = document.createElement('ul');
		list_relation.insertAdjacentHTML('beforeend', '<h3>PRODUCTOS:</h3>')
		list_relation.appendChild(list);

		for (product of product) {
			list.insertAdjacentHTML('beforeend', '<li>' + product + '</li>')
		}
	}
}


function get_details(list, key) {
	let bdd = JSON.parse(window.localStorage.getItem('bdd'));

	for (bdd of bdd[list]) {
		if (bdd.key == key)
			return bdd;
	}
}
