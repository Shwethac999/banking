document.getElementById("btn").addEventListener("click" , disp )


function disp(){
var amount=document.getElementById("amount").value
console.log(amount)
var select=document.getElementById("entry").value
console.log(select)

function ss(select){
if(select==="Deposit")
{
    var balance=document.getElementById("total_balance").innerHTML
    console.log(balance)
    var sum=Number(balance)+Number(amount)
    console.log(sum)
    return sum;
}
 else if(select==="WithDraw"){
    var balance=document.getElementById("total_balance").innerHTML
    console.log(balance)
    var sum=Number(balance)-Number(amount)
    console.log(sum)
    return sum;
 }
}
 var res=ss(select)
 console.log(res)
 document.getElementById("total_balance").innerHTML=res

 function dep(select)
 {
    
     if(select==="Deposit")
     {
          var balance=document.getElementById("deposit1").innerHTML
          var sum=Number(balance)+Number(amount)
    console.log(sum)
    return sum;   
     }
      else if(select==="WithDraw")
     {
          var balance=document.getElementById("deposit2").innerHTML
          var sum=(Number(balance)-Number(amount))
    console.log(sum)
    return sum;   
     }
 }
 var result=dep(select)
 console.log(result)
var reason=document.getElementById("disc").value
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
console.log(date)
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
console.log(time)

function display1(select,result)
{
    
    if(select==="Deposit"){
    document.getElementById("deposit1").innerHTML=result 
 
 var display=document.getElementById("total_deposit")
var newRow=display.insertRow();
var cell1=newRow.insertCell(0);
var cell2=newRow.insertCell(1);
var cell3=newRow.insertCell(2);
var cell4=newRow.insertCell(3);

cell1.innerHTML=date;
cell2.innerHTML=time;
cell3.innerHTML=amount;
cell4.innerHTML=reason;
    }
else if(select==="WithDraw"){
    document.getElementById("deposit2").innerHTML=result
 
 var display=document.getElementById("total_deposit1")
var newRow=display.insertRow();
var cell1=newRow.insertCell(0);
var cell2=newRow.insertCell(1);
var cell3=newRow.insertCell(2);
var cell4=newRow.insertCell(3);

cell1.innerHTML=date;
cell2.innerHTML=time;
cell3.innerHTML=amount;
cell4.innerHTML=reason;
}
}
display1(select,result)
}
