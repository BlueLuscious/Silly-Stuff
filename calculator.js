window.addEventListener('DOMContentLoaded', function () {

    const numOne = document.getElementById('num1')
    const numTwo = document.getElementById('num2')
    const inputs = [numOne, numTwo]
    const operatorCheck = document.getElementsByName('operator')
    const calculateButton = document.getElementById('calculateButton')
    const resultDialog = document.getElementById('resultDialog')
    const closeDialogButton = document.getElementById('closeDialogButton')

    operatorCheck.forEach(function (check) {
        check.addEventListener('click', function () {
            calculateButton.disabled = false
        })
    }) // check empty radio

    calculateButton.addEventListener('click', function () {
        const num1 = parseFloat(numOne.value)
        const num2 = parseFloat(numTwo.value)
        const operator = document.querySelector('.operator:checked').value

        if (isNaN(num1) || isNaN(num2)) {
            document.getElementById('empty').value = 'All or one of the inputs are empty'
            return
        }

        let result
        if (operator === 'add') {
            result = num1 + num2
        } else if (operator === 'subs') {
            result = num1 - num2
        } else if (operator === 'mult') {
            result = num1 * num2
        } else if (operator === 'div') {
            result = num1 / num2
        }

        document.getElementById('result').value = result
        resultDialog.showModal()
    }) // calculate numbers and operators, and validation

    closeDialogButton.addEventListener('click', function () {
        resultDialog.close()
        document.getElementById('empty').value = ''
        numOne.value = ''
        numTwo.value = ''
        operatorCheck.forEach(function (check) {
            check.checked = false
        })
        calculateButton.disabled = true
    }) // close pop-up and reset app

    inputs.forEach(function (clickInputs) {
        clickInputs.addEventListener('click', function () {
            document.getElementById('empty').value = ''
        })
    }) // warning disabled
})
