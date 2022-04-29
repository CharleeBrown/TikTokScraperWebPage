// SUMMARY: This script will generate a table for query results.
// The number of cells will be four for testing.



var tableMain = document.createElement('table');

var tableHead = document.createElement('th');
var docBody = document.getElementsByTagName('body');





function tableMade(numbers){
	let tableRow = document.createElement('tr');
	tableMain.style.border = "1px solid black";
	tableMain.style.borderCollapse = 'collapse';
	
	for(var i = 0; i < numbers; i++){
		let tableRow1 = document.createElement('tr');
		var tableCell = document.createElement('td');
		
		tableCell.style.border = "1px solid black";
		tableCell.style.width = "80px";
		tableCell.style.height= "80px";
		tableRow.appendChild(tableCell);
		if(i%5==0 && i !=0){
			
			//tableMain.appendChild(tableRow);
			
			tableMain.appendChild(tableRow1);
			
		}
	}
	
		console.log("test");
	docBody[0].appendChild(tableMain);
	
}






