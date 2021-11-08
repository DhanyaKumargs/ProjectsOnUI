var i=0;
function temp(){
let addtaskinput = document.getElementById("addtaskinput");
let addtaskbtn = document.getElementById("addtaskbtn");

addtaskbtn.addEventListener("click",function(){
	addtaskinputval = addtaskinput.value;
	if(addtaskinputval.trim()==""){
		alert("text should not be empty")
		return false;
	}
	let webtask =localStorage.getItem("localtask");
	if(webtask==null){
		taskobj = [];
	}
	else{
		taskobj=JSON.parse(webtask);
	}
	taskobj.push(addtaskinputval);
	localStorage.setItem("localtask",JSON.stringify(taskobj));
	addElement(document.getElementById("addtaskinput").value);
})
getAllItems();
}
function getAllItems(){
	ar = JSON.parse(localStorage.getItem("localtask"));
	if(ar!=null)
		ar.forEach(addElement);
}
function addElement(item){
	
			var tbody = document.getElementById('mytodo');
			tbody.innerHTML += `<li>"${item}"</li> <button  value="${i}"  id="dlt"${i}"" onclick="dltrow(${i++})"> delete</button>`;
  }
function dltrow(x){
    var remove = JSON.parse(localStorage.getItem("localtask"));
    remove.splice(x, 1);
    localStorage.setItem('localtask', JSON.stringify(remove));
    location.reload();

}
function calculate(z)
	{
			var x =Number(document.getElementById("num1").value);
			var y =Number(document.getElementById("num2").value);
			if(x=="" || y==""){
				document.getElementById("result").innerHTML="give input";
				return false;
			}
				
			var temp =0;
			switch(z)
			{
				case 1:temp = x+y;
					   document.getElementById("result").innerHTML=temp;
					   break;
				case 2:temp = x-y;
					   document.getElementById("result").innerHTML=temp;
					   break;
				case 3: temp=x*y
						document.getElementById("result").innerHTML=temp;
					   break;
				case 4: temp=x/y
						document.getElementById("result").innerHTML=temp;
					   break;
				default:document.getElementById("result").innerHTML="not valid";
					   break;
				
			}
			if(isNaN(temp)){
					document.getElementById("result").innerHTML="not valid";
				}
	}
