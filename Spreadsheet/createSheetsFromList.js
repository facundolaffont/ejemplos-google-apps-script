/**
 * Creates every sheet with the same name as stored in the passed array
 * if the sheet doesn't exist in the active spreadsheet already.
 * 
 * @param {string[]} listOfSheets Array of names of the sheets to create.
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