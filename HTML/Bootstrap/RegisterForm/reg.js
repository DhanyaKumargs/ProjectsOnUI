var baseUrl="https://lwl-ems.herokuapp.com/api/ems";
var flag = false;
var editId="";
showEmployee()
function showEmployee(){
    let str='';
   let url =`${baseUrl}/all`
    fetch(url).then(json =>json.json()).then(result =>{
        console.log(result);
        showResult(result);
    });

}

document.querySelector("#subBtn").addEventListener('click',(event) =>{
    event.preventDefault;
    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let salary = document.querySelector("#salary").value;

    document.querySelector("#empreg").reset();
    let data = {"name":name,"email":email,"salary":salary};
    if(!flag){
        fetch(`${baseUrl}/`,{
            method:'post',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        }).then(response =>{
            console.log(response);
            showEmployee();
        });
    }
    else{
        data={"id":editId,"name":name,"email":email,"salary":salary};
        fetch(`${baseUrl}/`,{
            method:'put',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        }).then(response =>{
            console.log(response);
            showEmployee();
        });
        flag=false;
        let sub = document.querySelector("#subBtn");
        sub.value="Submit";
    }
});

function showResult(result){
    let data = document.querySelector("#tbody");
    let item="";
    result.forEach(element => {
        item+=`<tr>
        <td>${element['id']}</td>
        <td>${element['name']}</td>
        <td>${element['email']}</td>
        <td>${element['salary']}</td>
        <td><button id="del${element['id']}" val="Delete" onclick="delItem(${element['id']})"class="btn btn-primary">Delete</button></td>
        <td><button id="edit${element['id']}" val="Edit" onclick="editItem(${element['id']})"class="btn btn-primary">Edit</button></td>
        </tr>`

    });
    data.innerHTML=item;

}
function delItem(id){

    let confirmResult = confirm(`Are you Sure to delete id: ${id}`);
    if(confirmResult){
        fetch(`${baseUrl}/${id}`,{method:"DELETE"}).then(result =>{
            showEmployee(result);
        })
    }
}

function editItem(id){
   
    let sub = document.querySelector("#subBtn");
    sub.value="EDIT";
    editId=id;
    flag=true;
    
    
}