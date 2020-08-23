/*
document.querySelector('.red-header').addEventListener('click', function(e){
  console.log(e.target);
});
*/

document.querySelectorAll('.hoverable')
  .forEach(function(hoverable) {
    hoverable.addEventListener('mouseenter', function(){
      hoverable.childNodes[3].classList.remove('hidden');
    });
    hoverable.addEventListener('mouseleave', function(){
      hoverable.childNodes[3].classList.add('hidden');
    });
  })