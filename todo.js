const todoList = [{
    job:'wash dishes',
    date:'20-06-2022'
},
{
    job:'make dinner',
    date:'21-06-2022'
}

];

forLoop();


function addTodo(){
    const inputElement =document.querySelector('.js-input');
    const name = inputElement.value;
    const dateElement =document.querySelector('.js-date');
    const date = dateElement.value;

    todoList.push({job: name,
        date:date});  
    inputElement.value='';
    dateElement.value='';

    forLoop();
}



function forLoop(){

    let todoListHTML = '';
for(let i=0;i<todoList.length;i++){
    const todoObject = todoList[i];
    const job=todoObject.job;
    const date = todoObject.date;
    
    const html = `
    <div>${job}</div>
    <div>${date}</div>
    <button onclick="
    todoList.splice(${i},1);
    forLoop();
    ">Delete</button>
    `;
    todoListHTML+=html;
}
document.querySelector('.js-p').innerHTML = todoListHTML;

}