function drawTable() {

    var table = document.querySelector("table");

    for (let i = 0; i < 6; i++) {
        var row = document.createElement("tr");
        var row_content = "";

        for (let j = 0; j < 4; j++)  {
            row_content = row_content + ("<td id = '" + String(i*4 + j)  + "'>" + "</td>");
        }
        row.innerHTML = row_content;
        table.appendChild(row);
    }

    
}


function foo() {
    var pics = document.getElementsByTagName("img");
    for (var index = 0; index < pics.length; index++) {
           console.log(index);
           pics[index].addEventListener("click", function(index) {console.log(index)});
    }
    
    
}


drawTable()
foo()
