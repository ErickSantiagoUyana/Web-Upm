function main() {

	create_localStore_sesion();
	let dates_sesion = JSON.parse(window.localStorage.getItem('dates_sesion'));
	if(dates_sesion.token == null){
		init_sesion_reader();
		location.reload();
	}
	create_main();
	localStorage.removeItem('info_details');
	localStorage.removeItem('dates_user');
	//localStorage.removeItem('new_entity');
}

function init_sesion_reader() {
	let dates_sesion = JSON.parse(window.localStorage.getItem('dates_sesion'));
	$.post(
		"/access_token",
		"username=reader&password=reader",
		null
	).success(function (data, textStatus, request) {
		dates_sesion.token = request.getResponseHeader('Authorization');
		dates_sesion.type_user = ['reader'];
		window.localStorage.setItem('dates_sesion', JSON.stringify(dates_sesion));
	})
}

function create_localStore_sesion() {
	let dates_sesion = JSON.parse(window.localStorage.getItem('dates_sesion'));
	if (dates_sesion == null) {
		let dates_sesion = {
			sesion: false,
			type_user: ['reader'],
			token: null,
			name_user:'',
            password_user:'',
		}
		window.localStorage.setItem('dates_sesion', JSON.stringify(dates_sesion));
	}
	else {
		if (dates_sesion.sesion == true) {
			log_out_create(dates_sesion.name_user,dates_sesion.type_user);
		}
	}
}

function log_in(){
		let authHeader = null;
		let dates_sesion = JSON.parse(window.localStorage.getItem('dates_sesion'));
		let name = document.getElementById('username').value;
		let password = document.getElementById('password').value;
			$.post(
				"/access_token",
				'username='+name+'&password='+password,
				null
			).success(function (data, textStatus, request) {
				authHeader = request.getResponseHeader('Authorization');
				dates_sesion.token = authHeader;
				let token = authHeader.split(' ')[1];
				let myData = JSON.parse(atob(token.split('.')[1]));
				console.log()
				dates_sesion.sesion = true;
				dates_sesion.type_user = myData.scopes;
				dates_sesion.name_user = name;
				dates_sesion.password_user = password;
				window.localStorage.setItem('dates_sesion', JSON.stringify(dates_sesion));
				log_out_create(name,dates_sesion.type_user);
			}).fail(function (xhr) {
				if (xhr.responseJSON && xhr.responseJSON.message) {
					message = xhr.responseJSON.message;
				}
				alert("Incorrecto :( \n" + message)
			});
}

function  create_main(){
	let dates_sesion = JSON.parse(window.localStorage.getItem('dates_sesion'));
	load_dates_bdd(dates_sesion.token, 'products', 'PRODUCTOS', 'product',dates_sesion.type_user, 'PRODUCTO');
	setTimeout(2000);
	load_dates_bdd(dates_sesion.token, 'persons', 'PERSONAS', 'person',dates_sesion.type_user, 'PERSONA');
	setTimeout(2000);
	load_dates_bdd(dates_sesion.token, 'entities', 'ENTIDADES', 'entity',dates_sesion.type_user, 'ENTIDAD');
	setTimeout(2000);
	if(dates_sesion.type_user.indexOf('writer') != -1)
		load_dates_bdd(dates_sesion.token, 'users', 'USUARIOS', 'user',dates_sesion.type_user, 'USUARIO');
}

function load_dates_bdd(authHeader, type, name_container, type_minus, type_user, name_container_minus){

	$.ajax({
		type: "GET",
		url: '/api/v1/'+type,
		headers: {"Authorization": authHeader},
		// dataType: 'json',
		success: function (data) {
			let main_index = document.getElementById('main_index')

			main_index.appendChild(create_container(data[type], name_container, type_minus, type_user, type, name_container_minus));
		}
	})
}

function create_container(bdd, name_container, type_minus, type_user, type, name_container_minus) {
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
			if(!(type_minus == 'user' && (info[type_minus].id == 1 || info[type_minus].id == 2)))
				type_info.appendChild(create_card(info[type_minus], type_user, type, name_container_minus, type_minus));
		}
		if(type_user != null)
		{
			if (type_user.indexOf('writer') >= 0) {
				let div = document.createElement('div');
				let a = document.createElement('a');
				let img = document.createElement('img')
				let name = document.createElement('h2');
				div.className = 'type';
				img.className = 'img';
				a.setAttribute('onclick', 'save_details('+info.id+',"'+type+'","'+name_container_minus+'","'+type_minus+'", "create")');
				img.src = '../images/create.png';
				name.textContent = 'AÑADIR'
				a.appendChild(img);
				div.appendChild(a);
				div.appendChild(name);
				type_info.appendChild(div)
			}
		}
		container_info.appendChild(type_info);
	}
	return container_info;
}

