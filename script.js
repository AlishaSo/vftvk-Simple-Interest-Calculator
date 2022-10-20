function compute()
{
    const principal = document.getElementById("principal").value;
    if(principal <= 0) {
        alert('Enter a positive number');
        document.getElementById("principal").focus();  //will highlight the 'principal' input box once the user clicks 'OK' on the alert
    }


    const rate = document.getElementById('rate').value;
    const years = document.getElementById('num_of_years').value;
    const interest = principal * years * rate / 100;

    const year = new Date().getFullYear()+parseInt(years);
    const result = document.getElementById('result');

    result.innerHTML = `If you deposit <span class='highlight'>${principal}</span>,
        at an interest rate of <span class='highlight'>${rate}</span>.
        You will receive an amount of <span class='highlight'>${interest}</span>,
        in the year <span class='highlight'>${year}</span>`;
}
        
function updateRate() {
    const rateval = document.getElementById('rate').value;
    document.getElementById('rate_val').innerText = `${rateval}%`;
}