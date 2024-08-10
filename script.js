const userInput = document.getElementById('user-input')
const checkBtn = document.getElementById('check-btn')
const result = document.getElementById('results-div')
const clearBtn = document.getElementById('clear-btn')

const resultArray = []

checkBtn.addEventListener('click', () => {
    if (userInput.value === '') {
        alert('Please provide a phone number')
    }

    const param = userInput.value

    function isUSNumber(param) {
        const usNumberPattern = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/
        return usNumberPattern.test(param)
    }

    if (isUSNumber(param)) {
        resultArray.push(param)
        console.log(resultArray)
        result.innerHTML += `<div class="result-container">
        <p class="result">Valid US number: ${param}</p>
        </div>`
    } else {
        result.innerHTML += `
        <p class="result">Invalid US number: ${param}</p>
        `
    }

    userInput.value = ""
})


clearBtn.addEventListener('click', ()=>{
    result.innerHTML = ""
} )