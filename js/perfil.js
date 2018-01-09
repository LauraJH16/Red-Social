$(document).ready(function() {
	
	var $btnHome = $('.btn-home');

  $btnHome.click(function() {
    setTimeout(function() { 
      window.location.href = 'home.html';
    }, 500);
  });

});