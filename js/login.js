$(document).ready(function() {
  var config = {
    apiKey: 'AIzaSyCz9xauTDRFIDPU6M3YZhaI6Ues-vgcU9Q',
    authDomain: 'network-red.firebaseapp.com',
    databaseURL: 'https://network-red.firebaseio.com',
    projectId: 'network-red',
    storageBucket: 'network-red.appspot.com',
    messagingSenderId: '775688474324'
  };

  firebase.initializeApp(config);
      
  var user = null;

  var $ingresoGoogle = $('#btn-google');

    
  $ingresoGoogle.click(googleLogin);
    
  function googleLogin() {
    var provider = new firebase.auth.GoogleAuthProvider();
    
    firebase.auth().signInWithPopup(provider).then(function(result) {
      var user = result.user;
      console.log(user);
      next1();
      // ...
    });
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
    setTimeout(function() { 
      window.location.href = 'home.html';
    }, 500);
  }
});