$(document).ready(function () {

  start();

  function start() {
    $('#perfil').hide();
    $('.list-nav').hide();
    $('#logo-big').removeClass('s6');
    $('#logo-big').addClass('center-block');
  }

  var config = {
    apiKey: 'AIzaSyCz9xauTDRFIDPU6M3YZhaI6Ues-vgcU9Q',
    authDomain: 'network-red.firebaseapp.com',
    databaseURL: 'https://network-red.firebaseio.com',
    projectId: 'network-red',
    storageBucket: 'network-red.appspot.com',
    messagingSenderId: '775688474324'
  };

  firebase.initializeApp(config);

  var $ingresoGoogle = $('#btn-google');

  $ingresoGoogle.click(googleLogin);

  function googleLogin() {
    var provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
      .then(function (result) {
        writeData(result.user);
        console.log(result.user.displayName);
        next1();
        $('.root').prepend('<span class="center-align card-title">' + result.user.displayName + '</span>');
        $('#img-user').attr('src', result.user.photoURL);
      });
  }

  function writeData(user) {
    var usuario = {
      uid: user.uid,
      nombre: user.displayName,
      email: user.email,
      foto: user.photoURL
    };

    firebase.database().ref('users/' + user.displayName)
      .set(usuario);
  }

  var $inverBtn = $('.inver-btn');
  var $empreBtn = $('.empre-btn');

  $inverBtn.click(function () {
    $inverBtn.css('background-color', 'darkcyan');
    $empreBtn.css('background-color', 'salmon');
  });

  $empreBtn.click(function () {
    $empreBtn.css('background-color', 'darkcyan');
    $inverBtn.css('background-color', 'salmon');
  });


  var $ingresoFacebook = $('#btn-fb');


  function Observador() {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        // User is signed in.
        console.log('existes');

        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;
        // ...
      } else {
        // User is signed out.
        // ...

        console.log('no existes');
      }
    });
  }

  Observador();

  function next1() {
    $('#login').hide();
    $('#perfil').show();
    $('.list-nav').show();
    $('#logo-big').addClass('s6');
    $('#logo-big').removeClass('center-block');
  }

  var $btnHome = $('.btn-home');

  $btnHome.click(function () {
    setTimeout(function () {
      window.location.href = 'home.html';
    }, 300);
  });
});