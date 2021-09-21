$(document).ready(function () {
  $(".css-lokgdv").click(function (e) {
    
    $(this).toggleClass("css-lokgdv");
    $(this).toggleClass("css-1uc7631");

    if ($(this).hasClass("css-1uc7631")) {
      $(
        '<input type="search" name="q" placeholder="Search Posts" data-bn-type="input" value="" class="css-95e6op" /><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" aria-label="clear" role="img" aria-hidden="true" hidden="" class="css-yeneia"><rect width="16" height="16" rx="8" fill="currentColor"></rect><path fill-rule="evenodd" clip-rule="evenodd" d="M12 11.117l-.883.878-3.122-3.117L4.883 12l-.878-.883L7.117 8 4 4.883l.883-.878 3.112 3.117L11.117 4l.873.883L8.878 8 12 11.117z" fill="#FEFEFE"></path></svg>'
      ).appendTo(".css-1uc7631");
      $(".css-95e6op").focus();
    } else {
      $(".css-95e6op").remove();
      $(".css-yeneia").remove();
    }
    e.stopPropagation();
  });
  $(".css-lokgdv .css-95e6op").change(function (e) {
    e.stopPropagation();
    $(".css-1uc7631").show();
  });
  $(".css-lokgdv .css-95e6op").click(function (e) {
    e.stopPropagation();
    $(".css-1uc7631").show();
  });
});
