function valid()
{
    var res=document.getElementById("one").value
    var ss="abc"
    var res1=document.getElementById("two").value
    var dd="tech"
    if(res==0)
    {
        document.getElementById("msg1").innerHTML="** username filed shouln't be empty"
        return false
    }
    else if(res!=ss)
    {
        document.getElementById("msg1").innerHTML="** enter valid user name"
        return false 
    }
    if(res1==0)
    {
        document.getElementById("msg2").innerHTML="** username filed shouln't be empty"
        return false 
    }
    else if(res1!=dd){
        document.getElementById("msg2").innerHTML="** enter valid password"
        return false  
    }
}