function create_card(info, type_user, type_date, name_container_minus ,type_minus) {
	let type = document.createElement('div');
	let a = document.createElement('a');
	let img = document.createElement('img')
	let name = document.createElement('h2');
	let button = document.createElement('button');
	let aux = document.createElement('a');
	a.className = 'link'
	type.className = 'type';
	img.className = 'img';
	a.setAttribute('onclick', 'save_details('+info.id+',"'+type_date+'","'+name_container_minus+'","'+type_minus+'", "details")');
	if (info.imageUrl == null)
		img.src = '../images/user_empy.png';
	else
		img.src = info.imageUrl;
	if(type_minus == 'user')
		name.textContent = info.username;
	else
		name.textContent = info.name;
	a.appendChild(img);
	type.appendChild(a);
	aux.setAttribute('onclick', 'save_details('+info.id+',"'+type_date+'","'+name_container_minus+'","'+type_minus+'", "details")');
	aux.appendChild(name);
	aux.className = 'info_card'
	type.appendChild(aux);

	if(type_user != null) {
		if (type_user.indexOf('writer') >= 0) {
			button.textContent = 'ELIMINAR';
			button.setAttribute('onclick', 'confirm_delete('+info.id+',"'+type_date+'")')
			type.appendChild(button);
		}
	}
	return type;
}

function confirm_delete(value, type_date) {

	let mensaje = confirm("¿Seguro que deseas borrarlo?");
	if (mensaje) {
		alert("Aceptado!");
		delete_card(value, type_date)
	}
	else {
		alert("Cancelado");
	}
}

function delete_card(value, type_date) {
	let dates_sesion = JSON.parse(window.localStorage.getItem('dates_sesion'));
	let authHeader = dates_sesion.token;

	$.ajax({
		type: "DELETE",
		url: '/api/v1/'+type_date+'/'+value,
		headers: {"Authorization": authHeader},
		// dataType: 'json',
		success: function (data) {
			window.location.href = "./index.html";
		}
	})
}

function log_out_create(name_user, type_user) {

	let log = document.getElementById('log')
	let log_in = document.getElementById('form-login');
	let log_out = document.createElement('button');
	//let user = document.createElement('button');
	let img = document.createElement('img')

	log_out.id = 'log_out';
	log_out.textContent = 'Cerrar Sesion';
	log_out.setAttribute('class', 'btn_log');
	log_out.setAttribute('onclick', 'log_out_delete()');
	img.className = 'img_users';
	img.src = '../images/users.png';
	log_in.remove();
	log.appendChild(img);
	create_button_user();
	log.appendChild(log_out);
}

function create_button_user(){
	let dates_sesion = JSON.parse(window.localStorage.getItem('dates_sesion'));
	if(dates_sesion.sesion  == true && dates_sesion.name_user != 'reader'){
		let log = document.getElementById('log');
		let user = document.createElement('button');
    	user.className = 'btn_user';
    	user.textContent = dates_sesion.name_user;
    	user.setAttribute('onclick', 'init_user()');
    	log.appendChild(user);
	}
}

function log_out_delete() {
	//let dates_sesion = JSON.parse(window.localStorage.getItem('dates_sesion'));
	//dates_sesion.sesion = false;
	//dates_sesion.type_user = ['reader'];
	//window.localStorage.setItem('dates_sesion', JSON.stringify(dates_sesion));
	localStorage.removeItem('dates_sesion');
	location.reload();
}

////////////////////                              USERS                              //////////////////////////

function init_user(){
	let dates_sesion = JSON.parse(window.localStorage.getItem('dates_sesion'));
	get_info_user(dates_sesion);
}

