$(document).ready(function () {

  $('.css-1tyf19').click(function(e){
    $('.bn-sdd-dropdown').toggleClass('css-1tsr9u1');
    $('.bn-sdd-dropdown').toggleClass('css-1cc967k');
    $('.css-13c2b5p svg').toggleClass('css-1nlwvj5');
    $('.css-13c2b5p svg').toggleClass('css-1mv284k');
    $('.css-1ra7cyk').toggleClass('bn-input-status-focus');
    e.stopPropagation();
  })
  $('body').click(function(e){
    $('.bn-sdd-dropdown').removeClass('css-1cc967k');
    $('.bn-sdd-dropdown').addClass('css-1tsr9u1');
    e.stopPropagation();
  })
  $('.css-1f9551p').mouseover(function () {
    $(".bn-tooltip-box").css({"opacity": "1","visibility": "initial"});    
  });
  $(".css-1f9551p").mouseout(function(){
    $(".bn-tooltip-box").css({"opacity": "0","visibility": "hiddent"});    
  });

});

