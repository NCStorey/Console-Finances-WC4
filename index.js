let finances = [
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
  ['Feb-2017', 671099],
];

// first task - display total number of months in data set

  //creation of variable to store the array length. Array length found by using .length function

let arraylength = finances.length

//second task - total of profit and loss

  //An empty variable to hold total figure
let netSum=0

  //for loop iterating accross the array adding each item to the netSum figure in turn
for (let i =0; i < finances.length; i++) {netSum += finances[i][1]}

//Third task - The average of the changes in Profit/Losses over the entire period.

  //An empty array to hold the difference between finance periods
let difArray = [];

  //A variable to hold the number of differences in the finances array, variable for use in the for loop
let changelength = finances.length - 1


  //for loop adjusted to the change length. Loop is taking two indexs and finding the difference. The first interation will take indexs [1] (i+1) and minus index [0] (i), the next iteration will take index [2] (i+2) and minus index [1] (i+1). The differences are then pushed to a new array (difarray).

for (let i =0; i < changelength; i++)

{let dif = finances[i+1][1] - finances[i][1];difArray.push(dif)}

  //empty varible for the sum of the differences worked out using the previous forloop (difSum)

let difSum =0

  //for loop finding the sum of the difArray.

for (let i =0; i < difArray.length; i++) {difSum += difArray[i]}

  //average of the differences (average calculated using the mean)(difAv) 

let difAvg = difSum/changelength


//Forth task - month and year of greatest increase in profit and corresponding profit figure 

  //using math max on the difArray. "..." used to deconstruct array into varialbles
  //gives the highest value in the difArray 

let profitHigh = Math.max(...difArray);

  //variable to store the index of the index of the highest value in the difArray


let indexProfitHigh = difArray.indexOf(profitHigh)

  //the index of that value can then be used to find the corresponding entry in the finances array but needs to be increased by one

indexProfitHigh += 1


//final task - month and year of greatest loss in profit and corresponding loss figure 
  // logic and coding much the same as the above task  

let lossHigh = Math.min(...difArray);

let indexLossHigh = difArray.indexOf(lossHigh)

indexLossHigh += 1

//console log of task results

console.log("Financial Analysis - Weekly challenge 4\n______________________________________")
console.log("Total Months : " + arraylength)
console.log("Total : $" + netSum)
console.log("Average Change : $" + difAvg.toFixed(2)) //tofixed use to return two decimal places
console.log("Greatest Increase in Profits : " + finances[indexProfitHigh][0].concat(" $") + (profitHigh)) //concat used to pull items from the arrays and string them together
console.log("Greatest Decrease in Profits : " + finances[indexLossHigh][0].concat(" $") + (lossHigh))
