function CopyData() {
  var activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var destinationSpreadsheet = SpreadsheetApp.openById("1TbDH39D0O6fAQ4zjy-paNb4df2LhK6CU83Al0Al030s"); // Returns a spreadsheet by ID.
  var originSheet = activeSpreadsheet.getSheetByName("Facturas recibidas");
 
  // Saved the data that is going to be copied.
  var data = originSheet.getRange("B1:B9");

  var destinationSheet = destinationSpreadsheet.getSheetByName("Facturas recibidas (desde 2021)");
  var destinationRow = destinationSheet.getLastRow(); // Gets the last used row.
  
  // Copia los valores a la página destino.
  // Copy the values to the destination sheet.
  for (var i = 1; i <= 9 ; i++) {
    var paste = destinationSheet.getRange(destinationRow + 1, i + 1).setValues(data.getCell(i,1).getValues());
  }
}