$(document).ready(function() {
  start();

  function start() {
    $('#perfil').hide();
    $('#home').hide();
    $('.list-nav').hide();
    $('#logo-big').removeClass('s6');
    $('#logo-big').removeClass('col');
    $('#logo-big').addClass('center-block');
    $('footer').css('position', 'absolute');
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
      .then(function(result) {
        writeData(result.user);
        console.log(result.user.displayName);
        next1();
        $('.root').prepend('<span class="center-align card-title">' + result.user.displayName + '</span>');
        $('#img-user').attr('src', result.user.photoURL);
        console.log(firebase.database().ref('users'));
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

  $inverBtn.click(function() {
    $inverBtn.css('background-color', 'darkcyan');
    $empreBtn.css('background-color', 'salmon');
  });

  $empreBtn.click(function() {
    $empreBtn.css('background-color', 'darkcyan');
    $inverBtn.css('background-color', 'salmon');
  });


  var $ingresoFacebook = $('#btn-fb');


  function Observador() {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        console.log('existes');
        next1();
        $('#img-user').attr('src', user.photoURL);

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
    $('#home').hide();
    $('#perfil').show();
    $('.list-nav').show();
    $('#logo-big').addClass('s6');
    $('#logo-big').addClass('col');
    $('#logo-big').css('padding-top', '11px');
    $('#logo-big').removeClass('center-block');
    $('footer').css('position', 'relative');
  }

  var $btnHome = $('.btn-home');

  $btnHome.click(function() {
    next2();
  });

  // Home

  $('.carousel.carousel-slider').carousel({
    fullWidth: true
  });
  autoplay();

  function autoplay() {
    $('.carousel').carousel('next');
    setTimeout(autoplay, 2000);
  }

  // Subir archivos
  $('#file-select').on('click', function(e) {
    e.preventDefault();
    $('#file').click();
  });

  $('input[type=file]').change(function() {
    var file = (this.files[0].name).toString();
    var reader = new FileReader();

    reader.onload = function(e) {
      $('.content-text').append('<div class="col l10 offset-l1 posteando card flow-text s12"> <img class="img-file img-post center-block" src="#"> <br><br><span class="grey-text">Publicado a las :' + getTime() + '</span><br><a href="#!" class="secondary-content"><i class="material-icons">favorite_border</i></a></div></div>');
      $('#test4').append('<div class="col l10 offset-l1 posteando card flow-text s12"> <img class="img-file img-post center-block" src="#"> <br><br><span class="grey-text">Publicado a las :' + getTime() + '</span><br><a href="#!" class="secondary-content"><i class="material-icons">favorite_border</i></a></div></div>');
      $('.img-post').attr('src', e.target.result);
    };

    reader.readAsDataURL(this.files[0]);
  });

  var $btnPerfil = $('.btn-perfil-home');
  var $btnSalir = $('.btn-salir');

  $btnPerfil.click(function() {
    next1();
  });

  function next2() {
    $('#login').hide();
    $('#perfil').hide();
    $('#home').show();
    $('.list-nav').show();
    $('#logo-big').addClass('s6');
    $('#logo-big').addClass('col');
    $('#logo-big').css('padding-top', '11px');
    $('#logo-big').removeClass('center-block');
    $('footer').css('position', 'relative !important');
  }

  /* para que se agrege los post de los usuarios*/

  $('.postext').on('click', function() {
    var $content = $('#textarea1').val();
    $('.content-text').append('<div class="col l10 offset-l1 posteando card flow-text s12">' + $content + '<br><br><span class="grey-text">Publicado a las :' + getTime() + '</span><br><a href="#!" class="secondary-content like"><i id="heart" class="material-icons">favorite_border</i></a></div>');
    $('#test4').append('<div class="col l10 offset-l1 posteando card flow-text s12">' + $content + '<br><br><span class="grey-text">Publicado a las :' + getTime() + '</span><br><a href="#!" class="secondary-content like"><i id="heart" class="material-icons">favorite_border</i></a></div>');
    $('#textarea1').val('');
    $('.like i').click(function() {
      $(this).text('favorite');
    });
  });
 

  function getTime() {
    var currentDate = new Date();
    var hh = currentDate.getHours();
    var mm = currentDate.getMinutes();
    return hh + ':' + ((mm < 10 ? '0' : '') + mm);
  }

  $btnSalir.click(function() {
    firebase.auth().signOut().then(function() {
      setTimeout(function() {
        window.location.href = 'perfil.html';
      }, 300);
    }).catch(function(error) {
      // An error happened.
    });
  });

  if ($('#seguir').text('Siguiendo')) {
    $('#seguir').on('click', function() {
      $('#seguir').text('Seguir');
    });
  }
  if ($('#seguir').text('Seguir')) {
    $('#seguir').on('click', function() {
      $('#seguir').text('Siguiendo');
    });
  }
});