function create_user(){
	let dates_user = JSON.parse(window.localStorage.getItem('dates_user'));

	let name = document.getElementById('name');
	let email = document.getElementById('email');
	let rol = document.getElementById('rol');
	let btn_edit = document.getElementById('btn_edit');
	name.textContent = 'Nombre: ' + dates_user.username;
	email.textContent = 'Email: ' + dates_user.email;
	rol.textContent = 'Rol: ' + dates_user.role;

	btn_edit.setAttribute('onclick', 'btn_edit_user('+dates_user.id+')');

}

function btn_edit_user(id){

	let info_details = [parseInt(id),'USUARIO','edit','users','user'];
	window.localStorage.setItem('info_details', JSON.stringify(info_details));
	//save_details(parseInt(id),'users','USUARIO','user','edit');
	window.location.href = "./form.html";
}

function get_info_user(dates){

	$.ajax({
		type: "GET",
		url: '/api/v1/users',
		headers: {"Authorization": dates.token},
		// dataType: 'json',
		success: function (data) {
			for(let i = 0; i < data['users'].length; i++){
				if(data['users'][i].user.username == dates.name_user){
					let dates_user = data['users'][i].user;
					window.localStorage.setItem('dates_user', JSON.stringify(dates_user));
					window.location.href = "./users.html";
				}
			}
		}
	})
}

////////////////////                              DETAILS                              //////////////////////////

function save_details(value, type_date, name_container, type_minus, type_create) {

	if(type_create == 'details'){
		let dates_sesion = JSON.parse(window.localStorage.getItem('dates_sesion'));
		let authHeader = dates_sesion.token;
		$.ajax({
			type: "GET",
			url: '/api/v1/'+type_date+'/'+value,
			headers: {"Authorization": authHeader},
			// dataType: 'json',
			success: function (data) {
				let info_details = [data[type_minus],name_container,type_create,type_date,type_minus];
				window.localStorage.setItem('info_details', JSON.stringify(info_details));
				window.location.href = "./details.html";
			}
		})
	}
	else{
		if(type_create == 'create'){
			let info_details = ['',name_container,type_create,type_date,[], [],type_minus];
			window.localStorage.setItem('info_details', JSON.stringify(info_details));
		}
		else
		if(type_create == 'edit'){

			let info_details = JSON.parse(window.localStorage.getItem('info_details'));
			info_details[0] = info_details[0].id;
			info_details[2] = type_create;
			window.localStorage.setItem('info_details', JSON.stringify(info_details));
		}
		window.location.href = "./form.html";
	}

}

function create_details() {

    create_button_user();
	let info_details = JSON.parse(window.localStorage.getItem('info_details'));
	let dates_sesion = JSON.parse(window.localStorage.getItem('dates_sesion'));
	let name_details = document.getElementById('name_details');
	let name = document.getElementById('name');
	let img = document.getElementById('img');
	let birth = document.getElementById('birth');
	let death = document.getElementById('death');
	let wiki = document.getElementById('wiki');
	let list_relation = document.getElementById('list_relation');

	if(info_details[2]=='edit'){
		info_details[2] = 'details';
		window.localStorage.setItem('info_details', JSON.stringify(info_details));
		save_details(info_details[0],info_details[3],info_details[1],info_details[4],'details');
	}
	if(info_details[4]=='user'){

		name.textContent = 'Nombre: ' + info_details[0].username;
		birth.textContent = 'Email: ' + info_details[0].email;
		wiki.textContent = 'Rol: ' + info_details[0].role;
		img.src = '../images/user_empy.png';
	}
	else{
		name.textContent = 'Nombre: ' + info_details[0].name;
		birth.textContent = 'Fecha de nacimiento: ' + info_details[0].birthDate;
		if(info_details[0].deathDate != null)
			death.textContent = 'Fecha de muerte: ' + info_details[0].deathDate;
		wiki.textContent = 'Wiki: ' + info_details[0].wikiUrl;
		if (img.src != null)
			img.src = info_details[0].imageUrl;

		name_details.textContent = info_details[1];
		load_list(dates_sesion.token, info_details[0],'product','products',list_relation,'PRODUCTOS');
		load_list(dates_sesion.token, info_details[0],'entity','entities',list_relation,'ENTIDADES');
		load_list(dates_sesion.token, info_details[0],'person','persons',list_relation,'PERSONAS');
	}

	if(dates_sesion.type_user != null) {
		if (dates_sesion.type_user.indexOf('writer') >= 0) {
			let cont_dates = document.getElementById('cont_dates');
			let button = document.createElement('button');
			button.className = 'button_edit';
			button.textContent = 'EDITAR';
			button.setAttribute('onclick', 'save_details("","","","", "edit")');
			cont_dates.appendChild(button);
		}
	}
}

