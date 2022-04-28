const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');
const generaitor = todo =>{
const html = `
  <li class="list-group-item d-flex justify-content-between align-items-center">
  <span> ${todo}</span>
  <i class="for fa-trash-alt delete"></i>
  </li>
`;

list.innerHTML += html;
};
addForm.addEventListener( 'submit' , e =>{
   e.preventDefault();
   
const todo = addForm.add.value.trim();
// console.log(todo);
   if(todo.lenght){
    generaitor(todo);
    // addForm.reset();
   }
});

//delete todos
list.addEventListener('click' , e => {
    if(e.target.classList.contains('delete'));
    e.target.parentElement.remove();
})

const filterTodos = (term) => {
   // console.log(term);
   Array.from(list.children) 
   .filter ((todo) => !todo.textContent.toLowerCase().includes(term))
   // console.log(todo.textContent);
   // return true;
   .forEach((todo) => todo.classList.add('filtered'));

   Array.from(list.children) 
   .filter ((todo) => todo.textContent.toLowerCase().includes(term))
   .forEach((todo) => todo.classList.remove('filtered'));
};
//keyup event
search.addEventListener('keyup' , () => {
const term = search.value.trim().toLowerCase();
filterTodos(term);
});