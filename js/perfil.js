$(document).ready(function() {
	
	var $btnHome = $('.btn-home');

  $btnHome.click(function() {
    setTimeout(function() { 
      window.location.href = 'home.html';
    }, 300);
  });

  var database = firebase.database();

  var namefirst = $('.name-input').val();
  var lastname = $('.lastname-input').val();
  var name = namefirst + lastname;

  var $userName = $('.user-name');

  function writeUserData(uid, type, name) {
    firebase.database().ref('users/' + uid).set({
      username: name,
      usertype: type,
    });
    console.log(username)
  }

  var $btnPerfil = $('.btn-perfil');

  $btnPerfil.click(function() {
    writeUserData(uid, type, name);
  });

});