function validation(){
    var res=document.getElementById("firstname").value
    if(res.length==0)
    {
        document.getElementById("fn").innerHTML="**First name should't be empty";
        document.getElementById("firstname").style.border="1px solid red"
        return false
    }
    if(res.length<3)
    {
        document.getElementById("fn").innerHTML="**The minimum length is 3";
        document.getElementById("firstname").style.border="1px solid red"
        return false
    }
    if(res.length>13)
    {
        document.getElementById("fn").innerHTML="**The maximum length is 13";
        document.getElementById("firstname").style.border="1px solid red"
        return false
    }
    var lres=document.getElementById("lastname").value
    if(lres.length==0)
    {
        document.getElementById("ln").innerHTML="**last name should't be empty";
        document.getElementById("lastname").style.border="1px solid red"
        return false
    }
    if(lres.length>15)
    {
        document.getElementById("ln").innerHTML="**The maximum length is 13";
        document.getElementById("lastname").style.border="1px solid red"
        return false
    }
    var moblie=document.getElementById("phone").value
     if(moblie.length==0)
     {
         document.getElementById("mobile").innerHTML="** phone number must be filled"
         return false
     }
    //  else if(isNaN(res))
    //  {
    //     document.getElementById("mobile").innerHTML="** phone number should conatain oly number"
    //     return false 
    //  }
     else if(moblie.length<10)
     {
        document.getElementById("mobile").innerHTML="**number length is less then 10 please check it"
        return false  
     }
     else if(moblie.length>10)
     {
        document.getElementById("mobile").innerHTML="**number length is more then 10 please check it"
        return false  
     }
     else if(moblie.charAt(0)<6)
     {
        document.getElementById("mobile").innerHTML="**number should start from 6 or 7 or 8 or 9"
        return false  
     }
    var pass=document.getElementById("password").value
    if(pass.length==0)
    {
        document.getElementById("apassword").innerHTML="please enter password"
        document.getElementById("password").style.border="1px solid red"
        return false
    }
    if(pass.length<6)
    {
        document.getElementById("apassword").innerHTML="minimum length is 6"
        document.getElementById("password").style.border="1px solid red"
        return false
    }
    if(pass.length>10)
    {
        document.getElementById("apassword").innerHTML="maximum length is 10"
        document.getElementById("password").style.border="1px solid red"
        return false
    }
    var cpass=document.getElementById("confirm_pass").value
    if(cpass.length==0)
    {
        document.getElementById("cpassword").innerHTML="please fill he field"
        document.getElementById("confirm_pass").style.border="1px solid red"
        return false
    }
     if(pass!=cpass)
     {
         document.getElementById("cpassword").innerHTML="password and confirm passworrd must match"
         document.getElementById("confirm_pass").style.border="1px solid red"
         return false
     }
     

}