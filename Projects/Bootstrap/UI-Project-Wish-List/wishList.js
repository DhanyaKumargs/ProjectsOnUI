var i =0;
var editbool = false;
var editval = 0;
var na = JSON.parse(sessionStorage.getItem("name"));
var input = document.querySelector("#wish");
var descr = document.querySelector("#description");

// user name setting in top
addHesderName();
function addHesderName(){
    
    if(na==null){
        na="";
    }
    document.querySelector("#nameHeader").innerHTML="Hi,"+na[0];
}

// clear session when logout
function logout(){
    sessionStorage.setItem("name",JSON.stringify([]));
    window.location.href="Wellcome.html";
}

// add info into local storage
function add(){
    if(input.value.trim()=="")
    {
        alert("you dont entered any wish , how can i add..!");
        return false;
    }
    if(editbool){
        editshow(editval);
    }
    else{
        var wishess = localStorage.getItem(na[1]);
        if(wishess==null){
            wishes=[];
        }
        else{
            wishes = JSON.parse(wishess);
        }
        let arr = {"wish":input.value,"description":descr.value};
        wishes.push(arr);
        localStorage.setItem(na[1],JSON.stringify(wishes));
        show(wishes[wishes.length-1]);
    }
    document.querySelector("#form").reset();
}

// showing info in browser
function showall(){
	ar = JSON.parse(localStorage.getItem(na[1]));
	if(ar!=null)
		ar.forEach(show);
}
function show(wishli){
    var tbody = document.getElementById('tbody');
    tbody.innerHTML += `<tr><td>${wishli.wish} - ${wishli.description}</td><td><button class="btn btn-success " onclick="edit(${i})">Edit &#9998;</button></td><td><button class="btn btn-danger" onclick="del(${i++})">Delete &#9888;</button></td></tr>`;
}

// delete wish 
function del(j){
        var remove = JSON.parse(localStorage.getItem(na[1]));
        let con = confirm("sure, you want to delete "+remove[j].wish);
        if(con!=true)
            return false;
        remove.splice(j, 1);
        localStorage.setItem(na[1], JSON.stringify(remove));
        location.reload();
    
    
}


function edit(k){
    editbool=true;
    editval=k;
    document.querySelector("#add").innerHTML="Edit"; 
    alert(" Now you can edit in below box")
    var edit = JSON.parse(localStorage.getItem(na[1]));
    document.querySelector("#wish").value= edit[editval].wish;
    document.querySelector("#description").value= edit[editval].description;
}
// edit wish and description
function editshow(l){
    var edit = JSON.parse(localStorage.getItem(na[1]));
    edit[l].wish=input.value;
    if(descr.value!="")
        edit[l].description=descr.value;
    localStorage.setItem(na[1], JSON.stringify(edit));
    location.reload();
}9353679632