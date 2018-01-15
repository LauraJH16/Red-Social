jQuery(document).ready(function() {  
  $('.logo-splash').animate({
    bottom: '45%',
    width: '350px',
  }, 'slow');

  setTimeout(function() {
    window.location.href = 'views/perfil.html';
  }, 3000);
});
