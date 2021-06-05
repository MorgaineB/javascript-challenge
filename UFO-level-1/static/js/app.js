// from data.js
var tableData = data;
console.log(tableData);

// YOUR CODE HERE!
// Get a reference to the table body
var tbody = d3.select("tbody");

// Loop through the data and console.log each UFO sighting object
data.forEach(function(UFOReport) {
    console.log(UFOReport);
    //Append one table row 'tr' for each UFO sighting object
    var row = tbody.append("tr")

    // Use 'Object.entries' to console.log each UFO sighting value
    Object.entries(UFOReport).forEach(function([key, value]) {
        console.log(key, value);
        //Append a cell to the row for each value in the UFOReport object
        var cell = row.append("td");
        // Update each cell with UFO sighting info
        cell.text(value);
    });
});

// Getting a reference to the Filter Table button
var button = d3.select("#filter-btn");
button.on("click", function() {

    d3.event.preventDefault();
    
    tbody.html("");

    // Getting a reference to the input element 
  var inputField = d3.select("#datetime");
  // Get the value property of the input element
  var inputValue = inputElement.property("value");
  console.log(inputValue)
  // Filter the UFO Sighting data based on input date
  var filteredData = data.filter(sighting => sighting.datetime === inputValue);
  console.log(filteredData);

  filteredData.forEach(function(selections) {

    console.log(selections);
    var row = tbody.append("tr");
    Object.entries(selections).forEach(function([key, value]) {
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
    });
  });

});