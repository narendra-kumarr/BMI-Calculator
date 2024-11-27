const form = document.querySelector('form')
form.addEventListener('submit', function(e){
    e.preventDefault()

  const Height=  parseInt(document.querySelector('#Height').value)
  const Weight=  parseInt(document.querySelector('#Weight').value)
  const result=  document.querySelector('#result')
  const guide=  document.querySelector('#guide')
 

  if(Height == "" || Height <=0 || isNaN(Height)){
    result.innerHTML = `please give a valid Height ${Height}`
  }
  else if(Weight == "" || Weight <=0 || isNaN(Weight)){
    result.innerHTML = `please give a valid Weight ${Weight}`
  }

  else {
    const bmi = (Weight/ ((Height*Height)/10000)).toFixed(2)
    result.innerHTML = `<span>Your BMI is ${bmi}</span>`

    if(bmi<18.5){
        guide.innerHTML = `You are underweight`
    }
    else if(bmi>=18.6 && bmi<24.9){
        guide.innerHTML = `You are normal`
    }
    else{
        guide.innerHTML = `You are overweight`
    }
  }

  
})