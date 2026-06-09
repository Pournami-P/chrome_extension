let myLeads=[]
const inputlEl=document.getElementById("input-el")
const intputBtn=document.getElementById("input-btn")
const ulEl=document.getElementById("ul-el")
const deleteBtn=document.getElementById("delete-btn")
const tabBtn=document.getElementById("tab-btn")

const leadsFromLocalStorage=JSON.parse(localStorage.getItem("myLeads"))
console.log(leadsFromLocalStorage)

if(leadsFromLocalStorage){
    myLeads=leadsFromLocalStorage
    render(myLeads)
}

const tabs = [
    {url: "https://www.linkedin.com/in/per-harald-borgen/"}
]

tabBtn.addEventListener("click",function(){
    
})

deleteBtn.addEventListener("dblclick",function(){
    localStorage.clear();
    myLeads=[]
    render(myLeads)
})


intputBtn.addEventListener("click",function(){
    myLeads.push(inputlEl.value)
    inputlEl.value=""
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    render(myLeads)
})

// function renderLeads(){
//     ulEl.innerHTML=" "
//     for (let i=0;i<myLeads.length;i++){
//         ulEl.innerHTML+="<li>"+myLeads[i]+"</li>"
//     }
// }

function render(leads){
    let listItems=" "
    for(let i=0;i<leads.length;i++){
        //listItems+="<li><a target='_blank' href='"+myLeads[i]+"'>"+myLeads[i]+"</a></li>"
        listItems+=`
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>        
        `
    }
    ulEl.innerHTML=listItems
}