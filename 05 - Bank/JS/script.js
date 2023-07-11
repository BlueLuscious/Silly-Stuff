class Client {
    constructor(firstname) {
        this.firstname = firstname
    }

/*     depositMoney(money) {
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
    } */

}

window.addEventListener('DOMContentLoaded', function () {

    function createClient() {
        firstname = document.getElementById('firstnameInput').value
        const client = new Client(firstname)
        console.log(client)
    }
    
    const send = document.getElementById('sendInputs')
    send.addEventListener('click', createClient)
    
})





