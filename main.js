let task_input = document.querySelector("#InputTask");
let Create_Task_Button = document.querySelector("#create_task_button");
let NoTasks = document.querySelector("#NoTasks");
let AllTasks = document.getElementById("AllTasks");
let DeletAll = document.getElementById("DeletAll");
let NumOfTasks = document.getElementById("NumOfTasks");
let noHaveTasks = document.getElementById("noHaveTasks");
let trash = document.querySelector(".trash")
//--------------------------------------------------------------
// delete One Task 

//Random Color 
let rand1 , rand2 , rand3 ; 
let GenerateColor = () =>
{
    rand1 = Math.floor(Math.random()*500) ;  
    rand2 = Math.floor(Math.random()*400) ;  
    rand3 = Math.floor(Math.random()*300) ;  
}
// Number Of Tasks 
let NumberOfTasks = function(){
    NumOfTasks.innerHTML=AllTasks.childElementCount;
}
//cheeck Have Tasks Or Not 
let chMessage = ()=>{
    if(AllTasks.childElementCount == 0){
        NoTasks.classList.remove("none");
    }
    else{
        NoTasks.classList.add("none") ; 
    }
}
//add New Task
let addtask = function(){
    GenerateColor() ; 
    if(task_input.value==0){
        noHaveTasks.classList.remove("hide");
    }
    else{
        NoTasks.classList.add("hide");
        AllTasks.innerHTML +=
        `<div class="task alert alert-warning fs-2 text-dark " style ="background:rgb(${rand1},${rand2},${rand3})">
        ${task_input.value} <br>
        <img src="./OIP.jfif" class="trash">
        </div>
        `
        NumberOfTasks();
        chMessage();
    }
}

//Delete All 
let deleteAll = () =>
{
    if(confirm("Are You Sure , YoU Delete All "))
    {
        AllTasks.innerHTML = " " ; 
        NumOfTasks.innerHTML=0;
    }
}
document.addEventListener("click" ,function(event){
    if(event.target.classList.contains("trash")) 
    {
        event.target.parentElement.remove() ; 
    }
    
})
document.addEventListener("click" ,function(event){
    if(event.target.classList.contains("task")) 
    {
        event.target.classList.add("line_through") ; 
    } 
})
Create_Task_Button.addEventListener("click",addtask);
DeletAll.addEventListener("click",deleteAll);
