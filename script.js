let outputdisplay = document.getElementById("display");

function display(num){
    outputdisplay.value += num;
}
function calculate(){
    try{
        outputdisplay.value = eval(outputdisplay.value);
    }
    catch(error){
        outputdisplay.value = document.getElementById("display").innerHTML="Invalid Input";
        
    }
}
function clear1(){
    outputdisplay.value="";

}
function del(){
    outputdisplay.value = outputdisplay.value.slice(0,-1);
}






