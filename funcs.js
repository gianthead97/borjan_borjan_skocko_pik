function drawTable() {
    for (let i = 0; i < 6; i++) {
        document.write("<tr>")
        for (let j = 0; j < 4; j++) {
            document.write("<td id = '" + String(i*4 + j)  + "'>" + "</td>" )
        }
        document.write("</tr>")
    }

}


function foo() {
    console.log(1);
    var pics = Array.prototype.slice.call(document.getElementsByTagName("img"));
    for (var index = 0; index < pics.length; index++) {
        window.alert(index);
        console.log(1)    
    }
    
    
}
