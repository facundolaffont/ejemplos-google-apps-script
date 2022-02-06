/**
 * Deletes every sheet with the same name as stored in the passed array if the sheet
 * already exists in the active spreadsheet.
 * 
 * @param {string[]} listOfSheets Array of names of the sheets to delete.
 */
function deleteSheetsFromList(listOfSheets) {
    let activeSpreadsheet = SpreadsheetApp
        .getActiveSpreadsheet();
    
    let searchedSheet;
    listOfSheets.forEach(element => {    
        searchedSheet = activeSpreadsheet
        .getSheetByName(element);
        if(searchedSheet != null)
        activeSpreadsheet.deleteSheet(searchedSheet);
    });
}