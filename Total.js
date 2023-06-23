//Js that is made to be used with patreon
//It gives you the the total ammount you spent for the year
//Made to be used on https://www.patreon.com/settings/billing

/*This could be put into a chrome or firefox addon/extensions and have it only target https://www.patreon.com/settings/billing.
there is also the possibility that you can just have it be an addon/extensions that onlick of the addon/extensions does the calclation.*/

/* The Caclation fucntion*/
function Total_Paied() {
    var r = /[\d\.]+/; //reqular to get number from text (i.e 34.99)
    let c = document.getElementsByClassName("sc-fotOHu bEmMQu"); // Gets the html for each amount you payed to each person (location for the amound in html is in " ")
    let array1 = []; // point less array that I had for testing
    Total = 0; // var that will store the Total 

   /*For loop that gets each the html text in saved "Let c" then adds it to array1 as well as Total*/
for (let index = 0; index < c.length; index++) {
    let g = parseFloat((c[index].textContent).match(r)[0]); // c[index] is each html that has been saved. textcontent makes it so we only get the text with no tags. match(r)[0] is the regex that is geting just the number
    array1.push(g); // add to array1
    Total = Total + g; //adds Total and g to get new totatl
}
alert("Total spent this year: \n" + "$"+ Total); // An alert to show the amount
    
}

/*This makes a button*/
const content = document.getElementById("renderPageContentWrapper"); //location that the next button 
var button = document.createElement('button'); //create the button
button.type = 'button'; // clickable button /
button.className= 'sc-ieecCq eduucN'; //Add in a class tag with the name 'sc-ieecCq eduucN'. This is the sytle that patreon is using for its buttons. 
button.innerHTML = 'Total Spent'; //Text that will be inside of the button
content.prepend(button); //change the location for where the button will be located to the top of the Id ("renderPageContentWrapper"). Having content.append(button) will be at the end of the class

/*This the function that is used for doing a button click event*/
button.addEventListener('click', function() {
	button.onclick = Total_Paied(); // on click run the Total_Paid() function at the top.
	});
