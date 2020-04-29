//Global funksjon
function isThisCorrect(date) {
    return isDateLength10(date)
    && isDotsRight(date)
    && isYearAbove0000(date)
    && isMonth01Or12(date)
    && monthChecks(date)
}


function isDateLength10(dateFromTest){
    return dateFromTest.length == 10;
 
}


function isDotsRight(dateFromTest){
    const firstDot = dateFromTest.indexOf('.');
    const secondDot = dateFromTest.lastIndexOf('.');
    return firstDot == 2 && secondDot == 5;
 }

 //År er 0000 eller større. Kan sjekkes med year.length === 4 && year >= '0000' && year <= '9999'
function isYearAbove0000(date){
     let year = date.substring(6);
     return year.length === 4 && year >= '0000' && year <= '9999';
     //yearFromTest.length = isYearValid.yearFromTest 
 }

 //Måned er fra og med 01 til og med 12
function isMonth01Or12(date){
     var month = date.substring(3, 5);
     return month >= '01' && month <= '12';
 }

/*Dag er fra og med 01 til og med 28
  29 er lov for februar hvis det er skuddår.
  30 er lov for alle måneder utenom februar
  31 er lovlig for januar, mars, mai, juli, august, oktober og desember
*/

function monthChecks(date) {
     var day = date.substring(0, 2);
     var month = date.substring(3, 5);
     var year = date.substring(6);
     var isShortMonth = (month == '04') || (month == '06') || (month == '09') || (month == '11');
     var isFebruary = month == '02';
     var isLeapYear = ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
     return day >= '01' && day <= '28'
      || day == '29' && (!isFebruary || isLeapYear)
      || day == '30' && (!isFebruary)
      || day == '31' && !isFebruary && !isShortMonth;
}