function load_list(token, info, list_minus, type_list, list_relation, name_list) {
	if (info[type_list] != null) {
		let list = document.createElement('ul');
		list_relation.insertAdjacentHTML('beforeend', '<h3>'+name_list+'</h3>')
		list_relation.appendChild(list);
		for (number_pos of info[type_list]) {
			$.ajax({
				type: "GET",
				url: '/api/v1/'+type_list+'/'+number_pos,
				headers: {"Authorization": token},
				// dataType: 'json',
				success: function (data) {
					let aux = data[list_minus].name;
					list.insertAdjacentHTML('afterbegin', '<li>' +aux+ '</li>')
				}
			})
		}
	}
}

////////////////////                              FORM                              //////////////////////////

function create_form() {
	create_button_user();
	let dates_sesion = JSON.parse(window.localStorage.getItem('dates_sesion'));
	let add_person = document.getElementById('add_person');
	let delete_person = document.getElementById('delete_person');
	let add_entity = document.getElementById('add_entity');
	let delete_entity = document.getElementById('delete_entity');
	let button = document.getElementById('button_form');
	let name_details_form = document.getElementById('name_details_form');
	let info_details = JSON.parse(window.localStorage.getItem('info_details'));

	if (info_details.indexOf('user') == -1){
		if (info_details[1] == 'ENTIDAD' || info_details[1] == 'PRODUCTO'){
			list_person.style.display = 'flex';
			if (info_details[1] == 'PRODUCTO')
				list_entity.style.display = 'flex';
		}
		if (info_details[2] == 'create'){

			name_details_form.textContent = 'AÑADIR ' + info_details[1];
			button.textContent = 'AÑADIR';
			button.setAttribute('onclick', 'add_date()');

			load_dates_list(dates_sesion.token, 'entities', info_details[4], 'entity', select_entity_delete, select_entity_add);
			load_dates_list(dates_sesion.token, 'persons', info_details[5], 'person', select_person_delete, select_person_add);

			if (info_details[1] != 'PERSONA') {
				add_person.setAttribute('onclick', 'add_list_local("persons")');
				delete_person.setAttribute('onclick', 'delete_list_local("persons")');
				if (info_details[1] == 'PRODUCTO') {
					add_entity.setAttribute('onclick', 'add_list_local("entities")');
					delete_entity.setAttribute('onclick', 'delete_list_local("entities")');
				}
			}
		}
		else{
			name_details_form.textContent = 'MODIFICAR ' + info_details[1];
			button.textContent = 'MODIFICAR';
			button.setAttribute('onclick', 'add_date()');
			load_dates_form(dates_sesion.token, info_details[3], info_details[0], info_details[4]);
			if (info_details[1] != 'PERSONA') {
				add_person.setAttribute('onclick', 'add_list("persons","PERSONA")');
				delete_person.setAttribute('onclick', 'delete_list("persons","PERSONA")');
				if (info_details[1] == 'PRODUCTO') {
					add_entity.setAttribute('onclick', 'add_list("entities","ENTIDAD")');
					delete_entity.setAttribute('onclick', 'delete_list("entities","ENTIDAD")');
				}
			}
		}
	}
	else{
		create_form_user(info_details,dates_sesion.token);
	}
}

function create_form_user(info_details, token){
	let dates_sesion = JSON.parse(window.localStorage.getItem('dates_sesion'));
	let button = document.getElementById('button_form');
	let div_wiki = document.getElementById('div_wiki');
	let list_person = document.getElementById('list_person');
	let list_entity = document.getElementById('list_entity');
	let label_birth = document.getElementById('label_birth');
	let label_death = document.getElementById('label_death');
	let label_img = document.getElementById('label_img');
    let form_birth = document.getElementById('form_birth');
	list_person.remove();
	list_entity.remove();
	div_wiki.remove();
	if(dates_sesion.type_user == 'reader'){
		label_birth.remove();
		form_birth.remove();
	}
	else{
		label_birth.textContent = 'Rol';
	}
	label_death.textContent = 'Email:';
	label_img.textContent = 'Password:';
	if(info_details[2] == 'create'){
		name_details_form.textContent = 'AÑADIR ' + info_details[1];
		button.textContent = 'AÑADIR';
	}
	else{
		name_details_form.textContent = 'MODIFICAR ' + info_details[1];
		button.textContent = 'MODIFICAR';
		load_dates_form(token, info_details[3], info_details[0], info_details[4]);

	}

	button.setAttribute('onclick', 'add_date()');
}

