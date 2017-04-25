function translate() {
    //Traducirá el título del formulario
    var title = document.getElementById('form-signin-heading');
    title.innerHTML = 'Por favor inicia sesión';
    //Traducirá el texto del placeholder del primer input
    var email = document.getElementById('inputEmail');
    email.placeholder = 'Correo electrónico';
    //Traduciráel texto del placeholder del primer input
    var password = document.getElementById('inputPassword');
    password.placeholder = 'Contraseña';
    //Traducirá el texto junto al checkbox
    var remember = document.getElementsByTagName('span')[0];
    remember.innerHTML = 'Recordar datos';
    //Traducirá el texto del botón
    var button = document.getElementsByClassName('btn')[0];
    button.innerHTML = 'Iniciar Sesión';
}

translate();

function mostrarData() {
    var email = document.getElementById('inputEmail').value;
    var pass = document.getElementById('inputPassword').value;
    document.getElementById("printEmail").innerHTML = '<div><h4>Datos de formulario</h4></div>' +
        '<div>El correo electrónico ingresado es:</div>' + email + '<div>La clave ingresada es:</div>';
    document.getElementById("printPass").innerHTML = pass;

}