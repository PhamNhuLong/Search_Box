var btnSearch = document.querySelector('.search-box-button')
btnSearch.addEventListener('click',function(){
    this.parentElement.classList.toggle('open')
    this.previousElementSibling.focus();
})