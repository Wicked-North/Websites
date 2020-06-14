// JavaScript source code
//Selectors
const inp = document.querySelector('.todo-input');
const but = document.querySelector('.todo-button');
const list= document.querySelector(".todo-list");

//Event Listeners
but.addEventListener('click', addToDo);

//Funtions
function addToDo(event) {
    //prevents form from submitting
    event.preventDefault();
    //creates div element
    console.log('hello');
    
    const divelem = document.createElement('div');
    divelem.classList.add('todo'); //assigns class name

    //create list element
    const lielem = document.createElement('li');
    lielem.textContent = "this works";
    lielem.classList.add('todoli');
    divelem.appendChild(lielem);

    //create buttons
    const checkbtn = document.createElement('button');
    checkbtn.innerHTML = '<i class="fas fa-check"></i>';//adds an html tag instead of simple text
    checkbtn.classList.add('checked-btn');
    divelem.appendChild(checkbtn);

    const delbtn = document.createElement('button');
    delbtn.innerHTML = '<i class="fas fa-trash"></i>';//adds an html tag instead of simple text
    delbtn.classList.add('deleted-btn');
    divelem.appendChild(delbtn);

    divelem.appendChild(list);



}