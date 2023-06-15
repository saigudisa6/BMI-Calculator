let quotes = ["BMI is a reasonable indicator of body fat for both adults and children. Because BMI does not measure body fat directly, it should not be used as a diagnostic tool. Instead, BMI should be used as a measure to track weight status in populations and as a screening tool to identify potential weight problems in individuals.",
"As a single measure, BMI is clearly not a perfect measure of health. But it's still a useful starting point for important conditions that become more likely when a person is overweight or obese. In my view, it's a good idea to know your BMI. But it's also important to recognize its limitations.",
"BMI is a useful measure of overweight and obesity. It is calculated from your height and weight. BMI is an estimate of body fat and a good gauge of your risk for diseases that can occur with more body fat. The higher your BMI, the higher your risk for certain diseases such as heart disease, high blood pressure, type 2 diabetes, gallstones, breathing problems, and certain cancers."];
let places = [
    'Center for Disease Control and Prevention', 
    'Robert H. Shmerling, MD, Harvard Health Publishing',
    'National Heart, Lung, and Blood Institute'];

let count = 0;
let quote = document.querySelector('.quote');
let person = document.querySelector('.place-name');
let slideCount = document.querySelector('.slider-num');

document.querySelector('.next').addEventListener('click', (e) => {switchQuote(e)});

function switchQuote(e)
{
    count++;
    if(count > 2) count = 0;

    quote.textContent = quotes[count];
    person.textContent = places[count];

    slideCount.textContent = count+1 + '/3';
}