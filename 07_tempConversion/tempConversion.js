const ftoc = function(temp_f) {
  let temp_c = (temp_f - 32) / 1.8;
  let rounded_temp_c = Math.round(temp_c * 10) / 10;
  return rounded_temp_c;
};

const ctof = function(temp_c) {
  let temp_f = (temp_c * 1.8) + 32;
  let rounded_temp_f = Math.round(temp_f * 10) / 10;
  return rounded_temp_f
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
