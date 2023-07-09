window.addEventListener('DOMContentLoaded', function () {

    const calculatorButton = document.getElementById('calculatorButton')
    const formularyButton = document.getElementById('formularyButton')
    const countGeneratorButton = document.getElementById('countGeneratorButton')

    calculatorButton.addEventListener('click', function () {
        window.location.href = 'calculator.html'
    })

    formularyButton.addEventListener('click', function () {
        window.location.href = 'formulary.html'
    })

    countGeneratorButton.addEventListener('click', function () {
        window.location.href = 'countGenerator.html'
    })
})
