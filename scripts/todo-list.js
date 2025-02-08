const todoobj=[];
function addItem()
{
    const inputItem=document.querySelector(".js-input-element");
    const dateElement=document.querySelector(".js-input-date");
    const date=dateElement.value
    const item=inputItem.value;
    todoobj.push({item,date});
    printList();   
    inputItem.value='';
    dateElement.value='';
};
function printList()
{
    let text='';
    todoobj.forEach(function(value,index){
        text+=`<div>${value.item}</div> 
        <div> ${value.date} </div> 
        <button onclick="deleteItem(${index})" class="delete-button">
            delete 
        </button>`
    });
    document.querySelector(".js-output").innerHTML=text;

}
function deleteItem(index){
    todoobj.splice(index,1);
    printList();

}
