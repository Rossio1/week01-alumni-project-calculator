const button = document.getElementsByTagName('button')

Array.from(button).forEach((el)=>{
  el.addEventListener('click', function(){
    let name = this.name
    console.log(name)
    let val1 = parseInt(document.getElementById('val1').value)
    console.log(val1)
    let val2 = parseInt(document.getElementById('val2').value)
    console.log(val2)
    let answer;
    let calc = new Calculator
    if(name == 'add'){
      console.log('run')
      answer = calc.add(val1, val2)
    }
    if(name == 'sub'){
      answer = calc.sub(val1, val2)
    }
    if(name == 'mult'){
      answer = calc.mult(val1, val2)
    }
    if(name == 'divide'){
      answer = calc.divide(val1, val2)
    }
    console.log(answer)
    displayAnswer(answer)
  })
})

function displayAnswer(answer){
  document.getElementById('answer').innerHTML = answer
}


class Calculator{
  constructor(){

  }
  add(val1, val2){
    return val1 + val2
  }
  sub(val1, val2){
    return val1 - val2
  }
  mult(val1, val2){
    return val1 * val2
  }
  divide(val1, val2){
    return val1 / val2
  }
}
