/**
 * Shows a message on screen.
 * 
 * @param {string} msg The message that is beeing displayed.
 */
 function showMsg(msg) {
    let ui = SpreadsheetApp.getUi();
    ui.alert(msg);
}