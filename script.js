
const KG_LB = 2.20462
const LB_KG = 0.453592 


// function kgConverter (weight) {
//   return weight * LB
// }
const kgConverter = (weight) => (weight * KG_LB).toFixed(2);
const lbConverter = (weight) => (weight * LB_KG).toFixed(2);
const reset = () => {
  document.querySelector('.kg').value = ``
  document.querySelector('.result').value = ``
}


//Button to calculate
document.querySelector('.btn-kg').addEventListener('click', function(){
  let weight = document.querySelector('.kg').value
  if (document.querySelector('.converter').innerHTML === 'Kilograms:') {
    let result = kgConverter(weight)
    // console.log(`el resultado es ${result}`);
    document.querySelector('.result').value = `${result}`
  } else {
    let result = lbConverter(weight)
    // console.log(`el resultado es ${result}`);
    document.querySelector('.result').value = `${result}`
  }
});


//Button to Reset
document.querySelector('.btn-rst').addEventListener('click', function(){
  reset();
});

//Swap button
document.querySelector('.btn-swap').addEventListener('click', function(){
  if (document.querySelector('.converter').innerHTML === 'Kilograms:') {
    document.querySelector('.h1').innerHTML = 'Pounds to Kilograms conversion'
    document.querySelector('.p1').innerHTML = 'Enter the weight (mass) in pounds and press the <i>Convert</i> button:'
    document.querySelector('.converter').innerHTML = 'Pounds:'
    document.querySelector('.btn-kg').innerHTML = 'Convert to lb'
    document.querySelector('.measure').innerHTML = 'lb'
    document.querySelector('.kg').placeholder = 'Weight in lb'
    document.querySelector('.converted').innerHTML = 'Kilograms:'
    document.querySelector('.measure2').innerHTML = 'kg'
  } else {
    document.querySelector('.h1').innerHTML = 'Kilograms to Pounds conversion'
    document.querySelector('.p1').innerHTML = 'Enter the weight (mass) in kilograms and press the <i>Convert</i> button:'
    document.querySelector('.converter').innerHTML = 'Kilograms:'
    document.querySelector('.btn-kg').innerHTML = 'Convert to kg'
    document.querySelector('.measure').innerHTML = 'kg'
    document.querySelector('.kg').placeholder = 'Weight in kg'
    document.querySelector('.converted').innerHTML = 'Pounds:'
    document.querySelector('.measure2').innerHTML = 'lb'
  }
  reset();
});