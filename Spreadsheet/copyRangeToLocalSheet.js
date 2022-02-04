/**
 * Copies a range to other local sheet. Copies the range in originDataNamedRange
 * to the left upper most cell in destNamedRange range, located in destSheetName sheet.
 * 
 * @param {string} originDataNamedRange The named range to be copied.
 * @param {string} destSheetName The name of the local sheet where data is beeing copied to.
 * @param {string} destNamedRange The A1Notation range containing the upper left most cell
 * where the origin range is beeing pasted.
 */
 function copyRangeToLocalSheet(originDataNamedRange, destA1Range) {
    let dataRange = SpreadsheetApp
      .getActiveSheet()
      .getRange(originDataNamedRange);
    let destRange = SpreadsheetApp
      .getActiveSpreadsheet()
      .getRange(destA1Range);
    let destSheet = destRange.getSheet();
  
    let destFirstRow = destRange.getRow();
    let destFirstColumn = destRange.getColumn();
    let originRangeRowNumber = dataRange.getNumRows();
    let originRangeColNumber = dataRange.getNumColumns();
    for(let rowIndex = 0; rowIndex < originRangeRowNumber; rowIndex++)
      for(let columnIndex = 0; columnIndex < originRangeColNumber; columnIndex++)
        destSheet
          .getRange(destFirstRow + rowIndex, destFirstColumn + columnIndex)
          .setValue(
            dataRange
              .getCell(rowIndex + 1, columnIndex + 1)
              .getRichTextValue()
              .getText()
          );
  }