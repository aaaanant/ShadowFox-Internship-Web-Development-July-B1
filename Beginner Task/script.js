
let openmenu = document.getElementById('openmenu');
let closemenu = document.getElementById('closemenu');
let list = document.getElementsByClassName('list')[0];
let heading = document.querySelector('.heading');

openmenu.addEventListener('click' , () =>{

  list.classList.toggle('show');
  openmenu.style.display = 'none';
  closemenu.style.display = 'block';
  heading.style.display = 'none';

})

closemenu.addEventListener('click' , () =>{

  list.classList.remove('show');
  openmenu.style.display = 'block';
  closemenu.style.display = 'none';
  heading.style.display = 'block';
})


let typewriter = document.getElementById("typewriter");

let newtypewriter = "I am Full Stack Developer";

let index = 0;
const calltyperwriter = () => {
  
        typewriter.innerText = newtypewriter.slice(0, index++);

        if(index==newtypewriter.length){
            
        }

        setTimeout(calltyperwriter, 100);
    
};


calltyperwriter();

let about = document.getElementsByClassName('about')[0];
let project = document.getElementsByClassName('project')[0];
let skills = document.getElementsByClassName('skills')[0]; 
let contact = document.getElementsByClassName('contact')[0];
function scrollabout()
{

  about.scrollIntoView({ behavior: "smooth" });
}


function scrollproject()
{

  project.scrollIntoView({ behavior: "smooth" });
}

function scrollskills()
{

  skills.scrollIntoView({ behavior: "smooth" });
}
function scrollcontact()
{

  contact.scrollIntoView({ behavior: "smooth" });
}