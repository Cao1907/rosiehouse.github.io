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
