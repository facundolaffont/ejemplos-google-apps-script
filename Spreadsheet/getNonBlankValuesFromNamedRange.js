/**
 * Filter a named range to return only non-blank values.
 * 
 * @param {string} namedRange The named range which is going to be filtered.
 * @return {Object[][]} The filtered range.
 */
 function getNonBlankValuesFromNamedRange(namedRange) {
    let values = SpreadsheetApp
      .getActiveSpreadsheet()
      .getRangeByName(namedRange)
      .getValues();
    return values.filter(element => element != "");
  }