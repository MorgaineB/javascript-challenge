// from data.js
var tableData = data;
console.log(tableData);

// YOUR CODE HERE!
// Get a reference to the table body
var tbody = d3.select("tbody");

// Loop Through UFO Sighting data
tableData.forEach(function(sighting) {
    console.log(sighting);
    // Append each UFO Sighting object to a row
    var row = tbody.append("tr");
    // Use Object.entries to console.log each UFO Sighting object value
    Object.entries(sighting).forEach(function([key, value]) {
        console.log(key, value);
        // Append a cell per UFO Sighting value
        var cell = row.append("td");
        cell.text(value);
    });
});
