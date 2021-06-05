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
    });
});