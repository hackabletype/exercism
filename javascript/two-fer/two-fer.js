var TwoFer = function () {};

TwoFer.prototype.twoFer = function (who) {
  // your code goes here
  // You will have to use the parameter who
  // in some way. In this example, it is just
  // returned, but your solution will have to
  // use a conditional.
  
  const message = `One for ${who===undefined? 'you': who}, one for me.`;
  return message;
};

module.exports = TwoFer;
