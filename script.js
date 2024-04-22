function insert_Row() {
    // Get the reference for the table
    var table = document.getElementById('sampleTable');
    
    // Insert a new row at the top
    var newRow = table.insertRow(0);

    // Insert a new cell in the row at index 0
    var cell1 = newRow.insertCell(0);
    // Set the cell's value to "New Cell1"
    cell1.innerHTML = 'New Cell1';

    // Insert a new cell in the row at index 1
    var cell2 = newRow.insertCell(1);
    // Set the cell's value to "New Cell2"
    cell2.innerHTML = 'New Cell2';
}
