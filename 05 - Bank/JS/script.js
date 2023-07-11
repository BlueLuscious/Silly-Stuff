class Client {
    constructor(firstname, lastname, identification) {
        this.firstname = firstname
        this.lastname = lastname
        this.identification = identification
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
        lastname = document.getElementById('lastnameInput').value
        identification = document.getElementById('idInput').value
        const client = new Client(firstname, lastname, identification)
        console.log(client)
    }
    
    const send = document.getElementById('sendInputs')
    send.addEventListener('click', createClient)
    
})
