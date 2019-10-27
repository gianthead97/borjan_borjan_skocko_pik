
function drawTable() {

    var table = document.createElement("div");
    table.setAttribute("class", "div-table");
    for (let i = 0; i < numOfFields; i++) {
        var row = document.createElement("div");
        row.setAttribute("class", "div-table-row");
        row.setAttribute("id", "row" + i);
        var row_content = "";

        for (let j = 0; j < 4; j++)  {
            row_content = row_content + ("<div id = x" + String(i*4 + j)  + " class = div-table-col>" + "</div>");
        }
        row.innerHTML = row_content;
        table.appendChild(row);
    }
    document.body.appendChild(table);
}

function drawResult(index = -1) {

    var skeleton = document.createElement("div");
    skeleton.setAttribute("id", "res");


    document.body.appendChild(skeleton);
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
    
    if (row_indicator == 0)
        return true;
    else
        return confirmedRows[row_indicator-1];
}


var numOfFields = 6;
var colors = ["red.png", "yellow.png", "black.png"];
var solution = [1, 0, 5, 3];
var playerToNum = {
    "pavkov.png" : 0,
    "boakye.png" : 1,
    "borjan.png" : 2,
    "degenek.png" : 3,
    "marin.png" : 4,
    "ivanic.png" : 5
};


function solveRedYellow(tmp_result) {
    var red_fields = 0;
    var yellow_fields = 0;
    for (let i = 0; i < 4; i++) {
        red_fields = tmp_result[i] === solution[i] ? red_fields+1 : red_fields;
    }

    solution_bucket = Array(numOfFields).fill(0);
    result_bucket = Array(numOfFields).fill(0);
    for (let i = 0; i < 4; i++) {
        solution_bucket[solution[i]]++;
        result_bucket[tmp_result[i]]++;
    }
    for (let i = 0; i < numOfFields; i++) {
        if (solution_bucket[i] > 0 && result_bucket[i] > 0)
            yellow_fields += Math.min(solution_bucket[i], result_bucket[i]);
    }

    return [red_fields, yellow_fields - red_fields];
}


function generateColors(result) {
    var colPic = [];
    for (let i = 0; i < result[0]; i++) {
        var element = document.createElement("img");
        element.setAttribute("src", colors[0]);
        colPic.push(element)
    }

    for (let i = 0; i < result[1]; i++) {
        var element = document.createElement("img");
        element.setAttribute("src", colors[1]);
        colPic.push(element);
    }


    for (let i = 0; i < 4 - result[0] - result[1]; i++) {
        var element = document.createElement("img");
        element.setAttribute("src", colors[2]);
        colPic.push(element);
    }

    console.log(colPic);
    colPic.forEach((e) => {
        document.body.appendChild(e);
        e.setAttribute("class", "boje");
    });

}

function checkResult(index) {
    var row = document.querySelector("#row" + index);
    var input = []
    var divs = row.childNodes;
    for (const div of divs) {
        if (div.nodeName !== "BUTTON") {
            for (let pic of div.childNodes) {
                input.push(playerToNum[pic.getAttribute("src")]);
            }
        }
    }
    
    var result = solveRedYellow(input);
    generateColors(result);
    
}

function confirmRow(confirmedRows, index) {
    id = parseInt(this.getAttribute("id"));
    confirmedRows[index] = true;

    checkResult(index);
    
}

function generateButton(index, confirmedRows) {
    var button = document.createElement("button");
    button.setAttribute("id", String(index));
    button.innerHTML = "POTVRDI";
    button.addEventListener("click", confirmRow.bind(button, confirmedRows, index));

    document.getElementById("row" + index).appendChild(button);
}

function initListener(matrix) {
    var confirmedRows = Array(numOfFields).fill(false);
    var finishedRows = Array(numOfFields).fill(false);
    var pics = document.getElementsByTagName("img");
    for (var index = 0; index < pics.length; index++) 
           pics[index].addEventListener("click", function () {
               var player = this.getAttribute("src");
               var emptyFields = findFirstFalse(matrix);
               if (previousRowConfirmed(emptyFields[0], confirmedRows)) {
                   matrix[emptyFields[0]][emptyFields[1]] = true;
                   if (emptyFields[1] == 3) {
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


function play() {
    var matrix = Array(numOfFields);
    for (let i = 0; i < matrix.length; i++)
        matrix[i] = Array(4).fill(false);


    initListener(matrix);
}

drawTable();

play();