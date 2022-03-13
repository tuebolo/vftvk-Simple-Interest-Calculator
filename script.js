function compute() {
    document.getElementById("result").innerHTML = ""

    const principalElement = document.getElementById("principal");
    const principal = parseFloat(principalElement.value);
    if (principal <= 0) {
        alert( "Enter a positive number")
        principalElement.focus()
        return
    }


    const rate = parseFloat(document.getElementById("rate").value);
    const years = parseFloat(document.getElementById("years").value);
    const amount = principal * (rate / 100 * years);
    const year = new Date().getFullYear() + parseInt(years);
    const html = `If you deposit <span class="highlight">${principal}</span>
        <br\>at an interest rate of <span class="highlight">${rate}</span>
        <br\>You will receive an amount of <span class="highlight">${amount.toFixed(2)}</span>
        <br\>in the year <span class="highlight">${year}</span> <br\>`
    document.getElementById("result").innerHTML = html
}

function updateRate() {
    const rateval = parseFloat(document.getElementById("rate").value);
    document.getElementById("rate_val").innerText = `${rateval.toFixed(2)}%`;
}

window.addEventListener('load', function() {
    updateRate()
})
