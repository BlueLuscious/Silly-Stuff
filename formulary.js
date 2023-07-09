// index.html
window.addEventListener('DOMContentLoaded', function () {

    const firstName = document.getElementById('firstName')
    const lastName = document.getElementById('lastName')
    const inputId = document.getElementById('inputId')
    const birthday = document.getElementById('birthday')
    const inputAge = document.getElementById('age')
    const gender = Array.from(document.getElementsByName('gender'))
    const proLang = Array.from(document.getElementsByClassName('proLang'))
    const inputs = [firstName, lastName, inputId, birthday]
    const sendForm = document.getElementById('sendForm')
    const dataForm = document.getElementById('dataForm')

    const invalidFirstName = document.getElementById('invalidFirstName')
    const invalidLastName = document.getElementById('invalidLastName')
    const invalidId = document.getElementById('invalidId')
    const invalidBirthday = document.getElementById('invalidBirthday')
    const invalidRadio = document.getElementById('invalidRadio')
    const invalidCheckBox = document.getElementById('invalidCheckBox')

    sendForm.addEventListener('click', function (event) {
        event.preventDefault()

        let isValid = true

        const validateInputs = [firstName.value, lastName.value, inputId.value, birthday.value]
        validateInputs.forEach(function (invalidValue, index) {
            if (!isNaN(invalidValue) || !/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+$/.test(invalidValue)) {
                if (index == 0) {
                    invalidFirstName.innerHTML = 'Invalid value, only letters'
                    isValid = false
                    return
                }
            }
            if (!isNaN(invalidValue) || !/^([a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+\s)*[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+$/.test(invalidValue)) {
                if (index == 1) {
                    invalidLastName.innerHTML = 'Invalid value, only letters'
                    isValid = false
                    return
                }
            }
            if (!/^[0-9]{7,8}$/.test(invalidValue)) {
                if (index == 2) {
                    invalidId.innerHTML = 'Invalid value, only numbers (7 or 8)'
                    isValid = false
                    return
                }
            }
            if (!isNaN(invalidValue) || /^(\d{2})-(\d{2})-(\d{4})$/.test(invalidValue)) {
                if (index == 3) {
                    invalidBirthday.innerHTML = 'Invalid value, only numbers'
                    isValid = false
                    return
                }
            }
        }) // validation empty inputs

        const birthdate = new Date(birthday.value)
        const ageYearOld = calculateAge(birthdate)
        function calculateAge(birthdate) {
            const currentDate = new Date()
            const age = currentDate.getFullYear() - birthdate.getFullYear()
            const currentMonth = currentDate.getMonth()
            const currentDay = currentDate.getDate()
            const birthMonth = birthdate.getMonth()
            const birthDay = birthdate.getDate()
            if (currentMonth < birthMonth || (currentMonth == birthMonth && currentDay < birthDay)) {
                age--
            }
            return age
        } // calculate age

        const validateRadios = gender.find(function (radio) {
            return radio.checked
        })
        if (!validateRadios) {
            invalidRadio.innerHTML = 'The radio is empty'
            isValid = false
        } // validation empty radio

        const validateCheckBox = proLang.some(function (checkbox) {
            return checkbox.checked
        })
        if (!validateCheckBox) {
            invalidCheckBox.innerHTML = 'All, some or one of the checkboxes are empty'
            isValid = false
        } // validation empty check-box

        if (isValid) {
            inputAge.value = ageYearOld
            dataForm.appendChild(inputAge)
            dataForm.submit()
        } // validation confirmed, add age value and submit form
    })

    inputs.forEach(function (emptyInputs, index) {
        emptyInputs.addEventListener('click', function () {
            if (index == 0) {
                firstName.value = ''
                invalidFirstName.innerHTML = ''
            } else if (index == 1) {
                lastName.value = ''
                invalidLastName.innerHTML = ''
            } else if (index == 2) {
                inputId.value = ''
                invalidId.innerHTML = ''
            } else if (index == 3) {
                birthday.value = ''
                invalidBirthday.innerHTML = ''
            }
        }) // warning empty inputs blank
    })

    gender.forEach(function (genderInput) {
        genderInput.addEventListener('click', function () {
            invalidRadio.innerHTML = ''
        })
    }) // warning empty radio blank

    proLang.forEach(function (langInput) {
        langInput.addEventListener('click', function () {
            invalidCheckBox.innerHTML = ''
        })
    }) // warning empty checkbox blank
})

// form.html
window.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search)

    function idFormat(id) {
        return id.replace(/(\d{1,3})(?=(\d{3})+$)/g, "$1.");
    }

    document.getElementById('displayFirstName').value = urlParams.get('firstName')
    document.getElementById('displayLastName').value = urlParams.get('lastName')
    const idValue = urlParams.get('inputId')
    const idFormatted = idFormat(idValue)
    document.getElementById('displayInputId').value = idFormatted
    const birthdayValue = urlParams.get('birthday')
    const birthdayFormat = birthdayValue.split('-').reverse().join('/')
    document.getElementById('displayBirthday').value = birthdayFormat
    document.getElementById('displayAge').value = urlParams.get('age')
    document.getElementById('displayGender').value = urlParams.get('gender')
    document.getElementById('displayProLang').innerHTML = urlParams.getAll('proLang').map(function (lang) {
        return '<li>' + lang + '</li>'
    }).join('')
}) // call the params and display them in HTML
