/**
 * Returns true if the text stored in the named range already exists
 * in a destination sheet range.
 * 
 * @param {string} namedRange The named range that contains the value to search for.
 * @param {string} destSheetName The name of the sheet to search in.
 * @param {string} destNamedRange The destination named range to search in.
 * @return {boolean} true, if already exists in DB, or false, if not.
 */
 function isTextRepeatedInOtherSheetRange(namedRange, destSheetName, destNamedRange) {
    let destSheet = SpreadsheetApp
      .getActiveSpreadsheet()
      .getSheetByName(destSheetName);
    let destRange = destSheet.getRange(destNamedRange);
  
    if(destRange.isBlank()) {
      return false;
    } else {
      let textSearched = SpreadsheetApp
        .getActiveSpreadsheet()
        .getRangeByName(namedRange)
        .getRichTextValue()
        .getText();
  
      // Specifies destination range limits properly.
      let destRangeLastColumn = destRange.getLastColumn();
      let destRangeLastRow = destRange.getLastRow();
      let destSheetLastColumn = destSheet.getLastColumn();
      let destSheetLastRow = destSheet.getLastRow();
      if(destSheetLastColumn < destRangeLastColumn) {
        destRangeLastColumn = destSheetLastColumn;
      }
      if(destSheetLastRow < destRangeLastRow) {
        destRangeLastRow = destSheetLastRow;
      }
  
      let isRepeated = false;
      let textFound;
      let rowIndex = 1;
      let columnIndex = 1;
      let destRangeColumnCount = destRangeLastColumn - destRange.getColumn() + 1;
      let destRangeRowCount = destRangeLastRow - destRange.getRow() + 1;
      while (isRepeated == false && rowIndex <= destRangeRowCount) {
        while (isRepeated == false && columnIndex <= destRangeColumnCount) {
          textFound = destRange
            .getCell(rowIndex, columnIndex)
            .getRichTextValue()
            .getText();
          if(textFound == textSearched)
            isRepeated = true;
          else
            columnIndex++;
        }
        if(!isRepeated) {
          columnIndex = 1;
          rowIndex++;
        }
      }
  
      return isRepeated;
    }
  }