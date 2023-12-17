var select = document.getElementsByName("cars")[0];

select.onclick = function(event){
    console.log(event);
}

select.addEventListener('click',function(event){
    console.log('clicked by event listener')
})