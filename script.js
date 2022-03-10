function compute() {
    const principal = parseFloat(document.getElementById("principal").value);
    const rate = parseFloat(document.getElementById("rate").value);
    const years = parseFloat(document.getElementById("years").value);
    const amount = principal * years * rate / 100;
    const year = new Date().getFullYear() + parseInt(years);
    const html = "If you deposit " + principal +
        ",\<br\>at an interest rate of " + rate +
        "%\<br\>You will receive an amount of " + amount +
        ",\<br\>in the year " + year + "\<br\>"
    document.getElementById("result").innerHTML = html
}

function rate() {


    return rate
}

function updateRate() {
    const rateval = parseFloat(document.getElementById("rate").value);
    document.getElementById("rate_val").innerText = `${rateval.toFixed(1)}%`;
}
