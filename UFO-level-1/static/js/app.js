// from data.js
var tableData = data;

// Console.log the UFO Sightings data from data.js
console.log(tableData);

// Get a reference to the table body
var tbody = d3.select("tbody");

// UFO Sighting values for each column
// Following App fashioned from code created by drreenaagrawal @https://github.com/drreenaagrawal/javascript-challenge/blob/master/UFO-level-1/static/js/app1.js
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
var submit = d3.select("#filter-btn");

//Click filter to select datetime
submit.on("click", function() {

// Remove existing table
d3.select("tbody").html("");

// Prevent the page from refreshing
d3.event.preventDefault();

// Get the value property of the date entered
var dateEntered = d3.select("#datetime").property("value");
console.log(dateEntered);

// Filter reports according to the date entered
var filteredData = tableData.filter(record => record.datetime === dateEntered);
console.log(filteredData);

// Display the filtered dataset
filteredData.forEach((report) => {
    var row = tbody.append('tr');

    Object.entries(report).forEach(([key, value]) => {
        console.log(key, value);
        var cell = row.append('td');
        cell.text(value);
    });
});

});