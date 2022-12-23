const a = 9;
const b = 8;
console.log(a + b);

function multiply(a, b) {
  return a * b;
}
const log = {
  warning: (info) => {
    console.log(`warning`, info);
  },
  error: (info) => {
    console.log(`error`, info);
  },
};
// console.log(multiply(6, 8));
module.exports = { multiply, log };