function add_date(){
	let dates_sesion = JSON.parse(window.localStorage.getItem('dates_sesion'));
	let info_details = JSON.parse(window.localStorage.getItem('info_details'));
	let form_name = document.getElementById('form_name').value;
	let form_birth = document.getElementById('form_birth').value;
	let form_death = document.getElementById('form_death').value;
	let form_url = document.getElementById('form_url').value;
	let new_date = {};
	if(info_details.indexOf('user') != -1){
		if(form_url != '')
			new_date = { username:form_name, email: form_death, password: form_url, role: form_birth};
		else
			new_date = { username:form_name, email: form_death, role: form_birth};
	}
	else{

		let form_wiki = document.getElementById('form_wiki').value;
		new_date = { name: form_name, birthDate: form_birth, deathDate: form_death, imageUrl: form_url, wikiUrl: form_wiki}
	}
	if(info_details[2]=='edit')
		update_bdd(dates_sesion.token,info_details[3],new_date,info_details[0]);
	else
		add_date_bdd(dates_sesion.token,info_details,new_date);
}

function add_date_bdd(authHeader,date,aux){
	$.ajax({
		type: "POST",
		url: '/api/v1/'+date[3],
		contentType: 'application/json',
		data: JSON.stringify(aux),
		headers: {"Authorization": authHeader},
		success: function (data) {
			if(date[3] != 'users')
				add_relations_bdd(authHeader,data[date[6]],date);
			alert('AÑADIDO CORRECTAMENTE');
		}
	}).fail(function (xhr) {
		if (xhr.responseJSON && xhr.responseJSON.message) {
			message = xhr.responseJSON.message;
		}
		alert("Incorrecto :( \n" + message)
	});
}

function add_relations_bdd(authHeader,date,info_details){

	for(let i = 0; i < info_details[4].length; i++){
		$.ajax({
			type: "PUT",
			url: '/api/v1/'+info_details[3]+'/'+date.id+'/entities/add/'+info_details[4][i]+'',
			headers: {"Authorization": authHeader},
			success: function (data) {
			}
		}).fail(function (xhr) {
			if (xhr.responseJSON && xhr.responseJSON.message) {
				message = xhr.responseJSON.message;
			}
			alert("Incorrecto :( \n" + message);
		});
	}

	for(let i = 0; i < info_details[5].length; i++){

		$.ajax({
			type: "PUT",
			url: '/api/v1/'+info_details[3]+'/'+date.id+'/persons/add/'+info_details[5][i]+'',
			headers: {"Authorization": authHeader},
			success: function (data) {
			}
		}).fail(function (xhr) {
			if (xhr.responseJSON && xhr.responseJSON.message) {
				message = xhr.responseJSON.message;
			}
			alert("Incorrecto :( \n" + message);
		});
	}

}

function update_bdd(authHeader,date,aux,pos){
	$.ajax({
		type: "PUT",
		url: '/api/v1/'+date+'/'+pos+'',
		contentType: 'application/json',
		data: JSON.stringify(aux),
		headers: {"Authorization": authHeader},
		success: function (data) {
			alert('MODIFICADO CORRECTAMENTE');
		}
	}).fail(function (xhr) {
		if (xhr.responseJSON && xhr.responseJSON.message) {
			message = xhr.responseJSON.message;
		}
		alert("Incorrecto :( \n" + message)
	});
}

function load_dates_form(authHeader,type_date,value,type_minus){
	$.ajax({
		type: "GET",
		url: '/api/v1/'+type_date+'/'+value,
		headers: {"Authorization": authHeader},
		// dataType: 'json',
		success: function (data) {
			if(type_minus != 'user') {
				form_name.value =data[type_minus].name;
				form_birth.value = data[type_minus].birthDate;
				form_death.value = data[type_minus].deathDate;
				form_url.value = data[type_minus].imageUrl;
				form_wiki.value = data[type_minus].wikiUrl;
				if(type_minus != 'person'){

					load_dates_list(authHeader,'entities', data[type_minus].entities, 'entity',select_entity_delete,select_entity_add);
					load_dates_list(authHeader,'persons', data[type_minus].persons, 'person',select_person_delete,select_person_add);
				}
			}
			else{
				form_birth.value = data[type_minus].role;
				form_name.value =data[type_minus].username;
				form_death.value = data[type_minus].email;
			}
		}
	})}

