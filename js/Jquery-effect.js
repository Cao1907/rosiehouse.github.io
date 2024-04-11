$(document).ready(function() {
  $('.introduce-box-1').click(function() {
    $('.paragraph').slideToggle();
  });
});
$(document).ready(function(){
  $('.introduce-box-2').click(function(){
    $('.introduce-product-box').slideToggle();
  })
})
$(document).ready(function(){
  $('.content-1, .content-2, .content-3, .content-4').click(function(){
    $(this).find('.paragraph-introduce').slideToggle();
  })
})

