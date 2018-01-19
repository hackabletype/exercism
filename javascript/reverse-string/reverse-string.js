
function reverseString(input) {
  let s;
  if (input) {
    s = input.split('').reverse().join('');
  } else {
    s = '';
  }
  return s;
}

module.exports = reverseString;
