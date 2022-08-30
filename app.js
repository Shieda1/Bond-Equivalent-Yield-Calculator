// https://www.omnicalculator.com/finance/bond-equivalent-yield#how-to-calculate-bond-equivalent-yield-bey-bond-equivalent-yield-formula

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const bondequivalentyieldRadio = document.getElementById('bondequivalentyieldRadio');
const bondpriceRadio = document.getElementById('bondpriceRadio');
const facevalueRadio = document.getElementById('facevalueRadio');
const numberofdaystomaturityRadio = document.getElementById('numberofdaystomaturityRadio');

let bondequivalentyield;
let bondprice = v1;
let facevalue = v2;
let numberofdaystomaturity = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

bondequivalentyieldRadio.addEventListener('click', function() {
  variable1.textContent = 'Bond price';
  variable2.textContent = 'Face value';
  variable3.textContent = 'Number of days to maturity';
  bondprice = v1;
  facevalue = v2;
  numberofdaystomaturity = v3;
  result.textContent = '';
});

bondpriceRadio.addEventListener('click', function() {
  variable1.textContent = 'Bond equivalent yield';
  variable2.textContent = 'Face value';
  variable3.textContent = 'Number of days to maturity';
  bondequivalentyield = v1;
  facevalue = v2;
  numberofdaystomaturity = v3;
  result.textContent = '';
});

facevalueRadio.addEventListener('click', function() {
  variable1.textContent = 'Bond equivalent yield';
  variable2.textContent = 'Bond price';
  variable3.textContent = 'Number of days to maturity';
  bondequivalentyield = v1;
  bondprice = v2;
  numberofdaystomaturity = v3;
  result.textContent = '';
});

numberofdaystomaturityRadio.addEventListener('click', function() {
  variable1.textContent = 'Bond equivalent yield';
  variable2.textContent = 'Bond price';
  variable3.textContent = 'Face value';
  bondequivalentyield = v1;
  bondprice = v2;
  facevalue = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(bondequivalentyieldRadio.checked)
    result.textContent = `Bond equivalent yield = ${computebondequivalentyield().toFixed(2)}`;

  else if(bondpriceRadio.checked)
    result.textContent = `Bond price = ${computebondprice().toFixed(2)}`;

  else if(facevalueRadio.checked)
    result.textContent = `Face value = ${computefacevalue().toFixed(2)}`;

  else if(numberofdaystomaturityRadio.checked)
    result.textContent = `Number of days to maturity = ${computenumberofdaystomaturity().toFixed(2)}`;
})

// calculation

function computebondequivalentyield() {
  return (((Number(facevalue.value) - Number(bondprice.value)) / Number(bondprice.value)) * (365 / Number(numberofdaystomaturity.value))) * 100;
}

function computebondprice() {
  return (Number(bondequivalentyield.value) * Number(numberofdaystomaturity.value)) + Number(facevalue.value);
}

function computefacevalue() {
  return (((Number(bondequivalentyield.value) / 100) / (365 / Number(numberofdaystomaturity.value))) * Number(bondprice.value)) + Number(bondprice.value);
}

function computenumberofdaystomaturity() {
  return 365 / ((Number(bondequivalentyield.value) / 100) / ((Number(facevalue.value) - Number(bondprice.value)) / Number(bondprice.value)));
}