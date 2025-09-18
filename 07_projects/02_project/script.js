const form = document.querySelector('form')
// This usecase will give you empty value 
//  const height = parseInt (document.querySelector('#height').value)

form.addEventListener('submit',function(e){
    e.preventDefault()

  const height = parseInt (document.querySelector('#height').value)
  const weight = parseInt (document.querySelector('#weight').value)
  const result = document.querySelector('.result')
  let status = ''
   if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = `Please give a valid height ${height}`
   } else if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Please give a valid weight ${weight}`
   } else {
    const bmi = (weight / ((height*height)/10000)).toFixed(2) 
    if (bmi < 18.6){
        status = "Underweight"
    }else if (bmi < 25){
        status = "Normal"
    }else if (bmi < 30){
        status = "Overweight"
    } else {
        status = "Obese"
    }
    // Show the results 
    result.innerHTML = `
                <p> BMI: <span>${bmi} </span></p>
                <p> Status : <span>${status}</span></p>
                `
   }
   
})