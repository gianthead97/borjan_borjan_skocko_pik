function drawTable() {

    var table = document.querySelector("table");

    for (let i = 0; i < 6; i++) {
        var row = document.createElement("tr");
        var row_content = "";

        for (let j = 0; j < 4; j++)  {
            row_content = row_content + ("<td id = x" + String(i*4 + j)  + ">" + "</td>");
        }
        row.innerHTML = row_content;
        table.appendChild(row);
    }

    
}

function findFirstFalse(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (!matrix[i][j])
                return [i, j];
        }
    }

    return [-1, -1];
}


function initListener(matrix) {
    var pics = document.getElementsByTagName("img");
    for (var index = 0; index < pics.length; index++) 
           pics[index].addEventListener("click", function () {
               var player = this.getAttribute("src");
               var emptyFields = findFirstFalse(matrix); 
               matrix[emptyFields[0]][emptyFields[1]] = true;
               var query = "#x" + String(emptyFields[0] * 4 + emptyFields[1]);
               var image = document.createElement("img");
               image.setAttribute("src", player);
               document.querySelector(query).appendChild(image);

           },
        false)
}




function startGame() {

}

function notFilledRow(i, matrix) {
    return matrix[i].some(elem => {return elem == false});
}

function play() {
    var matrix = Array(6);
    for (let i = 0; i < matrix.length; i++)
        matrix[i] = Array(4).fill(false);

    console.log(matrix)

    initListener(matrix);
    for (let i = 0; i < 6; i++) {
        var j = 0;
        while (notFilledRow(i, matrix)) {
            
        }
    }
}

drawTable();

startGame();
play();