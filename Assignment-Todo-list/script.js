let data=[];
let table = document.getElementById("todoTable");
function addTableRow() {
    let newRow=table.insertRow(table.length),
        cell1=newRow.insertCell(0),
        cell2=newRow.insertCell(1),
        cell3=newRow.insertCell(2);
    newRow.className='row';
    cell1.className='col-2';
    cell2.className='col-7';
    cell3.className='col-3';
    let title=document.getElementById('title').value;
    let desc=document.getElementById('desc').value;
    cell1.innerText=title;
    cell2.innerText=desc;
    let button=document.createElement('button'),
        upbtn=document.createElement('button'),
        downbtn=document.createElement('button'),
        update=document.createElement('button');
    button.setAttribute('id',`deleteBtn`);
    upbtn.setAttribute('id','up');
    downbtn.setAttribute('id','down');
    update.setAttribute('id','update');

    //button.innerText='delete';
    button.innerHTML="<i class=\"fas fa-trash-alt\"></i>";
    upbtn.innerHTML="<i class=\"fas fa-arrow-up\"></i>";
    downbtn.innerHTML="<i class=\"fas fa-arrow-down\"></i>";
    update.innerHTML="<i class=\"fas fa-edit\"></i>";
    upbtn.className='btn btn-warning';
    downbtn.className='ml-1 btn btn-warning';
    button.className+='ml-1 btn  btn-success';
    update.className='ml-1 btn btn-success';
    upbtn.setAttribute('onclick',"moveup(this);");
    downbtn.setAttribute('onclick',"movedown(this);");
    button.setAttribute('onclick',"deleteRow(this);");
    update.setAttribute('onclick',"updateRow(this);");

    //let div=document.createElement('div');
    //div.className='row';
    cell3.appendChild(upbtn);
    cell3.appendChild(button);
    //let div2=document.createElement('div');
    //div2.className='row mt-2';
    cell3.appendChild(update);
    cell3.appendChild(downbtn);
    //button.addEventListener("click",deleteTodo(button.id),false);
    //cell3.appendChild(div);
    //cell3.appendChild(div2);
    let obj={title:title,description:desc};
    /*button.onclick=function () {
        console.log(button.id);
        let index;

        if(index>0)
          table.deleteRow(index);
    };*/
    data.push(obj);
    console.log(data);

}

function deleteRow(button) {
    console.log(button);
    let row = button.parentNode.parentNode;
    let name = row.getElementsByTagName("TD")[0].innerHTML;
    if (confirm("Do you want to delete: " + name)) {
        table.deleteRow(row.rowIndex);
    }
}
function moveup(button) {
    console.log(button);
    let row = button.parentNode.parentNode;
    let index=row.rowIndex;
    if(index>1){
        let title= row.getElementsByTagName("TD")[0].innerHTML;
        let description= row.getElementsByTagName("TD")[1].innerHTML;
        console.log(table.rows[index].cells[0].innerText);
        table.rows[index].cells[0].innerText=table.rows[index-1].cells[0].innerText;
        table.rows[index].cells[1].innerText=table.rows[index-1].cells[1].innerText;
        table.rows[index-1].cells[0].innerText=title;
        table.rows[index-1].cells[1].innerText=description;
    }
}
function movedown(button) {
    console.log(button);
    let row = button.parentNode.parentNode;
    let index=row.rowIndex;
    console.log(`${table.rows.length} ${index}`);
    if(index<table.rows.length-1){
        let title= row.getElementsByTagName("TD")[0].innerHTML;
        let description= row.getElementsByTagName("TD")[1].innerHTML;
        console.log(table.rows[index].cells[0].innerText);
        table.rows[index].cells[0].innerText=table.rows[index+1].cells[0].innerText;
        table.rows[index].cells[1].innerText=table.rows[index+1].cells[1].innerText;
        table.rows[index+1].cells[0].innerText=title;
        table.rows[index+1].cells[1].innerText=description;
    }
}

function updateRow(button) {
    button.setAttribute('data-toggle','modal');
    button.setAttribute('data-target',"#todoModalUpdate");
    let save=document.getElementById('saveTodoUpdate');
    let row = button.parentNode.parentNode;
    let index=row.rowIndex;
    let title=document.getElementById('titleUpdate');
    let desc=document.getElementById('descUpdate');
    title.innerText=table.rows[index].cells[0].innerText;
    desc.innerText=table.rows[index].cells[1].innerText;
    save.onclick=function () {
        table.rows[index].cells[0].innerText=title.value;
        table.rows[index].cells[1].innerText=desc.value;
    }
}