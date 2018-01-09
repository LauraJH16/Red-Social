$(document).ready(function(){
  $('.carousel.carousel-slider').carousel({fullWidth: true});
  $('.button-collapse').sideNav({
    menuWidth: 200, // Default is 300
    edge: 'right', // Choose the horizontal origin
    closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
    draggable: true, // Choose whether you can drag to open on touch screens,
    onOpen: function(el) { /* Do Stuff */ }, // A function to be called when sideNav is opened
    onClose: function(el) { /* Do Stuff */ }, // A function to be called when sideNav is closed*/
  });

  var config = {
    apiKey: "AIzaSyADv1fxkUiJ1l7qjDsigV2MyCQokrarJVY",
    authDomain: "sign-c5945.firebaseapp.com",
    databaseURL: "https://sign-c5945.firebaseio.com",
    projectId: "sign-c5945",
    storageBucket: "sign-c5945.appspot.com",
    messagingSenderId: "21338253193"
  };
  firebase.initializeApp(config);
  

});
