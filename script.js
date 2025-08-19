let input = document.querySelectorAll('.days')
let inputBox = document.querySelectorAll('input')
let label = document.querySelectorAll('label')
let errMsg = document.querySelectorAll('.err-msg')
let year = document.querySelector('#year')
let button = document.querySelector('.img-btn')
let day = document.querySelector('#day')
let month = document.querySelector('#month')
let years = document.querySelector('.years')
let showYears = document.querySelector('.show-year')
let showMonths = document.querySelector('.show-month')
let showDays = document.querySelector('.show-day')


input.forEach(data => {
    data.addEventListener('input', function () {
        this.value = this.value.replace(/\D/g, '').slice(0, 2);
    })
})

year.addEventListener('input', function () {
    this.value = this.value.replace(/\D/g, '').slice(0, 4);
})



button.addEventListener('click', () => {

    let dayInput = parseInt(day.value)
    let monthInput = parseInt(month.value)
    let yearInput = parseInt(years.value)

    let birthDate = new Date(yearInput, monthInput - 1, dayInput)
    let today = new Date()

    inputBox.forEach((input, index) => {

        if (input.value === '') {
            input.style.borderColor = 'red'
            label[index].style.color = 'red'
           
            if (errMsg[index]) {
                errMsg[index].style.visibility = 'visible'
            }
        }
        else {
            input.style.borderColor = 'green'
            label[index].style.color = 'green'
            if (errMsg[index]) {
                errMsg[index].style.visibility = 'hidden'
            }
        }

        if (inputBox[0].value < 1 || inputBox[0].value > 31 || birthDate.getDate() !== dayInput) {
            errMsg[0].style.visibility = 'visible'
            errMsg[0].textContent = "Valid Date"
            inputBox[0].style.borderColor = 'red'
            label[0].style.color = 'red'
        }
        if (inputBox[1].value < 1 || inputBox[1].value > 12 || birthDate.getMonth() !== monthInput - 1) {
            errMsg[1].style.visibility = 'visible'
            errMsg[1].textContent = "Valid Month"
            inputBox[1].style.borderColor = 'red'
            label[1].style.color = 'red'
        }
        if (inputBox[2].value < 1900 || inputBox[2].value > new Date().getFullYear() || birthDate.getFullYear() !== yearInput) {
            errMsg[2].style.visibility = 'visible'
            errMsg[2].textContent = "only Past Year"
            inputBox[2].style.borderColor = 'red'
            label[2].style.color = 'red'
        }

    })

    const birthYear = birthDate.getFullYear()
    const birthMonth = birthDate.getMonth()
    const birthDay = birthDate.getDate()

    const currentYear = today.getFullYear()
    const currentMonth = today.getMonth()
    const currentDay = today.getDate()

    let ageYears = currentYear - birthYear
    let ageMonths = currentMonth - birthMonth
    let ageDays = currentDay - birthDay


    if (ageDays < 0) {
        ageMonths--;
        const daysInPrevMonth = new Date(currentYear, currentMonth, 0).getDate();
        ageDays += daysInPrevMonth;
    }

    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }

    if(day.value === '' || month.value === '' || year.value === ''){
         showYears.textContent = "--"
            showMonths.textContent = "--"
            showDays.textContent = "--"
    }
    else{
         showYears.textContent = ageYears
    showMonths.textContent = ageMonths
    showDays.textContent = ageDays
    }

   

})

