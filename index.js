var finances = [
    ['Jan-2010', 867884],
    ['Feb-2010', 984655],
    ['Mar-2010', 322013],
    ['Apr-2010', -69417],
    ['May-2010', 310503],
    ['Jun-2010', 522857],
    ['Jul-2010', 1033096],
    ['Aug-2010', 604885],
    ['Sep-2010', -216386],
    ['Oct-2010', 477532],
    ['Nov-2010', 893810],
    ['Dec-2010', -80353],
    ['Jan-2011', 779806],
    ['Feb-2011', -335203],
    ['Mar-2011', 697845],
    ['Apr-2011', 793163],
    ['May-2011', 485070],
    ['Jun-2011', 584122],
    ['Jul-2011', 62729],
    ['Aug-2011', 668179],
    ['Sep-2011', 899906],
    ['Oct-2011', 834719],
    ['Nov-2011', 132003],
    ['Dec-2011', 309978],
    ['Jan-2012', -755566],
    ['Feb-2012', 1170593],
    ['Mar-2012', 252788],
    ['Apr-2012', 1151518],
    ['May-2012', 817256],
    ['Jun-2012', 570757],
    ['Jul-2012', 506702],
    ['Aug-2012', -1022534],
    ['Sep-2012', 475062],
    ['Oct-2012', 779976],
    ['Nov-2012', 144175],
    ['Dec-2012', 542494],
    ['Jan-2013', 359333],
    ['Feb-2013', 321469],
    ['Mar-2013', 67780],
    ['Apr-2013', 471435],
    ['May-2013', 565603],
    ['Jun-2013', 872480],
    ['Jul-2013', 789480],
    ['Aug-2013', 999942],
    ['Sep-2013', -1196225],
    ['Oct-2013', 268997],
    ['Nov-2013', -687986],
    ['Dec-2013', 1150461],
    ['Jan-2014', 682458],
    ['Feb-2014', 617856],
    ['Mar-2014', 824098],
    ['Apr-2014', 581943],
    ['May-2014', 132864],
    ['Jun-2014', 448062],
    ['Jul-2014', 689161],
    ['Aug-2014', 800701],
    ['Sep-2014', 1166643],
    ['Oct-2014', 947333],
    ['Nov-2014', 578668],
    ['Dec-2014', 988505],
    ['Jan-2015', 1139715],
    ['Feb-2015', 1029471],
    ['Mar-2015', 687533],
    ['Apr-2015', -524626],
    ['May-2015', 158620],
    ['Jun-2015', 87795],
    ['Jul-2015', 423389],
    ['Aug-2015', 840723],
    ['Sep-2015', 568529],
    ['Oct-2015', 332067],
    ['Nov-2015', 989499],
    ['Dec-2015', 778237],
    ['Jan-2016', 650000],
    ['Feb-2016', -1100387],
    ['Mar-2016', -174946],
    ['Apr-2016', 757143],
    ['May-2016', 445709],
    ['Jun-2016', 712961],
    ['Jul-2016', -1163797],
    ['Aug-2016', 569899],
    ['Sep-2016', 768450],
    ['Oct-2016', 102685],
    ['Nov-2016', 795914],
    ['Dec-2016', 60988],
    ['Jan-2017', 138230],
    ['Feb-2017', 671099]
];

console.log("Financial Analysis") //This is the first step that we had to call our title, as simple as just adding a console.log for this.
console.log("----------------------------") //This looks like its a bit of a space gap for the below task, so simply just added a console log to input this, with a string so the system confirms what i wrote.
console.log("Total Months: " + finances.length) // For the total, firstly i need a string to tell the system to just confirm what i wrote and then add all the months which is finances.length, the whole list of months which are included in the dataset.

var sum = 0; // before i start a loop i need to confirm what the variable is going to be, in this case the number is 0.

for (var i = 0; i < finances.length; i++) {
   sum += (finances[i])[1];
}
// I need to add all the months to get the total, I need to make the loop run from the start which is 0 and all the way to the end to get the total, so need to use finances.length for my list and console.log it to get the total amount.
console.log("Total: $" + sum);

var AC = [] //name the variable.

for (var i = 0; i < finances.length - 1; i ++) {
   AC.push(finances[i + 1][1] - finances[i][1]);
}
// to get the average you must start at month -1 so need to add a push command to the array.

var alteration = 0;
for (var i = 0; i < AC.length; i++) { 
   alteration += AC[i];
 } 

var averageChange = alteration / AC.length; //formula to show steps for division to calulate the average.

console.log("Average Change: $" + averageChange.toFixed(2)); // getting the average over the entire period rather than a few months.

var Upamount = 0;
var BigProfit = 1; //confirm my variables for increased profit.

for (var i = 0; i < AC.length; i++) {
    if(BigProfit < AC[i]){ // either less than my Average Change, 
        BigProfit = AC[i];  //or equal to my Average Change, Also put a loop in to go through the list to find the increased profit.
        Upamount = i;
    }   ;
}

var ProfitMonth = finances[Upamount + 1][0];

console.log("Greatest Increase in Profits: " + ProfitMonth + " (" + "$" + BigProfit + ")"); //using a concatenation operator here as combining the string with a + element

var Downamount = 0;
var MinimumProfit = 0; //confirm my variables for my decreased profit. 

for( var i = 0; i < AC.length ; i++) {
    if(MinimumProfit > AC[i]){ // either greater than my Average Change
        MinimumProfit = AC[i]; // or equal to my Average change, same loop as before as its going through the same list but this time looking for the loss amount rather than profit amount.
       Downamount = i;}
}

var LossesMonth = finances[Downamount + 1][0];

console.log("Greatest Decrease in Profits: " + LossesMonth + " (" + "$" + MinimumProfit + ")");