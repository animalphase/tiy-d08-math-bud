console.log('begin script');

// gimme DOM
console.log(document);
console.dir(document);

// find necessary elements
var value1 = document.querySelector('.value1');
var value2 = document.querySelector('.value2');
var btn_add = document.querySelector('.btn-add');
var btn_subtract = document.querySelector('.btn-subtract');
var btn_multiply = document.querySelector('.btn-multiply');
var btn_divide = document.querySelector('.btn-divide');
var outputField = document.querySelector('.output-field');

console.log('\nVARIABLES: \n' +
            '🔸 value1 : ' + value1 + '\n' +
            '🔸 value2 : ' + value2 + '\n' +
            '🔸 btn ➕ : ' + btn_add  + '\n' +
            '🔸 btn ➖ : ' + btn_subtract  + '\n' +
            '🔸 btn ✖️ : ' + btn_multiply  + '\n' +
            '🔸 btn ➗ : ' + btn_divide  + '\n' +
            '🔸 outputField : ' + outputField + '\n ');


// actions
btn_add.onclick = function() {
  console.log('action: add ➕ ⤵');
  doMath('add');
};

btn_subtract.onclick = function() {
  console.log('action: subtract ➖ ⤵');
  doMath('subtract');
};

btn_multiply.onclick = function() {
  console.log('action: multiply ✖️ ⤵');
  doMath('multiply');
};

btn_divide.onclick = function() {
  console.log('action: divide ➗ ⤵');
  doMath('divide');
};


function doMath(operator) {
  var val1 = parseFloat(value1.value);
  var val2 = parseFloat(value2.value);
  var result;

  if (operator === 'add'){
    result = val1 + val2;
    console.log(val1 + ' + ' + val2 + ' = ' + result);
  }
  else if (operator === 'subtract') {
    result = val1 - val2;
    console.log(val1 + ' - ' + val2 + ' = ' + result);
  }
  else if (operator === 'multiply') {
    result = val1 * val2;
    console.log(val1 + ' * ' + val2 + ' = ' + result);
  }
  else if (operator === 'divide') {
    result = val1 / val2;
    console.log(val1 + ' / ' + val2 + ' = ' + result);
  }
  else {
    console.log('error');
  }

  // output results
  if (isNaN(result) !== true){
      outputField.innerText = result;
  } else {
    outputField.innerText = 'ERROR';
  }

}
