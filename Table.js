function tablecreator() {
    var num = document.getElementById("number").value;
    if (num > 0) {
        var table = "";
        for (i = 1; i <= 10; i++){
            table += num + " x " + i+ " = " + i * num + "<br>"
        } 
        document.getElementById("table").innerHTML = table;
    } 
} 