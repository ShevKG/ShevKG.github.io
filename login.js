
var $user = {
	login: "",
	password: "",
};

var main_page_url = "login.html";


$('body').on('click', '.password-checkbox', function(){

	if ($(this).is(':checked')){

		$('#password-input').attr('type', 'text');

	} else {

		$('#password-input').attr('type', 'password');
	}
});

$('#login-input').on('keydown', function(e) {
    if (e.which == 13) {
			$('#password-input').focus();
			$('#password-input').select();
    }
});

// пока вместо обращения к таблице простая конструцкия if
// user используется для примера
$('#password-input').on('keydown', function(e) {
    if (e.which == 13) {
			console.log("user: " + $('#login-input').val())
			console.log("password: " + $('#password-input').val())
			if ($('#login-input').val() == "user" && $('#password-input').val() == "1234") {
				$(location).attr('href', main_page_url);
			}
    }
});

$('button[name="sign-in"]').click(function () {
	console.log("user: " + $('#login-input').val())
	console.log("password: " + $('#password-input').val())
	if ($('#login-input').val() == "user" && $('#password-input').val() == "1234") {
		$(location).attr('href', main_page_url);
	}
});
