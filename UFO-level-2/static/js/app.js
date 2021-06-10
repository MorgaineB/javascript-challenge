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
//Select the form
var form = d3.select("#form")
//Create event handlers
button.on("click", runEnter);
form.on ("submit", runEnter);

//Complete the event handler function for the form
function runEnter() {

    //Prevent the page from refreshing
    d3.event.preventDefault();

    //Clear out the table
    tbody.html("");

    var filteredData = tableData;

    //Select the input element and get the raw HTML node
    var datetimeElement = d3.select("#datetime");
    //Get the value property of the input element
    var datetimeValue = datetimeElement.property("value");
    console.log(datetimeValue);

    //Select the input element for city
    var cityElement = d3.select("#city");
    //Get the value property of the input element
    var cityValue = cityElement.property("value");
    console.log(cityValue);

    //Select the input element for city
    var stateElement = d3.select("#state");
    //Get the value property of the input element
    var stateValue = stateElement.property("value");
    console.log(stateValue);

    //Filter the data
    if (datetimeValue.length > 0) {
        filteredData = filteredData.filter(sighting => sighting.datetime === datetimeValue);
    }
    if (cityValue.length > 0) {
        filteredData = filteredData.filter(sighting => sighting.city === cityValue);
    }
    if (stateValue.length > 0) {
        filteredData = filteredData.filter(sighting => sighting.state === stateValue);
    }

    //Add the filtered data only to the table
    filteredData.forEach(function(selections) {
        console.log(selections);
        // Append to the table like above
        var row = tbody.append("tr");
        Object.entries(selections).forEach(function([key, value]) {
            console.log(key, value);
            var cell = row.append("td");
            cell.text(value);
        });
    });
};
