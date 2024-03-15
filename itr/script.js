// script.js
// Define your function to process salary here
function calculateTax(salary) {
    // Example function: calculating tax as 20% of the salary
    if(salary<=300000){
        salary=0;
    }
    else if(salary>300000 && salary<=600000){
        salary=salary*0.05
    }
    else if(salary>600000 && salary<=900000){
        salary=salary*0.10
    }
    else if(salary>900000 && salary<=1200000){
        salary=salary*0.15
    }
    else if(salary>1200000 && salary<=1500000){
        salary=salary*0.20
    }
    else if(salary>1500000 ){
        salary=salary*0.30
    }
    return salary;
}

document.getElementById("salaryForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
    
    const salary = parseFloat(document.getElementById("salaryInput").value);

    // Call your defined function to process salary
    const tax = calculateTax(salary);

    // Display the result
    // Display the result
document.getElementById("result").innerHTML = `Tax to pay: ₹${tax.toFixed(2)} in the <span style="font-weight: 600;"><a href="https://cleartax.in/s/new-tax-regime-frequently-asked-questions">New Tax Regime</a></span><br>
However, If the user has a housing loan intrest upto ₹2,00,000 and(or) <br>investments(stocks/policies) upto ₹1,50,000 and(or) is a benifitiary of the <br><a href="https://www.indiapost.gov.in/Financial/pages/content/nps.aspx">NPS(National Pension Scheme)</a>,the <span style="font-weight: 600;"><a href="https://life.futuregenerali.in/life-insurance-made-simple/tax-hacks/blogs/old-tax-regime/">Old Tax Regime</a></span> may be suitable for you.`;

});
