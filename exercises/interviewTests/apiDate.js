/*Convert the date to a api friend format

Example: formateDate("5/12/2770") -> '27701205'

*/

function formatDate(userDate) {
    // format from M/D/YYYY to YYYYMMDD
    var result;
    //Break the input into components based off of '/' character
    var ray = userDate.split('/');
    //abstract different components of the date
    var year = ray[2];
    var month = ray[0];
    var day = ray[1];
    
    //adjust format for single digits
    month = month < 10 ? '0' + month : month;
    day = day < 10 ? '0' + day : day;
    //Thank you cohersion! <3
    
    //concatentate date components to make result api friendly
    result = year + month + day;
    return result;
  
}
