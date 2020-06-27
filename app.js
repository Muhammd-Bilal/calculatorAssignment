function getNumber(num){
  
    var result = document.getElementById("result");
    result.value += num;

}
function clearResult(){
    var result = document.getElementById("result");
     result.value = "";
     result2.value= "";

}

 function getResult(){
     var result2 = document.getElementById("result2");
     result2.value =eval(result.value);
 }