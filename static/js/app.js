// from data.js
var tableData = data;

console.log(tableData);

// YOUR CODE HERE!

// Selecting the filter button
var Filter_Button = d3.select("#filter-btn");

// Selecting the Reset button
var Reset_Button = d3.select("#reset-btn");

// Selecting the Clear button
var Clear_Button = d3.select("#clear-btn");

// Getting a reference to the table body
var tbody = d3.select("tbody");


//Function for Retrieving Data 

function Retrieve_Data(data) {
	
	data.forEach((UFOData) => {
	  var row = tbody.append("tr");
	  Object.entries(UFOData).forEach(([key, value]) => {
		var cell = row.append("td");
		cell.text(value);
	  });
	});
}

//Function for Filtering Data 

function Filter_Data() {
	
	//Prevent page from refreshing in form
	d3.event.preventDefault();		
	
	// Getting the DateTime, City, State, Country & Shape Value
	var DateTime = d3.select("#datetime").property("value");
	
	//Filter Criteria
	var Filtered_Data = data;

	if (DateTime != ""){
    	Filtered_Data = Filtered_Data.filter(FilteredData => FilteredData.datetime === DateTime);
    }

    tbody.html("");
    Retrieve_Data(Filtered_Data);
}

//Function for Clearing Data 

function Clear_Data() {
	
	tbody.html("");
}

//Function for Resetting Data 

function Reset_Data() {
	
	
	tbody.html("");
	Retrieve_Data(tableData);
}


//Calling the Retrieve Data Function
Retrieve_Data(tableData);

//Calling Respective function based on CLick
Filter_Button.on("click", Filter_Data);
//Reset_Button.on("click", Reset_Data);
//Clear_Button.on("click", Clear_Data);