/**
 * Returns true if the named range is empty, false if not.
 * 
 * @param {string} namedRange The named range to check.
 * @return {boolean} True if the named range is empty, false if not.
 */
 function isNamedRangeEmpty(namedRange) {
    let range = SpreadsheetApp
        .getActiveSpreadsheet()
        .getRangeByName(namedRange);

    if(range.isBlank()) return true
    else return false;
}