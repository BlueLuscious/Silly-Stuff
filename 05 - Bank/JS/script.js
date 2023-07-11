class Client {
    constructor(firstname, salary) {
        this.firstname = firstname
        this.salary = salary
        this.amount = 0
    }

    depositMoney(money) {
        if (money > 0) {
            this.salary += money
            console.log(this.salary)
        } else {
            console.log('nope')
        }
    }

    withdrawMoney(money) {
        if (money > 0) {
            if (amount <= this.salary) {
                this.salary -= money
                console.log(this.salary)
            } else {
                console.log('nope')
            }
        } else {
            console.log('>0')
        }
    }

}

const form = document.getElementById("form")
const send = document.getElementById('sendInputs')




form.addEventListener('submit', function (event) {
    event.preventDefault()

    const firstname = document.getElementById('firstnameInput')
    const salary = parseFloat(document.getElementById('salaryInput'))
    const amount = parseFloat(document.getElementById('amountInput'))

    const client1 = new Client(firstname.value, salary.value)

    client1.depositMoney(amount)
    console.log(client1)

})




