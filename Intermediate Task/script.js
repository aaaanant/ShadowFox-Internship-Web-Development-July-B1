let menu = document.getElementsByClassName("menu")[0];
let list = document.getElementsByClassName("list")[0];
let hide = document.querySelectorAll(".heading, .fa-cart-shopping, .fa-magnifying-glass, .search");
let navspace = document.querySelectorAll(".menu, .list");

menu.addEventListener('click', () =>{

    if(list.classList.contains('active')){
        list.classList.remove('active');
            hide.forEach(element => {
        element.classList.remove('active1');

      });  
            navspace.forEach(element => {
        element.classList.remove('active2')
    });
    }
    else {

            navspace.forEach(element => {
        element.classList.add('active2')
      });  

      hide.forEach(element => {
        element.classList.add('active1');
      });  
  
    list.classList.add('active');
    }
})




let lefttrendbutton = document.getElementById("left-trending");
let righttrendtbutton = document.getElementById("right-trending");

let trendingrow = document.getElementById("trending-row");

lefttrendbutton.addEventListener('click', () =>{
    trendingrow.scrollLeft -= 300;
})


righttrendtbutton.addEventListener('click', () =>{
    trendingrow.scrollLeft += 300;
})


let leftsuggestbutton = document.getElementById("left-suggestion");
let rightsuggesttbutton = document.getElementById("right-suggestion");

let suggestrow = document.getElementById("suggest-row");

leftsuggestbutton.addEventListener('click', () =>{
    suggestrow.scrollLeft -= 300;
})


rightsuggesttbutton.addEventListener('click', () =>{
    suggestrow.scrollLeft += 300;
})