/**
 * Determines weather n is a prime or not.
 * @param {number} n
 * @returns {boolean} 
 */
function prime(n) {
  if (n == 0 || n == 1) return false;
  for (let i = 2; i <= n / 2; i++) {
    if (n % i == 0) return false;
  }
  return true;
};

export default prime;
