
const todoForm=document.querySelector(".form-todo");
const todoInput=document.querySelector(".form-todo input[type='text']");
const todoList=document.querySelector(".todo-list");
todoForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    // console.log(todoInput.value);
    const newTodotext=todoInput.value;
    const newLi=document.createElement("li");
    const newLiInnerHtml=`
                <span class="text">${newTodotext}</span>
                <div class="todo-buttons">
                    <button class="btn todo-btn done">Done</button>
                    <button class="btn todo-btn remove">Remove</button>
                </div>
            `;
    newLi.innerHTML=newLiInnerHtml;
    todoList.append(newLi);
    todoInput.value="";
});


todoList.addEventListener("click", (e)=>{
    // console.log(e.target);
    if(e.target.classList.contains("remove")){
        const targetedLi=e.target.parentNode.parentNode;
        targetedLi.remove();
    }
    if(e.target.classList.contains("done")){
        const liSpan=e.target.parentNode.previousElementSibling;
        liSpan.style.textDecoration="Line-through";
        }
});