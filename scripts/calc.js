
document.querySelector('.calc-btn').addEventListener('click', (e) => {calculate(e)});
document.addEventListener('keypress', (e) => {
    if(e.key === 'Enter') calculate();
})

let inputWeight = document.getElementById('weight');
let inputFeet = document.getElementById('feet');
let inputInches = document.getElementById('inches');
let result = document.querySelector('.result');

function calculate(e)
{
    let weight = inputWeight.value;
    let feet = inputFeet.value;

    
    let inches = parseInt(inputFeet.value) * 12 + parseInt(inputInches.value);
    
    let bmi = (weight / (Math.pow(inches,2))) * 703;

    if(!isFinite(bmi)||isNaN(bmi) || isNaN(weight) || isNaN(feet) || isNaN(inches))
    {
        alert('Something went wrong!! Try again.');
        location.reload();
        return;
    }



    bmi = Math.round(bmi*=100) / 100;

    let all = document.querySelector('.total-container');

    if(bmi < 18.5) all.style.backgroundColor = 'orange';
    else if(bmi <= 25) all.style.backgroundColor = 'green';
    else if(bmi <= 30) all.style.backgroundColor = 'orange';
    else all.style.backgroundColor = 'red';

    result.textContent = "Your BMI is: " + bmi;
}