var email = document.querySelector("#email");
var pass = document.querySelector("#pass");
var emailvalid = false;
var passvalid=false;

document.querySelector("#login").addEventListener('click', function(){
    let data = JSON.parse(localStorage.getItem("RegisterInfo"));
    if(data==null){
        data=[];
    }
    data.forEach(validate);
    // window.location.href="WishList.html";
    if(emailvalid){
        document.querySelector("#erpass").innerHTML="Wrong Password";
    }
    else{
        document.querySelector("#eremail").innerHTML="Email doesn't Registerd how can you login , plz signup first";
    }
    emailvalid=false;
    passvalid=false;
});

function validate(item){
    document.querySelector("#erpass").innerHTML="";
    document.querySelector("#eremail").innerHTML="";
    if((item.email)==(email.value)){
        emailvalid=true;
    }
    if(((item.email)==(email.value)) && ((item.password)==(pass.value))){
        passvalid=true;
    }
    if(emailvalid && passvalid){
        var lockal = sessionStorage.getItem("name");
        lockal=[];
        lockal.push(item.name);
        lockal.push(item.email);
        sessionStorage.setItem("name",JSON.stringify(lockal))
        window.location.href="WishList.html";
        emailvalid=false;
        passvalid=false;
    }
}

function checkEmailExist(){
    let data = JSON.parse(localStorage.getItem("RegisterInfo"));
    if(data==null){
        data=[];
    }
    data.forEach(validate);
    // window.location.href="WishList.html";
    if(emailvalid){
        document.querySelector("#erpass").innerHTML="Wrong Password";
    }
    else{
        document.querySelector("#eremail").innerHTML="Email doesn't Registerd how can you login , plz signup first";
    }
    emailvalid=false;
    passvalid=false;
}