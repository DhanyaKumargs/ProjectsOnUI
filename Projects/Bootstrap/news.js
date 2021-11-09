var apiKey = '46dd57ab967846988fe138f27bf093c1';
var baseUrl = 'https://newsapi.org/v2/top-headlines';
var countries =[{id:"in",coun:"INDIA"},{id:"us",coun:"USA"},{id:"nz",coun:"NEWZELAND"},{id:"au",coun:"AUSTRAILIA"},{id:"ru",coun:"RUSSIA"},{id:"jp",coun:"JAPAN"}];
var categories =["business","technology","sports","entertainment","science","general","health"];
var tem=[];
getSelectCountry();
getSelectCategory();
getnews();

function getnews(){
    const country=document.querySelector("#selectedCountry").value ;
    const category=document.querySelector("#selectedCategory").value ;
    const query = document.querySelector("#searchByTxt").value;
    let url="";
    if(query==""){
         url = `${baseUrl}?country=${country}&category=${category}&apikey=${apiKey}`;
    }else{
         url = `${baseUrl}?country=${country}&category=${category}&q=${query}&apikey=${apiKey}`;
    }
	let news=[];
    fetch(url).then(res => res.json()).then(
        result => {
            console.log(result);
			news = result['articles'];
            temp=news;
			showNews(news);
        });
}

function getSelectCategory(){
        const categoryId = document.querySelector("#categoryId");
        let SelectCategory = `<select class="form-control bg-primary text-white" id="selectedCategory">`;
        categories.forEach(category =>{
            SelectCategory += `<option value=${category}>${category}</Option>`
        });
        SelectCategory +=`</select>`;
        categoryId.innerHTML=SelectCategory;

}

function  getSelectCountry(){
        const countryId = document.querySelector("#countryId");
        let selectCountry =`<select class="form-control bg-primary text-white" id="selectedCountry">`;
        countries.forEach(country =>{
            selectCountry += `<option value=${country.id}>${country.coun}</Option>`
        });
        selectCountry +=`</select>`;
        countryId.innerHTML=selectCountry;
}

function showNews(news){
	const newsItem = document.querySelector("#newsItem");
    const changeItem = document.querySelector("#newsItemColumn");
    let data = '';
    changeItem.innerHTML=data;
    news.forEach(element => {
        data += `<div class="col-md-3">
        <div class="card" style="width:20rem;">
        <img src="${element['urlToImage']}" class="card-img-top" alt="...">
        <div class="card-body">
        <h4 class="card-title">${element['title']}</h4>
		<h6>Author:${element['author']}</h6>
		<a href="${element['url']}" class="btn btn-primary">To see More Click Here</a>
        </div>
        </div>
        </div>`
        
    });
    newsItem.innerHTML=data;
	
	
}
function showNewsColoumn(){
    showNewsColoumn(temp);
}
function showNewsColoumn(temp){
	const newsItem = document.querySelector("#newsItemColumn");
    const changeItem = document.querySelector("#newsItem");
    let data = '';
    changeItem.innerHTML=data;
    temp.forEach(element => {
        data += `<div class="col-md-3">
        <div class="card" style="width:20rem;">
        <img src="${element['urlToImage']}" class="card-img-top" alt="...">
        <div class="card-body">
        <h4 class="card-title">${element['title']}</h4>
		<h6>Author:${element['author']}</h6>
		<a href="${element['url']}" class="btn btn-primary">To see More Click Here</a>
        </div>
        </div>
        </div>`
        
    });
    newsItem.innerHTML=data;
	
	
}