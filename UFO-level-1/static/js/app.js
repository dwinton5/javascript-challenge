// from data.js
var tableData = data;

// Console.log the UFO Sightings data from data.js
console.log(tableData);

// Get a reference to the table body
var tbody = d3.select("tbody");

// UFO Sighting values for each column
// Following App fashioned from code created by deepenrp @https://github.com/deepenrp/javascript-challenge/blob/master/UFO-level-1/static/js/app.js
tableData.forEach(function(ufoSighting) {
    console.log(ufoSighting);
    // Append one table row `tr` for each UFO Sighting object
    var row = tbody.append("tr");

    // Use `Object.entries` to console.log each UFO Sighting value
    Object.entries(ufoSighting).forEach(function([key, value]) {
      console.log(key, value);
      // Append a cell to the row for each value
      var cell = row.append("td");
      cell.text(value);
    });
  });


// Select the button
var button = d3.select("#filter-btn");
button.on("click", function() {

    tbody.html("");

    // Enter date for filtered search result
    var dateEntered = d3.select("#input");
    // Get the table values associated with the date entered
    var dateValue = dateEntered.d3.property("value");
    // console.log input value
    // console.log(dateValue);
    // Filter Data with datetime equal to value entered
    var filterResult = tableData.filter(sighting => sighting.datetime === dateValue);
    // console.log filter values
    console.log(filterResult);


    filterResult.forEach(function(selection) {

    console.log(selection);
    // Append one table row `tr` for each UFO Sighting object
    var row = tbody.append("tr");
    // Use `Object.entries` to console.log each UFO Sighting value
    Object.entries(selection).forEach(function([key, value]) {
        console.log(key, value);
        // Append a cell to the row for each value
        var cell = row.append("td");
        cell.text(value);
    });
});
});