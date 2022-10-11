console.log("DOM - Document Object Model");


// Ex 17

const myBandList = ["Gangsta", "Jedi Mind Tricks", "Athmosphere"];

// select the element
const container = document.getElementById("bands-list");

function addBands(arr) {
    // loop to create enough list elements for each element of the array 
    for (let i = 0; i < arr.length; i++) {
        // creating the li element
        let myLi = document.createElement("li");
        // console.log(myLi);
        // fill the li element with the elements of the array
        myLi.innerHTML = arr[i];
        // appending the li element to the container
        container.appendChild(myLi);
    }
}

addBands(myBandList);


// Ex 18

/**Write a function called addMultTable(rows, cols) that will create a multiplication 
table like this. Start with an empty HTML page that only contains a level 1 heading.
Your function should use the JavaScript DOM to insert an HTML table after the heading.
For example, if I call:
addMultTable(4, 8);
It will create an HTML table with 4 rows and 8 columns, and append it after the level 1 heading. */

const tbl = document.getElementById("tbl");

// const tableHead = document.getElementById("table-head");
// const tableBody = document.getElementById("table-body");

function addMultTable(rows, cols) {
    for (let i = 0; i < rows; i++) {
       let tableRow = document.createElement("tr");
       for (let j = 0; j < cols; j++) {
            if(i == 0) {
                let tableHeader = document.createElement("th");
                tableHeader.innerHTML = "else";
                tableRow.appendChild(tableHeader);
            } else {
                let tableData = document.createElement("td");
                tableData.innerHTML = "1";
                tableRow.appendChild(tableData);
            }
       }
       tbl.appendChild(tableRow);
    }
}





addMultTable(5,4);