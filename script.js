//steps
//1.create req var issue req the http req by creating an insance of
//xml http req
//2.open a connection
//3.send the request.
//4.load the response once its ready.

//1.create req

var request=new XMLHttpRequest();

//2.open connection
//insde open(method,url,true if error occurs should not affect rest of code for that true )
 request.open('GET','https://restcountries.eu/rest/v2/all','true')

//3.send thr req
request.send();
//4.response callback fun is used
request.onload=function(){

var data =JSON.parse(this.response);

console.log(data)
population=0;
//1.Get all the countries from Asia continent /region using Filter function 
var asiaCountries=data.filter(ele => ele.region==='Asia');
console.log(asiaCountries);

//2.Get all the countries with population of less than 2 lacs using Filter function

var populationLessThen2Lakhs=data.filter(ele => ele.population<200000)
console.log(populationLessThen2Lakhs)

//3.Print the following details name, capital, flag using forEach function.

data.forEach(demo)
function demo(element){
console.log("Name:"+element.name)
console.log("Capital:"+ element.capital)
console.log("flag:"+ element.flag)

}

//4.Print the total population of countries using reduce function

totalPopulation=data.reduce(function(accumulator,currentValue){
return accumulator + currentValue.population
},0)
console.log(totalPopulation)

//5.Print the country which use US Dollars as currency
var usd_currency=data.filter((item) =>{
   let flag=false;
   item.currencies.forEach(element =>{
       if(element.code==='USD')
       {
           flag=true;
       }
   })  
if(flag==true){
 return true}
 else{
return false;
 }
});
console.log(usd_currency)





}



