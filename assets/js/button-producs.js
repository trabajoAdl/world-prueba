function increase() {
  let input = document.getElementById("quantity");
  input.value = parseInt(input.value) + 1;
}

function decrease() {
  let input = document.getElementById("quantity");
  let value = parseInt(input.value);
  if (value > 1) {
    input.value = value - 1;
  }
}


function changeMainImage(element) {
            // Get the src of the clicked thumbnail
            const newSrc = element.getAttribute('src');
            
            // Change the main image src
            document.querySelector('.img-general-principal').setAttribute('src', newSrc);
            
            // Optional: Add active class to the clicked thumbnail and remove from others
            document.querySelectorAll('.thumbnail-img').forEach(img => {
                img.classList.remove('active-thumbnail');
            });
            element.classList.add('active-thumbnail');
        }
        
        function increase() {
            const quantityInput = document.getElementById('quantity');
            quantityInput.value = parseInt(quantityInput.value) + 1;
        }
        
        function decrease() {
            const quantityInput = document.getElementById('quantity');
            if (parseInt(quantityInput.value) > 1) {
                quantityInput.value = parseInt(quantityInput.value) - 1;
            }
        }




$(document).ready(function(){
    $('[data-bs-toggle="tooltip"]').tooltip({
        trigger: 'hover'
    });
});
