window.addEventListener('DOMContentLoaded', function () {

    const display = document.getElementById('display')
    const buttons = Array.from(document.querySelectorAll('.number, .operator, .decimal'))
    const equalButton = document.querySelector('.equal')
    const resetButton = document.querySelector('.reset')
    const deleteButton = document.querySelector('.delete')

    buttons.forEach(function (button) {
        button.addEventListener('click', handleButtonClick)
    })

    equalButton.addEventListener('click', evaluateExpression)
    resetButton.addEventListener('click', resetOperation)
    deleteButton.addEventListener('click', deleteDigit)

    function handleButtonClick(event) {
        const buttonValue = event.target.innerText
        display.value += buttonValue
    }

    function safeEval(expression) {
        let result
        try {
            result = Function(`'use strict'; return (${expression})`)()
        } catch (error) {
            throw new Error('Invalid expression')
        }

        if (isNaN(result) || !isFinite(result)) {
            throw new Error('Invalid expression')
        }

        return result
    }

    function evaluateExpression() {
        const expression = display.value

        try {
            const result = safeEval(expression)
            display.value = result
        } catch (error) {
            display.value = 'Error'
        }
    }

    function resetOperation() {
        display.value = ''
    }

    function deleteDigit() {
        display.value = display.value.slice(0, -1)
    }
})