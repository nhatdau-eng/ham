function isPrime(number) {
    if (number < 2) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

function checkPrime() {
    const number = parseInt(document.getElementById("number").value);
    const result = document.getElementById("result");

    if (isNaN(number)) {
        result.textContent = "Vui lòng nhập một số!";
        return;
    }

    if (isPrime(number)) {
        result.textContent = `${number} là số nguyên tố.`;
    } else {
        result.textContent = `${number} không phải là số nguyên tố.`;
    }
}

document.getElementById("checkBtn").addEventListener("click", checkPrime);