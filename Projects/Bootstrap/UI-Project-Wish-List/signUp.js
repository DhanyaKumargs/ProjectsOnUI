
signUp();
function signUp(){
    
$(document).ready(function(){
    $("#register").click(function(){
        var inputText = document.getElementById("email").value;
        let temp = emailExist(inputText);
        if(existmail){
             adduser();
        }
        resetColour();
    })
})
}
  
    nme = false;
    function nameValidation(inputtxt){
        var field = inputtxt.value;
    var str = field.split(" ").join("");
    console.log(str);
    var letters = /^[0-9a-zA-Z]+$/;
    if (field.length >= 4 && str.match(letters)) {
        // alert('Your name have accepted : you can try another');
        nme = true;
        document.getElementById("name").style.borderColor = "#008000";
        document.getElementById("ername").innerHTML = "";
    }
    else {
        //alert('Please enter Valid Name');
        document.getElementById("ername").innerHTML = "Please enter Valid Name.";
        nme = false;
        document.getElementById("name").style.borderColor = "#FF0000";
    }
    
 } 

 let eml = false;
 function ValidateEmail(inputText) {
     // alert("mail");
     var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
     if (inputText.value.match(mailformat)) {
         eml = true;
         document.getElementById("email").style.borderColor = "#008000";
         document.getElementById("eremail").innerHTML = "";
     }
     else {
         //alert("You have entered an invalid email address!");
         document.getElementById("eremail").innerHTML = "You have entered an invalid email address!";
         eml = false;
         document.getElementById("email").style.borderColor = "#FF0000";
     }
 }

 dte = false;
function validDate(indate) {
    if(indate == null){
        document.getElementById("erdob").style.borderColor = "#FF0000";
    }
    else{
        document.getElementById("dob").style.borderColor = "#008000";
        dte = true;
    }
}

let pwd = false;
function CheckPassword(inputtxt) {
    var paswd = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
    if (inputtxt.value.match(paswd)) {
        //alert('Correct');
        pwd = true;
        document.getElementById("pass").style.borderColor = "#008000";
        document.getElementById("erpass").innerHTML = "";
    }
    else {
        //alert('Try another...!')
        document.getElementById("pass").style.borderColor = "#FF0000";
        document.getElementById("erpass").innerHTML = "password should contains alphabets & numbers size 6-20 and Specialcharacter";
        pwd = false;
        
    }
}
let conpwd=false;
function ConfPassword(inputtxt){
     let userconpass = document.querySelector("#conpass").value;
     if(inputtxt.value==userconpass){
        conpwd = true;
        document.getElementById("conpass").style.borderColor = "#008000";
        document.getElementById("erconpass").innerHTML = "";
     }
     else{
        
        document.getElementById("conpass").style.borderColor = "#FF0000";
        document.getElementById("erconpass").innerHTML = "password missmatch";
     }
}

existmail = false;
function emailExist(value) {
   
    let currentEmail = value;
    let existemail = JSON.parse(localStorage.getItem("RegisterInfo"));
    if (existemail != null) {
        var length = Object.keys(existemail).length;
        console.log(existemail);
        for (let i = 0; i < length; i++) {
            if (currentEmail == existemail[i].email) {
                // console.log(existemail[i].email);
                document.getElementById("email").style.borderColor = "#FF0000";
                document.getElementById("eremail").innerHTML = "Email is already registered..!! plz try with another..";
                //alert("Email is already registered..!!");
                return existmail = false;
            }
        }
        existmail = true;
        document.getElementById("eremail").innerHTML = "";
        document.getElementById("email").style.borderColor = "#008000";
    }
    else {
        existmail = true;
        document.getElementById("email").style.borderColor = "#008000";
    }

}
function adduser(){
    if (pwd == true && nme == true && eml == true && dte == true && conpwd) {
            let username = document.querySelector("#name").value;
            let userdob = document.querySelector("#dob").value;
            let useremail = document.querySelector("#email").value;
            let userpass = document.querySelector("#pass").value;
           
        let temp={"name":username,"DOB":userdob,"email":useremail,"password":userpass};
       
        document.querySelector("#form").reset();
        let RegisterInfo = localStorage.getItem("RegisterInfo");
        if(RegisterInfo==null){
            taskobj=[];
        }
        else{
            taskobj=JSON.parse(RegisterInfo);
        }
        taskobj.push(temp);
        console.log(taskobj);
        localStorage.setItem("RegisterInfo",JSON.stringify(taskobj));
	   alert("You Have Registerd successfully "+username);
    }else{
        resetColour();
    }
}
function resetColour() {
    if(nme == true){
        document.getElementById("name").style.borderColor = "#008000";
       
    }
    else{
        document.getElementById("name").style.borderColor = "#FF0000";
        
    }

    if(pwd == true){
        document.getElementById("pass").style.borderColor = "#008000";
    }
    else{
        document.getElementById("pass").style.borderColor = "#FF0000";
    }

    if(eml == true){
        document.getElementById("email").style.borderColor = "#008000";
    }
    else{
        document.getElementById("email").style.borderColor = "#FF0000";
    }

    if(dte == true){
        document.getElementById("dob").style.borderColor = "#008000";
    }
    else{
        document.getElementById("dob").style.borderColor = "#FF0000";
    }
    
    if(conpwd == true){
        document.getElementById("conpass").style.borderColor = "#008000";
    }
    else{
        document.getElementById("conpass").style.borderColor = "#FF0000";
    }
}

// this is my old code which validate after button is clicked

/*signUp();
function signUp(){
    

    register.addEventListener('click',function(){ 
   
        let username = document.querySelector("#name").value;
        document.querySelector("#ername").innerHTML="";
        if(username.trim()=="" || username.length<4 || username.length>25 || username.match(/[0-9]/g)){
            document.querySelector("#ername").innerHTML="Name is mandatory! and length b/w 4-25"
            return false;
        }
    
        let userdob = document.querySelector("#dob").value;
        document.querySelector("#erdob").innerHTML="";
        if(userdob.trim()==""){
            document.querySelector("#erdob").innerHTML="Enter DOB "
            return false;
        }
        let useremail = document.querySelector("#email").value;
        document.querySelector("#eremail").innerHTML="";
        if(useremail.trim()==""||!(useremail.match(/[@]/g)) || !(useremail.endsWith(".com"))){
            document.querySelector("#eremail").innerHTML="Enter Valid Email"
            return false;
        }
        let userpass = document.querySelector("#pass").value;
        document.querySelector("#erpass").innerHTML="";
        if(userpass.trim()=="" || userpass.length<6 || userpass.length>20 || !(userpass.match(/[a-zA-Z]/i)) ||  !(userpass.match(/[0-9]/g))){
            document.querySelector("#erpass").innerHTML="password should contains alphabets & numbers size 6-20 "
            return false; 
        }
        let userconpass = document.querySelector("#conpass").value;
        document.querySelector("#erconpass").innerHTML="";
        if(userpass!=userconpass){
            document.querySelector("#erconpass").innerHTML="Password missMatched!";
            return false
        }

        let temp={"name":username,"DOB":userdob,"email":useremail,"password":userpass};
       
        document.querySelector("#form").reset();
        let RegisterInfo = localStorage.getItem("RegisterInfo");
        if(RegisterInfo==null){
            taskobj=[];
        }
        else{
            taskobj=JSON.parse(RegisterInfo);
        }
        taskobj.push(temp);
        console.log(taskobj);
        localStorage.setItem("RegisterInfo",JSON.stringify(taskobj));
	   alert("You Have Registerd successfully "+username);
    })
}*/
