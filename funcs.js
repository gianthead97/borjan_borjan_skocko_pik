
function drawTable() {

    var table = document.createElement("div");
    table.setAttribute("class", "div-table");
    for (let i = 0; i < 6; i++) {
        var row = document.createElement("div");
        row.setAttribute("class", "div-table-row");
        var row_content = "";

        for (let j = 0; j < 4; j++)  {
            row_content = row_content + ("<div id = x" + String(i*4 + j)  + " class = div-table-col>" + "</div>");
        }
        row.innerHTML = row_content;
        table.appendChild(row);
    }

    document.body.appendChild(table);
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


function previousRowConfirmed(row_indicator, confirmedRows) {
    console.log("previous");
    console.log(confirmedRows);
    if (row_indicator == 0)
        return true;
    else
        return confirmedRows[row_indicator-1];
}


function confirmRow(confirmedRows, index) {
    console.log("confirm row");
    id = parseInt(this.getAttribute("id"));
    confirmedRows[index] = true;
    
}

function generateButton(index, confirmedRows) {
    var button = document.createElement("button");
    button.setAttribute("id", String(index));
    button.innerHTML = "POTVRDI";
    button.addEventListener("click", confirmRow.bind(button, confirmedRows, index));
    console.log(index);
    document.body.appendChild(button);
}

function initListener(matrix) {
    var confirmedRows = Array(6).fill(false);
    var finishedRows = Array(6).fill(false);
    var pics = document.getElementsByTagName("img");
    for (var index = 0; index < pics.length; index++) 
           pics[index].addEventListener("click", function () {
               var player = this.getAttribute("src");
               var emptyFields = findFirstFalse(matrix);
               if (previousRowConfirmed(emptyFields[0], confirmedRows)) {
                   matrix[emptyFields[0]][emptyFields[1]] = true;
                   if (emptyFields[1] == 3) {
                       console.log("here");
                       finishedRows[emptyFields[0]] = true;
                       generateButton(emptyFields[0], confirmedRows);
                   }
                   var query = "#x" + String(emptyFields[0] * 4 + emptyFields[1]);
                   var image = document.createElement("img");
                   image.setAttribute("src", player);
                   document.querySelector(query).appendChild(image);
                }
           },
        false)
}






function notFilledRow(i, matrix) {
    return matrix[i].some(elem => {return elem == false});
}

function play() {
    var confirmedRows = Array(6).fill(false);
    var finishedRows = Array(6).fill(false);
    var matrix = Array(6);
    for (let i = 0; i < matrix.length; i++)
        matrix[i] = Array(4).fill(false);


    initListener(matrix);
    for (let i = 0; i < 6; i++) {
        if (notFilledRow(i, matrix))
            break;
        
    }
}

drawTable();

play();