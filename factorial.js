/* eslint-disable no-console */
/* eslint-disable eqeqeq */
function factorial(n) {
  if (n == 0 || n == 1) {
    return 1;
  }
  return n * factorial(n - 1);
}
module.exports = factorial;
