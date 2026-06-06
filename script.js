const myLeads=[]
const inputlEl=document.getElementById("input-el")
const intputBtn=document.getElementById("input-btn")
const ulEl=document.getElementById("ul-el")

intputBtn.addEventListener("click",function(){
    myLeads.push(inputlEl.value)
    inputlEl.value=" "
    renderLeads()
})

// function renderLeads(){
//     ulEl.innerHTML=" "
//     for (let i=0;i<myLeads.length;i++){
//         ulEl.innerHTML+="<li>"+myLeads[i]+"</li>"
//     }
// }

function renderLeads(){
    listItems=" "
    for(let i=0;i<myLeads.length;i++){
        listItems+="<li>"+myLeads[i]+"</li>"
    }
    ulEl.innerHTML=listItems
}