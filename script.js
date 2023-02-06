function whenclicked(element)
{
    //Check if it is an operator or a number
   document.getElementById("answer").value= (document.getElementById("answer").value+document.getElementById(element).value).toString();

}
function equal()
{
    element =document.getElementById("answer");
    element.value=eval(element.value.toString());
}

function c(){
    document.getElementById("answer").value="";
}
