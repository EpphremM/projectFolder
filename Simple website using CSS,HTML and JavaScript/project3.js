let n=document.getElementById("navBar");
function toggelbtn(){
    if(n.style.maxHeight==="10px")
    {
        n.style.maxHeight="300px";
        n.style.transition="0.5s";
    }
  
else
{
    n.style.transition="0.5s";
    n.style.maxHeight="10px";
}

}