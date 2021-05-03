var myDiv
var addButton = (document.getElementsByClassName('btn')[0])
// console.log(addButton);
addButton.addEventListener("click",()=>{
    var div1 = document.getElementsByClassName('text')[0].value
    if(div1 != ""){
        addTask(div1);      
    }
    else{
        window.alert("please Enter the task");
        // let messages = []
        // messages.push("please enter the task");
    }
    document.getElementsByClassName('text')[0].value = ""
})

function addTask(text) {
    var wrapper = document.getElementsByClassName('wrapper')[0]
    // console.log(wrapper);
    myDiv = document.createElement('div')
    myDiv.classList.add('task');
    myDiv.classList.add('hover');
    var para = document.createElement('p')
    para.classList.add('task-name')
    // console.log(myDiv)
    // var span = document.createElement('span')
    // para.appendChild(span)
    // console.log(para);
    para.setAttribute('style',"font-size: 20px;");
    var btn = document.createElement('button')
    btn.classList.add('close-btn')
    btn.innerText='X ';
    myDiv.appendChild(para);
    myDiv.appendChild(btn);
    para.innerHTML=text;
    wrapper.appendChild(myDiv);
    // console.log(myDiv);
    removeTask()
    finishTask()
}



function removeTask() {
    var removeButton = document.getElementsByClassName('close-btn')
    // console.log(removeButton.length);
    for(let i = 0 ;i<(removeButton.length);i++){
        removeButton[i].addEventListener("click",()=>{
            var div = removeButton[i].parentElement;
            // div.parentElement.removeChild(div);
            div.style.display = "none";
      })     
    }
}



function finishTask() {
    //  console.log(para_2);
    var tasknode = document.getElementsByClassName('task')
    for(let i = 0;i<tasknode.length;i++)
    tasknode[i].addEventListener("click",()=>{
        // console.log("you checked your task")
        tasknode[i].classList.add('checked')
        tasknode[i].classList.remove('hover')
        var para_2 = document.getElementsByClassName('task-name')[i]
        text= para_2.innerText
        para_2.innerText = "";
        var del = document.createElement('del')
        var textNode = document.createTextNode(text)
        del.appendChild(textNode)
        para_2.appendChild(del)
        
    })
     
    // var ele = document.getElementsByClassName('name')
    // ele.innerText=
 
}





