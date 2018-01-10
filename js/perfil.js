$(document).ready(function() {
	
	var $btnHome = $('.btn-home');

  $btnHome.click(function() {
    setTimeout(function() { 
      window.location.href = 'home.html';
    }, 300);
  });

  var config = {
    apiKey: 'AIzaSyADv1fxkUiJ1l7qjDsigV2MyCQokrarJVY',
    authDomain: 'sign-c5945.firebaseapp.com',
    databaseURL: 'https://sign-c5945.firebaseio.com',
    projectId: 'sign-c5945',
    storageBucket: 'sign-c5945.appspot.com',
    messagingSenderId: '21338253193'
  };
    
  firebase.initializeApp(config);

  var database = firebase.database();


});