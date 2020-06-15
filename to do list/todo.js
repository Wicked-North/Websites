// JavaScript source code
//photo link->https://unsplash.com/photos/ODjh4MU7JrE
//Selectors
const inp = document.querySelector('.todo-input');
const but = document.querySelector('.todo-button');
const list = document.querySelector(".todo-list");
const vanish = document.querySelector(".init-text");
const addagain = vanish;
var count = 0;
const right = document.querySelector(".right-rect");
const drop = document.querySelector('.dropdown');
var alle = document.getElementById('all');
console.log(alle);
const comp = document.querySelector('#comp');
console.log(comp);
const incomp = document.querySelector('#incomp');
const todo1 = document.querySelector('.todo');
console.log(list);

//Event Listeners
but.addEventListener('click', addToDo);
list.addEventListener('click', deleteCheck);
//alle.addEventListener('click', filterall);
comp.addEventListener('click', complete);
incomp.addEventListener('click', filterincomp);
drop.addEventListener('click', filterone);



//Funtions
function addToDo(event) {
    //prevents form from submitting
    event.preventDefault();
    //creates div element
 
    
    const divelem = document.createElement('div');
    divelem.classList.add('todo'); //assigns class name
   
    //create list element
    const lielem = document.createElement('li');
    lielem.textContent = inp.value;
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

    list.appendChild(divelem);

    //clear after adding input

    inp.value = "";
    vanish.remove();


}

function deleteCheck(event) {
    const item = event.target; //targets whatever item we are clicking on
    
    

    if (item.classList[0] === 'deleted-btn') {
        console.log("delete button clicked");
        const del = item.parentElement;
        var par = del.parentElement;
        var x = par.childElementCount;
        console.log(par);
        console.log(x);
        //Animation added here
        del.classList.add('fall');
        //this event waits until the transition is completed
        del.addEventListener('transitionend', function () {
            del.remove();
            if (x == 1) {
                right.appendChild(addagain);
                console.log("there are 0 elems");
            }
        });
        
        
    }

    if (item.classList[0] === 'checked-btn') {
        count++;
        const check = item.parentElement;
        check.classList.toggle('completed');
        console.log(check);

    }
}



function complete(e) {
    
}

function filterincomp(){

}

function filterone(e) {
    if (count > 1) {
        const todos = list.childNodes;

        console.log(todos);
        console.log(e.target.id);
        for (let i = 1; i < list.childNodes.length; i++) {
            switch (e.target.id) {
                case 'all':
                    todos[i].style.display= 'flex';
                    break;
                case 'comp':
                    if (list.classList.contains('completed')) {
                        todos[i].style.display = 'flex';
                    }
                    else {
                        todos[i].style.display = 'none';
                    }

            }
        }
        
    
    }
    
}