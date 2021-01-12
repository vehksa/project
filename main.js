

document.getElementById("run").onclick = function hlight (e){ 
  var field1 = document.getElementById("field1").value;
  var field2 = document.getElementById("field2").value,
      text = '';
  field1.split('').forEach(function(val, i){
    if (val != field2.charAt(i))
    text += "<span class='highlight'>" + val+ "</span>";  
    else
    text += val; 
  });
  
  document.getElementById("field1").value = text;
}

document.getElementById("clearbutton").onclick = function(e) { 
    document.getElementById("field1").value = "";
    document.getElementById("field2").value = "";}
