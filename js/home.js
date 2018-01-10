$('document').ready(function() {
  $('.carousel.carousel-slider').carousel({fullWidth: true});

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
      $('#preview img').attr('src', e.target.result);
    };
         
    reader.readAsDataURL(this.files[0]);
  });

  var $btnPerfil = $('.btn-perfil');

  $btnPerfil.click(function() {
    setTimeout(function() { 
      window.location.href = 'perfil.html';
    }, 300);
  });

  /* para que se agrege los post de los usuarios*/

  $('.postext').on('click', function() {
    var $content = $('#textarea1').val();
    $('.content-text').append('<div class="posteando">' + $content + '</div>');
    $('#textarea1').val('');
  });
});