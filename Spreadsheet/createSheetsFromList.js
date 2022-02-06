/**
 * Creates every sheet with the same name as stored in the passed array
 * if the sheet doesn't exist in the active spreadsheet already.
 * 
 * @param {string[]} listOfSheets Array of names of the sheets to create.
 * @todo Make the function to admit common modifications appliable to every
 * created sheet.
 */
function createSheetsFromList(listOfSheets) {
    let activeSpreadsheet = SpreadsheetApp
      .getActiveSpreadsheet();
    
    let searchedSheet;
    listOfSheets.forEach(element => {    
      searchedSheet = activeSpreadsheet
        .getSheetByName(element);
      if(searchedSheet == null)
        activeSpreadsheet.insertSheet(element);
    });
}