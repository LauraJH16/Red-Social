$(document).ready(function() {
  $('.carousel.carousel-slider').carousel({fullWidth: true}); 
  autoplay();   
  function autoplay() {
    $('.carousel').carousel('next');
    setTimeout(autoplay, 2000);
  }

  // Subir archivos
  $('#preview').hover(
    function() {
      $(this).find('a').fadeIn();
    }, function() {
      $(this).find('a').fadeOut();
    }
  );
  $('#file-select').on('click', function(e) {
    e.preventDefault();
        
    $('#file').click();
  });
    
  $('input[type=file]').change(function() {
    var file = (this.files[0].name).toString();
    var reader = new FileReader();
        
    $('#file-info').text('');
    $('#file-info').text(file);
        
    reader.onload = function(e) {
      $('.content-text').append('<div class="posteando card"> <img class="img-file img-post center-block" src="#"> <br><br><span class="grey-text">Publicado a las :'+ getTime() +'</span><br><br></div></div>');
      $('.img-post').attr('src', e.target.result);
    };
         
    reader.readAsDataURL(this.files[0]);
  });

  var $btnPerfil = $('.btn-perfil');
  var $btnSalir = $('.btn-salir');

  $btnPerfil.click(function() {
    setTimeout(function() { 
      window.location.href = 'perfil.html';
    }, 300);
  });

  /* para que se agrege los post de los usuarios*/

  $('.postext').on('click', function() {
    var $content = $('#textarea1').val();
    $('.content-text').append('<div class="posteando card">' + $content + '<br><br><span class="grey-text">Publicado a las :'+ getTime() +'</span><br><br></div>');
    $('#textarea1').val('');
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
        window.location.href = 'login.html';
      }, 300);
    }).catch(function(error) {
      // An error happened.
    });
  });
});