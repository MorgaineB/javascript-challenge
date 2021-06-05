// from data.js
var tableData = data;
console.log(tableData);

// YOUR CODE HERE!
// Get a reference to the table body
var tbody = d3.select("tbody");

// Loop Through UFO Sighting data
tableData.forEach(function(ufoSighting) {
    console.log(ufoSighting);
    // Append each UFO Sighting object to a row
    var row = tbody.append("tr");
    // Use Object.entries to console.log each UFO Sighting object value
    Object.entries(ufoSighting).forEach(function([key, value]) {
        console.log(key, value);
        // Append a cell per UFO Sighting value
        var cell = row.append("td");
        cell.text(value);
    });
});

//Select the button
var button = d3.select("#filter-btn");
var form = d3.select("#form")
button.on("click", runEnter);
form.on ("submit", runEnter);

function runEnter() {

    d3.event.preventDefault();

    tbody.html("");

    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    console.log(inputValue);

    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
    console.log(filteredData);
};
