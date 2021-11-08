var i=0;
function onstart(){
let name = document.getElementById("name");
let email = document.getElementById("email");
let dob = document.getElementById("dob");
let btn = document.getElementById("addbtn");
btn.addEventListener("click",function(){
	nameval=name.value;
	emailval=email.value;
	dobval= dob.value;

	if(nameval.trim()==""||emailval.trim()==""||dobval.trim()=="")
	{
		alert("all fields must be madatory");
		return false;
	}
	let webtask =localStorage.getItem("employeetask");
	if(webtask==null){
		taskobj=[];
	}else{
		taskobj=JSON.parse(webtask);
	}
	arr=[nameval,emailval,dobval];
	taskobj.push(arr);
	localStorage.setItem("employeetask",JSON.stringify(taskobj));
	addinfo(arr);
	})
getAllItems();
}
function getAllItems(){
	ar = JSON.parse(localStorage.getItem("employeetask"));
	if(ar!=null)
		ar.forEach(addinfo);
}
function addinfo(item){
	
			var tbody = document.getElementById('tbdy');
			tbody.innerHTML += `<tr><td class="table1">${item[0]}</td>
     <td class="table1">${item[1]}</td>
        <td class="table1">${item[2]}</td><td> <button class="button1 table1" value="${i}"  id="dlt"${i}"" onclick="dltrow(${i})"> delete</button> </td>
		<td> <button class="table1 button2 " value="${i}"  id="dlt"${i}"" onclick="upda(${i++})"> update</button> </td></tr>`;
  }
function dltrow(x){
    var remove = JSON.parse(localStorage.getItem("employeetask"));
    remove.splice(x, 1);
    localStorage.setItem('employeetask', JSON.stringify(remove));
    location.reload();

}
function upda(x){
	var update = JSON.parse(localStorage.getItem("employeetask"));
	let name = prompt("Enter name");
	let email = prompt("enter email");
	update[x][0] = name;
	update[x][1] = email;
	localStorage.setItem('employeetask', JSON.stringify(update));
    location.reload();
	
}