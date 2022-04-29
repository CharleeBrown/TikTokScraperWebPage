// SUMMARY: This script will generate a table for query results.
// The number of cells will be four for testing.



var tableMain = document.createElement('table');

var tableHead = document.createElement('thead');
var headRow = document.createElement('tr');
var docBody = document.getElementsByTagName('body');
var headCell = document.createElement('th');
headCell.style.width = "30px";
headCell.style.height = "30px";




function tableMade(numbers){
	let tableRow = document.createElement('tr');

	tableMain.style.border = "1px solid black";
	tableMain.style.borderCollapse = 'collapse';
	tableMain.style.margin= "0 auto";
	headCell.style.border="1px solid black";
	headCell.colSpan="5";
	headRow.appendChild(headCell);
	headRow.appendChild(headCell);

	tableHead.style.height = "30px";
	tableHead.appendChild(headRow);


	tableMain.appendChild(tableHead)
	for(var i = 0; i < numbers; i++){
		let tableRow1 = document.createElement('tr');
		var tableCell = document.createElement('td');
		
		tableCell.style.border = "1px solid black";
		tableCell.style.width = "80px";
		tableCell.style.height= "80px";
		tableRow.appendChild(tableCell);
		if(i%5==0 && i !=0){
			console.log(i%4);
			//tableMain.appendChild(tableRow);
			tableRow1 = tableRow;
			tableMain.appendChild(tableRow1);
			
		}
	}
	
		console.log("test");
	docBody[0].appendChild(tableMain);
	
}






