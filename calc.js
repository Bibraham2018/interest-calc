JAVASCRIPT

function compute(){    
    var principal = document.getElementById('principal').value;  //principal initialized to the value of the input element with an id of principal, parsed as an int. This is needed to calculate the final amount, as well as the interest amount
    var rate = document.getElementById('rate').value;    //rate initialized to the value of the input element with an id of rate, parsed as a float. This is needed to calculate the interest amount
    var years = document.getElementById('years').value;  //years initialized to the value of the input element with an id of years, parsed as an int. This is needed to calculate the interest amount
    var interest = principal * years * rate / 100;       //the variable interest: with the value principal * num_years * rate / 100. This is needed to calculate the total amount
    var amount = parseInt(principal) + parseFloat(interest); //the variable amount is the sum of the integer value of principal and the float value of interest
    var result = document.getElementById('result');   //result initialized to the input element with an id of result. This is needed to modify the text when the Compute button is pressed
    var year = new Date().getFullYear() + parseInt(years);  //the logic to convert the ‘No. of Years’ into the actual year in the future. This can be done by adding the number of years (years) to the current year inside the compute() function.
    
    if (principal <= 0){                                //Adds validation for the “Principal” input box. If the user enters zero or a negative value, show an alert which says “Enter a positive number”
        alert('Please enter a positive number!');  //alert message
        document.getElementById('principal').focus(); //Once the user clicks on the alert “OK” button, take the user back to the “Principal” input box, by setting the focus on this box using the focus method in the code for principal input validation:

    }
    
    else{   //Within the else clause, I set the inner html property of the result to the text below, replacing anything within the square brackets [] with its actual value. Text used :If you deposit $[PRINCIPAL],<br>at an interest rate of [RATE]%.<br>You will receive an amount of $[INTEREST],<br>in the year [YEAR]<br>
        result.innerHTML = "If you deposit $" + "<mark>" + principal + "</mark>" + ",\<br\> at an interest rate of " + "<mark>" + rate + "%" + "</mark>" + "\<br\> You will receive an amount of $" + "<mark>" + amount + "</mark>" + ",\<br\> in the year " + "<mark>" + year + "</mark>" + "\<br\>";  // Made sure the numbers in the result are highlighted by using the mark HTML tag around each variable value

    }
}

function updateRate()
{
var rateval = document.getElementById('rate').value;
document.getElementById('rate_val').innerText = rateval;

}
