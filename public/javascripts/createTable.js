// SUMMARY: This script will generate a table for query results.
// The number of cells will be four for testing.

const cells = 4;
var tableCell = document.createElement('td');
var tableMain = document.createElement('table');
var tableRow = document.createElement('tr');
var tableHead = document.createElement('th');
var docBody = document.getElementsByTagName('body');



tableMain.style.border = "1px solid black";
tableMain.style.borderCollapse = 'collapse';

function tableMade(numbers){
	for(var i = 0; i < numbers; i++){
		
		tableRow.appendChild(tableCell);
		tableMain.append(tableRow);
		console.log("test");
	}
	
	docBody[0].appendChild(tableMain);
	
}

tableMade(10);




