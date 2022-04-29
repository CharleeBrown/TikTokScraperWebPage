// SUMMARY: This script will generate a table for query results.
// The number of cells will be four for testing.


//Table itself
var tableMain = document.createElement('table');

//Header
var tableHead = document.createElement('thead');

// Header Row
var headRow = document.createElement('tr');

//Body variable
var docBody = document.getElementsByTagName('body');

//Header Cells
var headCell = document.createElement('th');

function tableMade(numbers){
	let tableRow = document.createElement('tr');
	
	//Table Styling
	headCell.style.width = "30px";
	headCell.style.height = "30px";
	tableMain.style.border = "1px solid black";
	tableMain.style.borderCollapse = 'collapse';
	tableMain.style.margin= "0 auto";
	headCell.style.border="1px solid black";
	headCell.colSpan="5";
	tableHead.style.height = "30px";

	headRow.appendChild(headCell);
	headRow.appendChild(headCell);

	tableHead.appendChild(headRow);
	tableMain.appendChild(tableHead);


	for(var i = 0; i < numbers; i++){
		let tableRow1 = document.createElement('tr');
		let tableCell = document.createElement('td');
		
		tableCell.style.border = "1px solid black";
		tableCell.style.width = "80px";
		tableCell.style.height= "80px";
		tableRow.appendChild(tableCell);
		
		//If the index is 5, append the row to the table, create a new row.
		if(i%5==0 && i !=0){
			
			tableRow1 = tableRow;
			tableMain.appendChild(tableRow1);
			
		}
	}
	docBody[0].appendChild(tableMain);
	
}






