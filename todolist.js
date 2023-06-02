let arr=[
    "3 Litre Su İç",
    "Ödevleri Yap",
    "En Az 3 Saat Kodlama Yap",
    "Yemek Yap",
    "50 Sayfa Kitap Oku"
]


function maddeekle(){
    let UL_DOM=document.querySelector("#list")
    arr.forEach((x)=>{
        let li_DOM = document.createElement('li')
        li_DOM.innerHTML=x
        li_DOM.onclick=function(){setChecked(this)}
        let li_DOM_button = document.createElement("span")
        li_DOM_button.classList.add("close")
        li_DOM_button.innerHTML = ("x")
        li_DOM_button.onclick=function(){removeElement(this)}
        localStorage.setItem("toDoList", arr)
        li_DOM.appendChild(li_DOM_button)
        UL_DOM.appendChild(li_DOM)
        
        
    })    
}
document.addEventListener("DOMContentLoaded", () => {
    maddeekle()
  });

function newElement(){
    let task_DOM=document.querySelector("#task")
    let task_DOM_value=task_DOM.value
    if(task_DOM_value!=""){
        let UL_DOM=document.querySelector("#list")
        let li_DOM = document.createElement('li')
        li_DOM.innerHTML=task_DOM_value

        let li_DOM_button = document.createElement("span")
        li_DOM_button.classList.add("close")
        li_DOM_button.innerHTML = ("x")

        li_DOM.onclick=function(){setChecked(this)}
        li_DOM_button.onclick=function(){removeElement(this)}
        arr.push(task_DOM_value)
        localStorage.setItem("toDoListNew",task_DOM_value)
        li_DOM.appendChild(li_DOM_button)
        UL_DOM.appendChild(li_DOM)
        if (task_DOM_value!=""){
            let UL_DOM=document.querySelector("#liveToastAdd")
            $("#liveToastAdd").toast("show")
        }
    }

    else if(task_DOM_value==""){
        let UL_DOM=document.querySelector("#liveToast")
        $("#liveToast").toast("show")
        
        
    }
    
}

function setChecked(x) {
    x.classList.toggle("checked")
    
}

function removeElement(x){
   let deletedElement=x.parentElement
   deletedElement.remove()

}