function load_dates_list(token , type_list, list, list_minus, id_list_delete, id_list_add){

	$.ajax({
		type: "GET",
		url: '/api/v1/'+type_list,
		headers: {"Authorization": token},
		// dataType: 'json',
		success: function (data) {

			for(let i = 0; i<data[type_list].length; i++){
				let aux = data[type_list][i][list_minus];
				if(list == null) {
					id_list_add.insertAdjacentHTML('afterbegin', '<option value="' + aux.id + '"> ' + aux.name + '</option>');
				}
				else{
					if(list.indexOf(aux.id)==-1){
						id_list_add.insertAdjacentHTML('afterbegin', '<option value="' + aux.id + '"> ' + aux.name + '</option>');
					}
					else{
						id_list_delete.insertAdjacentHTML('afterbegin', '<option value="' + aux.id + '"> ' + aux.name + '</option>');
					}
				}
			}
		}
	})
}

function add_list(type,type_alert) {
	let dates_sesion = JSON.parse(window.localStorage.getItem('dates_sesion'));
	let info_details = JSON.parse(window.localStorage.getItem('info_details'));
	let select_list = '';
	if(type == 'persons')
		select_list = document.getElementById('select_person_add');
	else
		select_list = document.getElementById('select_entity_add');

	$.ajax({
		type: "PUT",
		url: '/api/v1/'+info_details[3]+'/'+info_details[0]+'/'+type+'/add/'+ select_list.value+'',
		headers: {"Authorization": dates_sesion.token},
		success: function (data) {
			alert(type_alert+' AÑADIDA');
		}
	}).fail(function (xhr) {
		if (xhr.responseJSON && xhr.responseJSON.message) {
			message = xhr.responseJSON.message;
		}
		alert("Incorrecto :( \n" + message);
	});
}

function delete_list(type, type_alert){
	let dates_sesion = JSON.parse(window.localStorage.getItem('dates_sesion'));
	let info_details = JSON.parse(window.localStorage.getItem('info_details'));
	let select_person_delete = document.getElementById('select_person_delete');
	let select_list = '';
	if(type == 'persons')
		select_list = document.getElementById('select_person_delete');
	else
		select_list = document.getElementById('select_entity_delete');
	console.log(type);
	$.ajax({
		type: "PUT",
		url: '/api/v1/'+info_details[3]+'/'+info_details[0]+'/'+type+'/rem/'+select_list.value+'',
		headers: {"Authorization": dates_sesion.token},
		success: function (data) {
			alert(type_alert+' ELIMINADA');
		}
	}).fail(function (xhr) {
		if (xhr.responseJSON && xhr.responseJSON.message) {
			message = xhr.responseJSON.message;
		}
		alert("Incorrecto :( \n" + message);
	});
}

function add_list_local(type){
	let info_details = JSON.parse(window.localStorage.getItem('info_details'));
	if(type == 'persons') {
		select_list = document.getElementById('select_person_add');
		if(select_list.value != '')
			info_details[5].push(parseInt(select_list.value));
	}
	else{
		select_list = document.getElementById('select_entity_add');

		if(select_list.value != '')
			info_details[4].push(parseInt(select_list.value));
	}
	window.localStorage.setItem('info_details', JSON.stringify(info_details));
}

function delete_list_local(type){


	let info_details = JSON.parse(window.localStorage.getItem('info_details'));
	let aux;
	if(type == 'persons') {
		select_list = document.getElementById('select_person_delete');

		if(select_list.value != ''){

			aux = info_details[5].indexOf(parseInt(select_list.value));
			console.log(aux);
			if(aux != -1){
				console.log('borrado');

				info_details[5].splice(aux,1);
			}
		}
	}
	else{
		select_list = document.getElementById('select_entity_delete');

		if(select_list.value != ''){

			aux = info_details[4].indexOf(parseInt(select_list.value));
			console.log(aux);
			if(aux != -1)
				info_details[4].splice(aux,1);
		}
	}

	window.localStorage.setItem('info_details', JSON.stringify(info_details));
}
