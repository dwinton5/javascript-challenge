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

    // Select the input date, state, shape and get the raw HTML nodes
    var dataEntered = d3.select("#input");
    // Get the value property of the input date, state, shape
    var dataValue = dataEntered.property("value");
    // Filter Data with datetime equal to input value
    var filterResult = tableData.filter(sighting => sighting.datetime === dataValue ||
                                                    sighting.city === dataValue ||
                                                    sighting.state === dataValue ||
                                                    sighting.country === dataValue ||
                                                    sighting.shape === dataValue);
    // console.log filter values
    console.log(filterResult);


    filterResult.forEach(function(selections) {

    console.log(selections);
    // Append one table row `tr` for each UFO Sighting object
    var row = tbody.append("tr");
    // Use `Object.entries` to console.log each UFO Sighting value
    Object.entries(selections).forEach(function([key, value]) {
        console.log(key, value);
        // Append a cell to the row for each value
        var cell = row.append("td");
        cell.text(value);
    });
});
});