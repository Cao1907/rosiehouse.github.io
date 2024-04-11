document.addEventListener('DOMContentLoaded', function() {
    const boxProduct = document.querySelectorAll('.box-product');
    boxProduct.forEach((boxProduct) => {
      const boxImage = boxProduct.querySelector('.box-image');
      const detailName = boxProduct.querySelector('.detail-name');
  
      boxImage.addEventListener('mouseover', () => {
        detailName.style.display = 'block';
      });
  
      boxImage.addEventListener('mouseout', () => {
        detailName.style.display = 'none';
      });
    });
});
$(document).ready(function(){
  $('.heading-slidetoggle').click(function(){
    $('.slidetoggle-box').slideToggle();
  })
})
$(document).ready(function(){
  var btn = $("#backtoTop");
  $(window).on('scroll', function(){
    if($(window).scrollTop()>300) {
      btn.addClass('show');
    }
    else {
      btn.removeClass('show');
    }
  });
  btn.on('click', function(e) {
    e.preventDefault();
    $('html,body').animate({
      scrollTop: 0
    }, '300');
  });
});