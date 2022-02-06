/**
 * Return a two dimensional array of a filtered one-column-size named range
 * containing only its non-blank values.
 * 
 * @param {string} namedRange The one-column-size named range which is going
 * to be filtered.
 * @return {Object[][]} The filtered range as a two dimensional array.
 * @todo Filter a range from any size.
 */
function filterBlankRows(namedRange) {
  let values = SpreadsheetApp
    .getActiveSpreadsheet()
    .getRangeByName(namedRange)
    .getValues();
  return values.filter(element => element != "");
}