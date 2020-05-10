const adder = (...nums) => {
  return nums.reduce((total, num) => total + num, 0);
};

module.exports = adder;
