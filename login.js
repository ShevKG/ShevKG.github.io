
var $user = {
	login: "",
	password: "",
};

let main_page_url = "main.html";
let userJson;

$('body').on('click', '.password-checkbox', function(){

	if ($(this).is(':checked')){

		$('#password-input').attr('type', 'text');
		$('#repeat-password').attr('type', 'text');

	} else {
		$('#password-input').attr('type', 'password');
		$('#repeat-password').attr('type', 'password')
	}
});


$('#login-input').on('keydown', function(e) {
    if (e.which == 13) {
			$('#password-input').focus();
			$('#password-input').select();
    }
});


$('#password-input').on('keydown', function(e) {
    if (e.which == 13) {
			console.log("user: " + $('#login-input').val())
			console.log("password: " + $('#password-input').val())
			userJson = makeUserJSON(getLogin($('#login-input').val(), getPassword($('#password-input').val())));
            alert(userJson);
    }
});


$('button[name="sign-in"]').click(function () {
	console.log("user: " + $('#login-input').val())
	console.log("password: " + $('#password-input').val())
		userJson = makeUserJSON(getLogin($('#login-input').val(), getPassword($('#password-input').val())));
		$(location).attr('href', main_page_url);
});

$('button[name="register"]').click(function() {
		let display = 'flex';

		$("#hidable-list").css({ display: display })
		$("#repeat-password-text").css({ display: display })
		$("#repeat-password").css({ display: display })
		$("#forgot-password").css({ display: 'none' })
});


function getLogin(login){
    if (login == null)
        return;
    return login;
}

function getPassword(password){
    if (password == null)
        return;
    return password;
}



function makeUserJSON(login, password) {
    let user = {
        login: login,
        password: password,
    }

    return JSON.stringify(user);
}
