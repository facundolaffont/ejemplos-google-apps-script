/**
 * Returns a two dimensional array of a named range with its
 * blank values filtered. Each row in the range that has at
 * least one non-blank value and one blank value is included
 * in the resulting range with its non-blank values only; each
 * row that has only non-blank values is included as is; and
 * each row that has only blank values is excluded.
 * 
 * @param {string} namedRange The named range which is going
 * to be filtered.
 * @return {Range} The filtered range.
 */
 function wipeNonBlankValuesFromNamedRange(namedRange) {
    let values = SpreadsheetApp
      .getActiveSpreadsheet()
      .getRangeByName(namedRange)
      .getValues();
    
    // Saves blank rows indexes for later deletion, and filter non-blank rows
    // with at least one blank value.
    let rowCount = values.length;
    let colCount = values[0].length;
    let elementCount;
    let filteredRow;
    let blankRowsArray = [];
    for(let rowIndex = 0; rowIndex < rowCount; rowIndex++) {
      filteredRow = values[rowIndex].filter(
        element => element != ""
      );
      elementCount = filteredRow.length;
  
      if(elementCount == 0) {
      // Empty row.
        blankRowsArray.push(rowIndex); // Save the index for later deletion.
      } else if(elementCount < colCount) {
      // A row with at least one blank value.
        values[rowIndex] = filteredRow;
      }
    }
  
    // Deletes blank rows.
    let elementsDeleted = 0;
    for(let rowIndex = 0; rowIndex < blankRowsArray.length; rowIndex++) {
      values.splice(blankRowsArray[rowIndex] - elementsDeleted, 1);
    }
    
    return values.filter(element => element != "");
  }