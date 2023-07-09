window.addEventListener('DOMContentLoaded', function () {

    const inputStart = document.getElementById('numOne')
    const inputEnd = document.getElementById('numTwo')
    const inputStep = document.getElementById('numThree')
    const inputs = [inputStart, inputEnd, inputStep]
    const calculateButton = document.getElementById('calculateButton')
    const displayInvalidStart = document.getElementById('invalidStart')
    const displayInvalidStep = document.getElementById('invalidStep')
    const displayEmptyInputs = document.getElementById('emptyInputs')
    const displayResult = document.getElementById('displayResult')

    calculateButton.addEventListener('click', function () {
        generateCount()
    })  // click, run generateCount function

    inputs.forEach(function (input, index) {
        input.addEventListener('click', function () {
            if (index >= 0) {
                displayEmptyInputs.innerHTML = ''
                displayResult.innerHTML = ''
            }
            if (index == 0) {
                displayInvalidStart.innerHTML = ''
                inputStart.value = ''
            } else if (index == 1) {
                displayInvalidStart.innerHTML = ''
                inputEnd.value = ''
            } else if (index == 2) {
                displayInvalidStep.innerHTML = ''
                inputStep.value = ''
            }

        })
    }) // warning invalid and empty values blank

    function generateCount() {
        const numOneValue = parseFloat(document.getElementById('numOne').value)
        const numTwoValue = parseFloat(document.getElementById('numTwo').value)
        const numThreeValue = parseFloat(document.getElementById('numThree').value)
        const displayInvalidStart = document.getElementById('invalidStart')
        const displayInvalidStep = document.getElementById('invalidStep')
        const displayEmptyInputs = document.getElementById('emptyInputs')
        const displayResult = document.getElementById('displayResult')

        let isValid = true

        if (isNaN(numOneValue) || isNaN(numTwoValue) || isNaN(numThreeValue)) {
            displayEmptyInputs.innerHTML = 'All, some or one of the inputs are empty'
            isValid = false
        }
        if (numOneValue >= numTwoValue) {
            displayInvalidStart.innerHTML = 'The start number must be less than the end number'
            isValid = false
        }
        if (numThreeValue <= 0) {
            displayInvalidStep.innerHTML = 'The step number must be positive number greater than zero'
            isValid = false
            return
        }
        if (isValid) {
            const numCount = []

            for(let num = numOneValue; num < numTwoValue; num += numThreeValue) {
                numCount.push(num)
            }
            displayResult.innerHTML = numCount.join(', ')
        }
    }
}) // validation and result
