// The purpose of this function is to return a value from the smallest value in the array
const limitMinValue = (
  minValueofData,
  mostSignificantDigitMin,
  nbOfZeroOfMin,
  lowerSignificantDigit
) => {
  let newStr = '';
  let result = '';
  // If my lenght value is equal to 1, I return 0 (exemple : 9 => 0)
  if (minValueofData.toString().length == 1) {
    result = 0;
    // If the first position of my value - 1 is equal to 0 ( exemple 120, 1 - 1 === 0)
  } else if (parseInt(mostSignificantDigitMin) - 1 === 0) {
    // I concat 0 to the first value (1), ( exemple : 120 => 100 || 1803 === 1000 )
    for (let j = 0; j < nbOfZeroOfMin; j++) {
      newStr += '0';
    }
    let toStr = mostSignificantDigitMin.toString();
    result = toStr += newStr;
    // else if i do the same of large number ( exemple : 269 => 100 || 896 => 700)
  } else if (minValueofData.toString().length >= 2) {
    for (let i = 0; i < nbOfZeroOfMin; i++) {
      newStr += '0';
    }
    result = lowerSignificantDigit += newStr;
  }

  return result;
};
// The purpose of this function is to return a value from the highest value in the array
// (exemple : 810 => 800 || 7236 => 8000)
const limitMaxValue = (higherSignDigit, nbOfZeroOfMax) => {
  let newStr = '';
  for (let i = 0; i < nbOfZeroOfMax; i++) {
    newStr += '0';
  }
  return (higherSignDigit += newStr);
};

export { limitMinValue, limitMaxValue };
