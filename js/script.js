function displayvalue(val){
    document.getElementById("display").value=document.getElementById("display").value+val;

}
function cleardisplay(){
    document.getElementById("display").value=" ";
}
function calculator(){
    document.getElementById("display").value;
    var userInput=document.getElementById("display").value;
    var result=eval(userInput);
    document.getElementById("display").value=result;
}
function del() {
    let dis=document.getElementById("display").value;
    document.getElementById("display").value= dis.substring(0, dis.length -1);
}