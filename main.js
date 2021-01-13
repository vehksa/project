document.getElementById("run").onclick = function hlight(e) {
    let field1 = document.getElementById("field1");
    let field2 = document.getElementById("field2");

    let field1Text = field1.innerHTML;
    let field2Text = field2.innerHTML;

    let max_value = Math.max(field1Text.length, field2Text.length);

    for (let i = max_value; i >= 0; i--) {
        let char1 = field1Text.charAt(i);
        let char2 = field2Text.charAt(i);

        if (char1 !== char2) {
            highlight(field1, i);
            highlight(field2, i);
        }
    }
}

function highlight(element, index) {
    var inputText = element;
    var innerHTML = inputText.innerHTML;
    if (index >= 0) {
        innerHTML = innerHTML.substring(0, index) + "<span class='highlight'>" + innerHTML.substring(index, index + 1) + "</span>" + innerHTML.substring(index + 1);
        inputText.innerHTML = innerHTML;
    }
}

document.getElementById("clearbutton").onclick = function (e) {
    document.getElementById("field1").innerHTML = "";
    document.getElementById("field2").innerHTML = "";
}
