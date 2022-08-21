const lcm = (n1, n2) => {
  let final;
  let gcd = 1;

  for (let i = 2; i < n1 && i < n2; i++) {
    if (n1 % i === 0 && n2 % i === 0) {
      gcd = i;
    }
  }
  final = n1 * n2 / gcd;
  return final;
}

console.log((lcm(6, 8)));//24