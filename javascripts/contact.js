$(document.body).ready(function() {
  $('#contact-btn').click(function() {
      var mailString;
      function updateMailString() {
          mailString = '?subject=' + encodeURIComponent($('#subject').val())
              + '&body=' + 'Hi An,' + '%0D%0A'
              + encodeURIComponent($('#contact-msg').val())
              + '%0D%0A%0D%0A%0D%0A' + 'Best,' + '%0D%0A'
              + encodeURIComponent($('#contact-name').val()) + '%0D%0A'
              + encodeURIComponent($('#contact-email').val()) + '%0D%0A'
              + '\"Feel free to edit/delete these formats\"';
          $('#contact-btn').attr('href',  'mailto:nguyen.an1@northeastern.edu' + mailString);
      }
      $( '#subject' ).focusout(function() { updateMailString(); });
      $( '#contact-msg' ).focusout(function() { updateMailString(); });
      $( '#contact-name' ).focusout(function() { updateMailString(); });
      $( '#contact-email' ).focusout(function() { updateMailString(); });
      updateMailString();
    $('.contact__form').submit();
  });
});